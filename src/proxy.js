import axios from 'axios'
// 记得uploadLoader_local也要改
const v6Url = "https://6.pan.xunuo.live:2053"

const cdn = "https://cdn.pan.xunuo.live:2053"

const ali = "https://pro.pan.xunuo.live:2053"  //阿里云

const try6 = (defaultUrl) => {
    if (window.canUseIpv6) {
        return v6Url
    } else {
        return defaultUrl
    }
}

const set6 = () => {
    window.canUseIpv6 = true
}

const axiosInstance = axios.create({
    baseURL: try6(ali),
    withCredentials: true,
    crossDomain: true
})

export { v6Url, cdn, ali, try6, set6, axiosInstance as axios }
