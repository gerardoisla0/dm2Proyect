import { UserRepositoryImpl } from "../../data/repositories/UserRepositoryImpl";
import { User } from "../entities/User";

const {login} = new UserRepositoryImpl();
export const LoginUseCase = async (email: string, password: string): Promise<any> => {
  return await login(email, password);
}
