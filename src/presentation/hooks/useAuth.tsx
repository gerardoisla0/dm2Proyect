import { create } from "zustand";
import { User } from "../../domain/entities/user";
import { LoginUseCase } from "../../domain/useCases/login.usecase";
import { StorageAdapter } from "../../data/source/local/storage.adapter";

export type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

export interface AuthState{
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<any>;
    checkStatus: () => Promise<any>;
    logout: () => Promise<any>;
}

export const useAuth = create<AuthState>()((set,get) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: async (email: string, password: string) => {
        const user = await LoginUseCase(email,password);
        //Validamos si el usuario existe
        if(!user){
            set(
                {
                    status: 'unauthenticated',
                    token: undefined,
                    user: undefined,
                }
            )
        }
        // Si el usuario existe, guardamos en localstorage
        await StorageAdapter.setItem('email', user.correo);        
        await StorageAdapter.setItem('fullName', user.nombreCompleto);
        set(
            {
                status: 'authenticated',
                token: '1232144213',
                user: user,
            }
        )
        return user;
    },
    checkStatus: async () => {
        const email = await StorageAdapter.getItem('email');
        const fullName = await StorageAdapter.getItem('fullName');
        if(email === null || fullName === null){
            set(
                {
                    status: 'unauthenticated',
                    token: undefined,
                    user: undefined,
                }
            )
            console.log("User is unauthenticated");
        }else{
            set(
                {
                    status: 'authenticated',
                    token: '123123123',
                    user: { correo: email || '', nombreCompleto: fullName || ''},
                }
            )
            console.log("User is Authenticated");
        }
        return null;

    },
    logout: async () => {
        await StorageAdapter.removeItem('email');
        await StorageAdapter.removeItem('fullName');
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