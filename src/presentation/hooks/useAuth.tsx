import { create } from "zustand";
import { User } from "../../domain/entities/user";
import { LoginUseCase } from "../../domain/useCases/login.usecase";
import { StorageAdapter } from "../../data/source/local/storage.adapter";
import { StatusUser } from "../../data/source/remote/interface/backendApi.interface";
import { CheckStatusUseCase } from "../../domain/useCases/checkstatus.usecase";

export type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

export interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: StatusUser;

    login: (email: string, password: string) => Promise<any>;
    checkStatus: () => Promise<any>;
    logout: () => Promise<any>;
}

export const useAuth = create<AuthState>()((set,get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async (email: string, password: string) => {
        const token = await LoginUseCase(email,password);
        //Validamos si el usuario existe
        if(!token){
            set(
                {
                    status: 'unauthenticated',
                    token: undefined,
                    user: undefined,
                }
            )
        }
        // Si el usuario existe, guardamos en localstorage
        await StorageAdapter.setItem('email', email);        
        await StorageAdapter.setItem('token', token);
        return token;
    },
    checkStatus: async () => {
        const email = await StorageAdapter.getItem('email');
        const token = await StorageAdapter.getItem('token');
        if(!email || !token){
             set(
                {
                    status: 'unauthenticated',
                    token: undefined,
                    user: undefined,
                }
            )
            return null;
        }

        const resp: StatusUser = await CheckStatusUseCase(email,token);
        if(!resp){
            await StorageAdapter.removeItem('email');
            await StorageAdapter.removeItem('token');
             set(
                {
                    status: 'unauthenticated',
                    token: undefined,
                    user: undefined,
                });
            return resp;
        }

           set(
            {
                status: 'authenticated',
                token: undefined,
                user: resp,
            });
        return resp;

    },
    logout: async () => {
        await StorageAdapter.removeItem('email');
        await StorageAdapter.removeItem('token');
        set(
            {
                status: 'unauthenticated',
                token: undefined,
                user: undefined,
            }
        )
    }

 })
)