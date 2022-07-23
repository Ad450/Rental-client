export default class AppStrings {
    static _apiUnauthenticated: string = "You need authentication to perform this action";
    static _databaseException: string = "Database Access Failure";
    static _apiNoResponse: string = "No response from the server. Please check internet connection";
    static _apiBadRequest: string = "There was a problem making the request to the server";
    static _apiConnectionTimeout: string = "Connection time out";
    static _apiUknown: string = "Something went wrong";
    static _apiServerError: string = "something went wrong";
    static _apiGenericMessage: string = "something went wrong";

    appResponses: ApiResType = {
        apiUnauthenticated: AppStrings._apiUnauthenticated,
        apiNoResponse: AppStrings._apiNoResponse,
        apiBadRequest: AppStrings._apiBadRequest,
        apiConnectionTimeout: AppStrings._apiConnectionTimeout,
        apiUnknown: AppStrings._apiUknown,
        apiServerError: AppStrings._apiServerError,
        apiGenericMessage: AppStrings._apiGenericMessage,
        databaseException: AppStrings._databaseException
    }


}



// enum NetworkResult {
//     SUCCESS,
//     FAILURE,
//     NO_INTERNET_CONNECTION,
//     SERVER_ERROR,
//     BAD_REQUEST,
//     UNAUTHORISED,
//     FORBIDDEN,
//     NO_SUCH_ENDPOINT,
//     METHOD_DISALLOWED,
//     SERVER_TIMEOUT,
//     TOO_MANY_REQUESTS,
//     NOT_IMPLEMENTED,
//     NOT_FOUND
//   }



type ApiResType = {
    apiUnauthenticated: string;
    apiNoResponse: string;
    apiBadRequest: string;
    apiConnectionTimeout: string;
    apiUnknown: string;
    apiServerError: string;
    apiGenericMessage: string;
    databaseException: string;
}