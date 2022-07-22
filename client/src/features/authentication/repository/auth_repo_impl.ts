import { LoginParam, SignupParam } from "../../../core/types.ts/usecase_types";
import { AuthData } from "../data/auth_data";
import UserModel from "../model/user_model";
import AuthRepo from "./auth_repo";


export default class AuthRepoImpl implements AuthRepo {
    authData: AuthData;

    constructor(authData: AuthData) {
        this.authData = authData;
    }
    signup<T, K>(param: T): Promise<K | null> {
        throw new Error("Method not implemented.");
    }
    login<T, K>(param: T): Promise<K | null> {
        throw new Error("Method not implemented.");
    }

    // async signup<T, K>(param: T): Promise<K | null> {
    //     try {
    //         const res = await this.authData.signup(param as SignupParam);
    //         return (res as UserModel | undefined) as K | null;
    //     } catch (error) {
    //         throw new Error(error as string);
    //     }
    // }
    // async login<T, K>(param: T): Promise<K | null> {
    //     try {
    //         const res = await this.authData.login(param as LoginParam);
    //         return (res as UserModel | undefined) as K | null;
    //     } catch (error) {
    //         throw new Error(error as string);
    //     }
    // }

}