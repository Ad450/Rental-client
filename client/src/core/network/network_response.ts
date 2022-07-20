/// a lean Http response schema intended to be used in the data layer

import { AxiosResponseHeaders } from "axios";

export default class NetworkResponse {
    /// data returned from the external network call
    data?: any;

    /// any network response error
    error?: string;

    /// headers from response
    headers?: AxiosResponseHeaders;

    /// other useful data
    other?: any

    /// response status 
    status: number;

    constructor(status: number, data?: any, headers?: AxiosResponseHeaders, error?: string, other?: any) {
        this.status = status;
        this.data = data;
        this.error = error;
        this.headers = headers;
    }

}