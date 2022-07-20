import axios, { AxiosResponse } from "axios";
import NetworkResponse from "./network_response";

import NetworkService from "./network_service";

export default class NetworkServiceImpl implements NetworkService {


    async getHttp(url: string, token?: string | undefined): Promise<NetworkResponse | undefined> {
        try {
            const res = await axios.get(url);
            return _handleResponse(res);
        } catch (error) {
            return _handleResponse();
        }
    }
    async postHttp(url: string, data: any): Promise<NetworkResponse | undefined> {
        try {
            const res = await axios.post(url, data);
            return _handleResponse(res);
        } catch (error) {
            return _handleResponse();
        }
    }
    update(url: string, data?: any): Promise<NetworkResponse | undefined> {
        throw new Error("Method not implemented.");
    }
}


function _handleResponse(response?: AxiosResponse): NetworkResponse {
    if (!response) return new NetworkResponse(404, {},);
    if (response.status.toString().startsWith("2")) return new NetworkResponse(response.status, response.data.data, response.headers);
    if (response.status.toString().startsWith("3")) return new NetworkResponse(response.status, response.data.data, response.headers, response.data.error);
    if (response.status.toString().startsWith("4")) return new NetworkResponse(response.status, response.data.data, response.headers, response.data.error);
    if (response.status.toString().startsWith("5")) return new NetworkResponse(response.status, response.data.data, response.headers, response.data.error);

    return new NetworkResponse(response.status, {}, response.headers, response.data.error);
}