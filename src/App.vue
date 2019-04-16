<template>
  <div id="app">
    <el-container>
      <el-header style="padding: 0!important;">
        <Header></Header>
      </el-header>
      <el-main style="margin: 0;padding: 0;">
        <Banner></Banner>
        <router-view/>
      </el-main>
      <el-footer style="border-top: 1px solid #ccc;height: auto;">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/views/layout/Header'
import Footer from '@/views/layout/Footer'
import Banner from '@/views/layout/Banner'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Banner
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  line-height: 1.7;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a.router-link-exact-active {
  color: #1fda7c;
}
.router-link{
  text-decoration: none;
}
</style>
