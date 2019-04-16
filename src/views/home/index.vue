<template>
  <div class="home">
    <div class="homeContainer">
      <div class="row" v-for="(item, index) in test" :key="index" >
        <router-link class="router-link" to="/article/1">
          <h2 class="h2">标题</h2>
          <span class="text">下载地址：https://github.com/cnfeat/GoodThingList/blob/master/Book_LearnWritingTheHardWay.pdf 百度云下载地址：链接: https://pan.baidu.com/s/12buyBW9P2B...</span>
          <p class="date">Posted on 2019-12-31</p>
        </router-link>
      </div>
      <el-pagination
      style="margin: 30px auto;"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    </div>
  </div>
</template>

<style>
.home{
  width: 100%;
  height: auto;
  box-sizing: border-box;
  margin: 30px 0;
}
.homeContainer{
  width: 1170px;
  margin: 0 auto;
}
.row{
  box-sizing: border-box;
  padding: 30px 15px;
  text-align: left;
  width: 75%;
  margin: 0 auto;
  border-bottom: 1px solid #ccc;
  margin: 20px auto;
}
.router-link {
  text-decoration: none;
  color: #a3a3a3;
  font-size: 14px;
}
.h2{
  font-size: 25px;
  font-weight: 800;
  line-height: 2.5;
  color: #000;
}
.text{
  overflow: hidden;
  text-overflow: ellipsis;
}
.h2:hover,.text:hover,.date:hover{
  color: #404040;
}
.date{
  font-family: 'Lora', 'Times New Roman', serif;
  color: #808080;
  font-size: 12px;
  font-style: italic;
}
</style>
<script>
export default {
  name: 'home',
  data () {
    return {
      test: [1, 2, 3, 4, 5]
    }
  },
  components: {
  }
}
</script>
