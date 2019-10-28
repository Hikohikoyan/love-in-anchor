<template>
  <div id="app" :style="{}">
<router-view></router-view>
  </div>
</template>

<script>
import api, { isWeiXin } from './api'
export default {//backgroundImage: 'url(' + title + ')'
  data () {
    return {
        title: require('@/assets/img/background.png')
    }
    },
mounted(){
 if(! isWeiXin()){
   this.$alert('请使用微信浏览器访问！','提示').catch(()=>{});
 }
}
}
</script>

<style >
body,html,#app{
  margin: 0;
  height: 100%;
  width: 100%;
  position:absolute;
  z-index: -4;
}
#app{
  z-index: -1;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height:100%;
    background-size: cover;
  background-color: #eef5fb;
}
::-webkit-scrollbar {
    display: none
}
.el-message-box{
  width: 80% !important;
  }
</style>
