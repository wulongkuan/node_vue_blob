
import axios from './axios'
import Qs from 'qs';
const requests = {
    getUser(data = {}) {
        // user 请求接口
        return axios('user', {
            // 请求方法
            method: 'get',
            // 请求体
            data: data
        })
    },
    login(data={}){
        // console.log("data1===",data);
        // data = Qs.stringify(data);
        // console.log("data2===",data);
        return axios('/api/v1/user/login', {
            // 请求方法
            method: 'post',
            // 请求体
            data: data,
            // params: data,
        })
    },
    regist(data={}){
        //  data = Qs.stringify(data);
        return axios('/api/v1/user/register', {
            // 请求方法
            method: 'post',
            // 请求体
            data: data,
            // params: data,
        })
    },
    updateUser(data={}){
        //data = Qs.stringify(data);
       return axios('/api/v1/user/update', {
           // 请求方法
           method: 'post',
           // 请求体
           data: data,
           // params: data,
       })
   },
}
// 导出对象，然后在全局注册或在单个vue文件下调用
export default requests