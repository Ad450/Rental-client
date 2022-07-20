import UsecaseAlias from "../../../core/interfaces/usecase";
import { SignupParam } from "../../../core/types.ts/usecase_types";
import UserModel from "../model/user_model";
import AuthRepo from "../repository/auth_repo";


export default class Signup implements UsecaseAlias<SignupParam, UserModel>{
    authRepo: AuthRepo;
    constructor(authRepo: AuthRepo) {
        this.authRepo = authRepo;
    }

    async method(param: SignupParam): Promise<UserModel | null> {

        try {
            const results = await this.authRepo.signup<SignupParam, UserModel>(param);
            return results;
        } catch (error) {
            //TODO: handle errors properly
            throw new Error(error as string);
        }
    }
}

