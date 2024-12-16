import axios from "axios";

const baseURL = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '' : process.env.VUE_APP_BASE_API,
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
});

export default baseURL;