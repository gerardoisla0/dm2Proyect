import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/repositories/users.repository";
import { UserMapper } from "../mappers/user.mapper";
import { backendApi } from "../source/remote/api/backendApi";
import { LoginResponse, StatusUser } from "../source/remote/interface/backendApi.interface";
import auth from '@react-native-firebase/auth';

export class UserRepositoryImpl implements UserRepository{
    
    async checkstatus(email: string, token: string): Promise<StatusUser> {
         const {data} = await backendApi.post<LoginResponse>('/auth/checkstatus',   
               {
                    "email" : email,
                    "token" : token
                }
            );
            return UserMapper.userApiToStatusUserEntity(data);
    }

    async login(email: string, password: string): Promise<any> {
        console.log('logueando usuarios...');
           /* const {data} = await backendApi.post<LoginResponse>('/auth/login',   
               {
                    "email" : email,
                    "password" : password
                }
            );
            return UserMapper.userApiToUserEntity(data);*/
            try{ 
                const userRecord = await auth().signInWithEmailAndPassword(email,password);
                const idToken = await userRecord.user.getIdToken();
                console.log(idToken);
                return idToken;
            }catch(error){
                console.log(error);
            }

    }
    async register(email: string, password: string, fullName: string): Promise<User> {
             console.log('registrando  usuario...');
            const {data} = await backendApi.post<LoginResponse>('/auth/register',   
               {
                    "email" : email,
                    "password" : password,
                    "fullName": fullName
                }
            );
            return UserMapper.userApiToUserEntity(data);
    }
    
}
