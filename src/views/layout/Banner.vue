<template>
    <div class="banner">
        <div class="ban-container">
            <h1>{{text}}</h1>
            <div class="hr"></div>
            <p>{{note}}</p>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'banner',
  watch: {
    header (nval) {
      document.querySelector('.banner').style.backgroundColor = nval.backgroundColor
    }
  },
  computed: {
    ...mapGetters([
      'header'
    ]),
    text () {
      return this.header.text.substring(0, 1).toUpperCase() + this.header.text.substring(1).toLowerCase()
    },
    note () {
      return this.header.note
    }
  }
}
</script>

<style scoped>
.banner{
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: #fff;
    background-color: green;
    padding: 150px 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
.banner h1{
    font-size: 65px;
}
.hr{
    border-bottom: 4px solid #fff;
    max-width:100px;
    margin: 15px auto;
}
</style>
