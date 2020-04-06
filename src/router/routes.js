//配置路由中的所有数组模块
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default[
  {
    path:'/',
    component:Home,
  },
  {
    name:'search',//是params参数需要指定此名称
    path:'/search/:keyword?',//通过params参数携带数据 ？ 代表params参数可不传
    component:Search,
    //将query和params参数映射成props传递给路由组件
    props:(route)=>({keyword1:route.params.keyword,keyword2:route.query.keyword})
  },
  {
    path:'/register',
    component:Register,
    meat:{
      isHideFooter:true,//标识在次组件中footer是否隐藏
    }
  },
  {
    path:'/Login',
    component:Login,
    meta:{
      isHideFooter:true,//标识在次组件中footer是否隐藏
    }
  },
]