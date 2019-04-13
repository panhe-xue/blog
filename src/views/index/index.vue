<template>
  <div id="index">
      <Banner></Banner>
  </div>
</template>

<script>
import Banner from './banner'
export default {
  name: 'app',
  components: {
    Banner
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #1fda7c;
}
</style>
