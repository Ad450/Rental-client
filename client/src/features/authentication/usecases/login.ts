import UsecaseAlias from "../../../core/interfaces/usecase";
import { LoginParam } from "../../../core/types.ts/usecase_types";
import IUserModel from "../data/model/user_model";
import AuthRepo from "../repository/auth_repo";


export default class Login implements UsecaseAlias<LoginParam, IUserModel>{
    authRepo: AuthRepo;
    constructor(authRepo: AuthRepo) {
        this.authRepo = authRepo;
    }

    async method(param: LoginParam): Promise<IUserModel | null> {

        try {
            const results = await this.authRepo.login<LoginParam, IUserModel>(param);
            return results;
        } catch (error) {
            //TODO: handle errors properly
            throw new Error(error as string);
        }
    }
}

