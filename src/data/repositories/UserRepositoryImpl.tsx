import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/users.repository";
import { backendApi } from "../source/remote/api/backendApi";
import { LoginResponse } from "../source/remote/interface/backendApi.interface";


export class UserRepositoryImpl implements UserRepository{

    async login(email: string, password: string): Promise<User[]> {
        console.log('logueando usuarios...');
            const {data} = await backendApi.post<LoginResponse>('/auth/login',   
               {
                    "email" : email,
                    "password" : password
                }
            );
            console.log(data);
            return [];
    }
    create(email: string, password: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    
}
