import ajax from './ajax'

// 1. 基础路径
const BASE_URL = 'https://server.aivocado.online';

//2.请求方法


//2.1登录
export const login = (token) => ajax(BASE_URL + "/fitness_pilot/login", {"token": token}, 'POST')
//2.2发送邮件
export const submitUserEmail = (val) => ajax(BASE_URL + "/fitness_pilot/record_promotion_email", {"email": val}, "POST")