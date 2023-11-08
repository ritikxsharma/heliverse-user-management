import axios from "axios";

const axios_api = axios.create({
    baseURL: `http://localhost:5000/api/users`,
    timeout: 5000
})

export default axios_api
