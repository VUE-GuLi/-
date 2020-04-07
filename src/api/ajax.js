import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//NProgress.configure({showSpinner:false})
const ajax=axios.create({
  baseURL:'/api',//前缀路径
  timeout:20000,//请求超时时间
})
//添加请求拦截器
ajax.interceptors.request.use((config)=>{
  //显示进度条
  NProgress.start()
  
  
  return config
})

//添加相应拦截器
ajax.interceptors.response.use(
  response=>{
    Nprogress.done()
    return response.data
  },
  error=>{
    Nprogress.done()
    alert('请求出错',+error.message || '未知错误') 
    //return new Promise(()=>{})
    return Promise.reject(error)
  }
)
export default ajax