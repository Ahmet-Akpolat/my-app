import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "https://dummyjson.com/"
});

axiosInstance.interceptors.request.use((config) => {
    console.log("istek Atılıyor!")
    config.headers.Authorization = JSON.stringify(localStorage.getItem("token"));
    config.headers["Accept-Language"] = "tr"
    return config;
});
axiosInstance.interceptors.response.use(
    response => {
        console.log(response.data)
        return response;
    },
    error => {
        console.log(error);
    }
);

export default axiosInstance;