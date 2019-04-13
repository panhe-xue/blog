<template>
    <div class="header hei">
        <el-row class="hei">
            <el-col :span="20">
                <div class="menu" style="">
                    <el-menu
                    default-active="1"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    text-color="#fff"
                    active-text-color="#A020F0">
                        <el-menu-item class="el-menu-item" v-for="(item, index) in menu" :index="item.index" :key="index">
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
          note: '吃亏才是福',
          index: '1'
        },
        {
          text: 'ABOUT',
          backgroundColor: 'green',
          note: '学苟知本，六经皆我注脚',
          index: '2'
        },
        {
          text: 'ARCHIVE',
          backgroundColor: 'orange',
          note: '看到的，是我笨方法练习写作的所有文章',
          index: '3'
        },
        {
          text: 'TAGS',
          backgroundColor: 'red',
          note: '哈哈，你找到了我的文章基因库',
          index: '4'
        },
        {
          text: 'WORKS',
          backgroundColor: 'brown',
          note: '知之真切笃实处即是行，行之明觉精察处即是知',
          index: '5'
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
      this.$store.commit('header', this.menu[--key])
      this.setLogo()
    },
    setLogo () {
      console.log(this.header)
      this.backgroundColor = this.header.backgroundColor
      document.querySelector('.header').style.backgroundColor = `${this.header.backgroundColor}`
    }
  }
}
</script>
<style scoped>
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
