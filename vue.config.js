module.exports={
  lintOnSave:false,//关闭检查
  //lintOnSave:'warning'
  devServer:{
    proxy:{
      '/api':{
        target:'http://182.92.128.115',//转发目标地址
        changeOrigin:true,//支持跨域
        // pathRewrite:{
        //   '/api':'',
        //}
      }
    }
  },
  
}