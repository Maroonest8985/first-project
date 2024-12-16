import axios from "axios";

const baseURL = axios.create({
    baseURL: 'http://138.2.62.193:9091'
});

export default baseURL;