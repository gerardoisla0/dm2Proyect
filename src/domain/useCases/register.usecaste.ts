import { UserRepositoryImpl } from "../../data/repositories/UserRepositoryImpl";
import { User } from "../entities/User";

const {register} = new UserRepositoryImpl();
export const RegisterUseCase = async (email: string, password: string, fullName: string): Promise<User> => {
  return await register(email, password, fullName);
}
