import UsecaseAlias from "../../../core/interfaces/usecase";
import { SignupParam } from "../../../core/types.ts/usecase_types";
import IUserModel from "../data/model/user_model";
import AuthRepo from "../repository/auth_repo";


export default class Signup implements UsecaseAlias<SignupParam, IUserModel>{
    authRepo: AuthRepo;
    constructor(authRepo: AuthRepo) {
        this.authRepo = authRepo;
    }

    async method(param: SignupParam): Promise<IUserModel | null> {

        try {
            const results = await this.authRepo.signup<SignupParam, IUserModel>(param);
            return results;
        } catch (error) {
            //TODO: handle errors properly
            throw new Error(error as string);
        }
    }
}

