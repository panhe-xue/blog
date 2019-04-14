<template>
    <div class="header hei">
        <el-row class="hei">
            <el-col :span="20">
                <div class="menu" style="">
                    <el-menu
                    :default-active="$route.path"
                    class="el-menu-demo"
                    mode="horizontal"
                    :router="true"
                    @select="handleSelect"
                    text-color="#fff"
                    active-text-color="#A020F0">
                        <el-menu-item class="el-menu-item" v-for="(item, index) in menu" :index="item.route" :key="index">
                          {{item.text}}
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="4" class="logo hei">
                <div>{{title}}</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'headers',
  data () {
    return {
      title: '吃亏才是福',
      backgroundColor: 'blue',
      menu: [
        {
          text: 'HOME',
          backgroundColor: 'blue',
          route: '/home',
          note: '吃亏才是福'
        },
        {
          text: 'ABOUT',
          backgroundColor: 'green',
          route: '/about',
          note: '学苟知本，六经皆我注脚'
        },
        {
          text: 'ARCHIVE',
          backgroundColor: 'orange',
          route: '/archive',
          note: '看到的，是我笨方法练习写作的所有文章'
        },
        {
          text: 'TAGS',
          backgroundColor: 'red',
          route: '/tags',
          note: '哈哈，你找到了我的文章基因库'
        },
        {
          text: 'WORKS',
          backgroundColor: 'brown',
          route: '/works',
          note: '知之真切笃实处即是行，行之明觉精察处即是知'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('header', this.menu[0])
    this.setLogo()
  },
  computed: {
    ...mapGetters([
      'header'
    ])
  },
  methods: {
    handleSelect (key, keyPath) {
      const self = this
      const obj = self.menu.filter((item) => {
        return item.route === key
      })
      self.$store.commit('header', obj[0])
      self.setLogo()
    },
    setLogo () {
      this.backgroundColor = this.header.backgroundColor
      document.querySelector('.header').style.backgroundColor = `${this.header.backgroundColor}`
    }
  }
}
</script>
<style scoped>
.header{
  font-weight: 800;
}
.el-menu{
  border-bottom: 1px solid transparent!important;
}
.hei{
  height: 100%;
}
.logo{
  font-size: 16px;
  color: #fff;
  display: flex;
}
.logo div{
  align-items: center;
  justify-content: center;
  width: 100%;
  line-height: 60px;
}
.el-menu-demo{
  background-color: transparent;
}
.menu .el-menu-item:hover{
  background-color: #fff;
  color: #A020F0!important;
}
</style>
