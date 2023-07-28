import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'http://47.88.63.16:8081';

//2.请求方法


//2.1登录
export const login = (token) => ajax(BASE_URL + "/fitness_pilot/login", {"token": token}, 'POST')