import axios_api from "../axios/axios";

const getUsers = async() => {
    try{
        const response = await axios_api.get(`/`)
        return response
    }catch(error){
        return error
    }
}

const getUser = async(userId) =>{
    try {
        const response = await axios_api.get(`/${userId}`)
        return response
    } catch (error) {
        return error
    }
}

export {
    getUsers
}