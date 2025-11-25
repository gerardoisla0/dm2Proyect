import { User } from "../../domain/entities/user";
import { LoginResponse, StatusUser } from "../source/remote/interface/backendApi.interface";

export class UserMapper {
    static async userApiToUserEntity(data: LoginResponse): Promise<User>{

        return {
            correo: data.email,
            nombreCompleto: data.fullName
        }
    }

    static async userApiToStatusUserEntity(data: LoginResponse): Promise<StatusUser>{

        return {
            email:    data.email,
            fullName: data.fullName,
            id:       data.id
        }
    }
}