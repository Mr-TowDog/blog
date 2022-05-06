import axios from 'axios'
export function ajax(config) {
    const xml = axios.create({
            baseURL: "http://42.193.255.35",
            method: "get",
        })
        //请求拦截器
    xml.interceptors.request.use(config => {
        return config
    }, err => {

    });
    //响应拦截器
    xml.interceptors.response.use(res => {
        return res;
    }, err => {

    })

    return xml(config)

}