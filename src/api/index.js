import axios from "../utils/request"
import base from "./base"
const api={
    register(params){
        return axios.post(base.baseUrl+base.register,params)
    },
    login(params){
        return axios.post(base.baseUrl+base.login,params)
    },
    products(params){
        return axios.post(base.baseUrl+base.products,params)
    }
}
export default api;