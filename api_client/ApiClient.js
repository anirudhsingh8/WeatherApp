import axios from "axios";
import { BASEURL } from "../constants/constants";

const ApiClient =  axios.create({
    baseURL: BASEURL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    },
});

export default ApiClient;