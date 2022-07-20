/// a lean Http response intended to be used in the data layer

export default interface INetworkResponse {
    /// data returned from the external network call
    data?: any;

    /// any network response error
    error?: string;

    /// headers from response
    headers?: string;

    /// other useful data
    other?: any

}