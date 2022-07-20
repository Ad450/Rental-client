import NetworkResponse from "./network_response";

export default interface NetworkService {
    getHttp(url: string, token?: string): Promise<NetworkResponse | undefined>;
    postHttp(url: string, data: any): Promise<NetworkResponse | undefined>;
    update(url: string, data?: any): Promise<NetworkResponse | undefined>;
}