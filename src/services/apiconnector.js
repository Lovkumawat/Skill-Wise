import axios from "axios"

// using create we make any type of request either post,get,put,delete,etc
export const axiosInstance = axios.create({});
// Axios is a popular JavaScript library used to make HTTP requests from your React application to external APIs or servers.
export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}