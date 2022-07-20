import UsecaseAlias from "../../../core/interfaces/usecase";
import { LoginParam } from "../../../core/types.ts/usecase_types";
import UserModel from "../model/user_model";
import AuthRepo from "../repository/auth_repo";


export default class Login implements UsecaseAlias<LoginParam, UserModel>{
    authRepo: AuthRepo;
    constructor(authRepo: AuthRepo) {
        this.authRepo = authRepo;
    }

    async method(param: LoginParam): Promise<UserModel | null> {

        try {
            const results = await this.authRepo.login<LoginParam, UserModel>(param);
            return results;
        } catch (error) {
            //TODO: handle errors properly
            throw new Error(error as string);
        }
    }
}

