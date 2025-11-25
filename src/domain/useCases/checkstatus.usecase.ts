import { UserRepositoryImpl } from "../../data/repositories/UserRepositoryImpl";
import { StatusUser } from "../../data/source/remote/interface/backendApi.interface";
import { User } from "../entities/User";

const {checkstatus} = new UserRepositoryImpl();
export const CheckStatusUseCase = async (email: string, token: string): Promise<StatusUser> => {
  return await checkstatus(email, token);
}
