<template>
    <div class="header">
        <el-row>
            <el-col :span="4">
                <div>{{title}}</div>
            </el-col>
            <el-col :span="20">
                <div class="menu" style="justify-content:flex-end;">
                    <el-menu
                    default-active="1"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    :background-color="backgroundColor"
                    text-color="#fff"
                    active-text-color="">
                        <el-menu-item v-for="(item, index) in menu" :index="index+1" :key="index" :data-color="item.backgroundColor">
                            {{item.text}}
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'headers',
    data() {
        return {
            title: '吃亏才是福',
            backgroundColor: 'blue',
            menu: [
                {
                    text: ' HOME',
                    backgroundColor: 'blue',
                    note: '吃亏才是福'
                },
                {
                    text: ' ABOUT',
                    backgroundColor: 'green',
                    note: '学苟知本，六经皆我注脚'
                },
                {
                    text: ' ARCHIVE',
                    backgroundColor: 'orange',
                    note: '看到的，是我笨方法练习写作的所有文章'
                },
                {
                    text: ' TAGS',
                    backgroundColor: 'red',
                    note: '哈哈，你找到了我的文章基因库'
                },
                {
                    text: ' WORKS',
                    backgroundColor: 'semantic',
                    note: '知之真切笃实处即是行，行之明觉精察处即是知'
                }
            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>
<style scoped>
    
</style>