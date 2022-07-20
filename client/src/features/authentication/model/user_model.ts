export default class UserModel {
    token?: string;
    name: string;
    password: string;
    email: string;

    constructor(name: string, email: string, password: string, token?: string) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.token = token;
    }
}