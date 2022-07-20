import network_response from "./network_response";
import NetworkService from "./network_service";

export default class NetworkServiceImpl implements NetworkService {
    getHttp(url: string, token?: string | undefined): Promise<network_response> | undefined {
        throw new Error("Method not implemented.");
    }
    postHttp(url: string, data: any): Promise<network_response | undefined> {
        throw new Error("Method not implemented.");
    }
    update(url: string, data?: any): Promise<network_response> | undefined {
        throw new Error("Method not implemented.");
    }
}