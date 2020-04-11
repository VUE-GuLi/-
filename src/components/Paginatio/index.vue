<template>
  <!--分页组件-->
  <div class="pagination" v-if="pageConfig.total>0">
    <!--上一页-->
    <button :disabled="currentPage===1" @click="changeCurrentPage(currentPage-1)">上一页</button>
    <!-- 第1页 -->
    <button v-if="startEnd.start>1" @click="changeCurrentPage(1)">1</button>
    <!-- 省略号 -->
    <button disabled v-if="startEnd.start>2">···</button>
    <!-- 连续页码 -->
    <!-- 注意v-if的优先级低于v-for: 遍历每个元素时解析v-if -->
    <button 
      v-for="item in startEnd.end" 
      :key="item" 
      v-if="item>=startEnd.start"   
      :class="{active: item===currentPage}"
      @click="changeCurrentPage(item)">{{item}}</button>
    <!-- 省略号 -->
    <button disabled v-if="startEnd.end<totalPages-1">···</button>
    <!-- 最后一页 -->
    <button v-if="startEnd.end<totalPages" @click="changeCurrentPage(totalPages)">{{totalPages}}</button>
    <!--下一页-->
    <button :disabled="currentPage===totalPages" @click="changeCurrentPage(currentPage+1)">下一页</button>
    <!-- 总记录数 -->
    <button disabled style="margin-left: 30px">共 {{pageConfig.total}} 条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props:{
      pageConfig:{
        type:Object,
        default:{
          total: 0, // 总记录数量
          showPageNo: 5, // 连续显示的页码数
           pageNo: 1, // 当前在第几页
          pageSize: 10, // 一页最多显示多条记录         
        }
      }
    },
    data(){
      //可以读取props原型对象上的属性
      console.log('---',this.pageConfig.this.$bus)
      //data()不能直接读取data中的数据
      console.log('++++', this.currentPage)
      return{
        currentPage:this.pageConfig.pageNo
      }
    },
    computed: {
      //页码总数
      totalPages(){
        const {total,pageSize}=this.pageConfig
        if(!total<=0 || pageSize<=0) return 0
        return Math.ceil (total/pageSize)//向上取整
      },
      startEnd(){
        //得到已有依赖数据，
          //当前页码
          const currentPage=this.currentPage
          //连续页码数
          const showPageNo=this.pageConfig.showPageNo
          const totalPages=this.totalPages
        //计算产生需要的数据
          let start=0
          let end=0

          start=currentPage-Math.floor(showPageNo/2)  
          if(start<1){
            start=1
          }

          end=start+showPageNo-1

          if(end>totalPages){
            end=totalPages
            start=end-showPageNo+1
          }
        //返回数据
        return {start,end}
      }
    },
    methods: {
      changeCurrentPage(page){
        this.currentPage=page
      }
    },

    beforeCreate() {
      console.log('beforeCreate()',this.currentPage)//undefined
    },
    created() {
      console.log('created()',this.currentPage)//能读到
    },

   
  }
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline:none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>