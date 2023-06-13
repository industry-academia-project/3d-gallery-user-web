import axios from "axios"

const customAxios = axios.create({
    baseURL: "http://10.80.163.228:8080"
})

export default customAxios