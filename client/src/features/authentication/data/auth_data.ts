import NetworkService from "../../../core/network/network_service";
import { LoginParam, SignupParam } from "../../../core/types.ts/usecase_types";
import UserModel from "../model/user_model";

export abstract class AuthData {
    abstract login(param: LoginParam): Promise<UserModel | null | undefined>;
    abstract signup(param: SignupParam): Promise<UserModel | null | undefined>
}


export default class AuthDataImpl implements AuthData {
    networkService: NetworkService;

    constructor(networkService: NetworkService) {
        this.networkService = networkService;
    }
    async login(param: LoginParam): Promise<UserModel | null | undefined> {
        const { email, password, token } = param;
        const loginData = { "email": email, "password": password }
        try {
            const res = await this.networkService.postHttp("/login", loginData);
            if (!res && !res!.data) return null;
            const user = new UserModel(res!.data!.name, res!.data!.email, res!.data!.password,);
            return user;
        } catch (error) {
            throw new Error(error as string);
        }
    }
    async signup(param: SignupParam): Promise<UserModel | null | undefined> {
        const { email, password } = param;
        const signupData = { "email": email, "password": password }
        try {
            const res = await this.networkService.postHttp("/signup", signupData);
            if (!res && !res!.data) return null;
            const user = new UserModel(res!.data!.name, res!.data!.email, res!.data!.password,);
            return user;
        } catch (error) {
            throw new Error(error as string);
        }
    }

}