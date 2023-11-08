import axios from "axios";

const axios_api = axios.create({
    baseURL: `https://heliverse-user-management-server.onrender.com`,
    timeout: 5000
})

export default axios_api
