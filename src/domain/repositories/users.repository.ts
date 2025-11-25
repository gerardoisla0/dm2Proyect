import { StatusUser } from "../../data/source/remote/interface/backendApi.interface";
import { User } from "../entities/User";

export interface UserRepository{
    login(email: string, password: string): Promise<any>;
    checkstatus(email: string, token: string): Promise<StatusUser>;
    register(email: string, password: string, fullName: string): Promise<User>;
}