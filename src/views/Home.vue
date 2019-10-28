<template>
  <div id="home">
    <!-- <img alt="title" id="title" :src="title" /> -->
    <anime id="anime"></anime>
    <MyButton button_name="introbtn" pagename="/intro" :isAbled=0></MyButton>
    <MyButton button_name="registerbtn" pagename="/resgister" :isAbled=0></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from "../components/MyButton.vue";
// import title from '../assets/title1.png'
import anime from "../components/animation2.vue";
import api, { checkTime, checkLogin, checkSubscribe, isWeiXin } from '../api'

export default {
  name: "home",
  components: {
    // intro,

    anime,
    MyButton
  },
  data() {
    return {
      // title : title
          isAbled:0,
    };
  },
  mounted() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementById("app").style.overflowY = "hidden";
    if(!isWeiXin()){
      this.isAbled=1;
      return;
    }else{
      this.isAbled=0;
    }
    checkTime();
    checkLogin();
    checkSubscribe();
    }
};
</script>
<style scoped>
#home {
  margin-top: 80px;
  height: -webkit-fill-available;
  display: grid;
  /* text-align: center; */
  /* align-items: center; */
  grid-template-columns: 100%;
  grid-template-rows: 250px 10px 180px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 80%;
  margin-left: 10%;
  /* overflow:hidden; */
}
#title {
  width: 100%;
}
#anime {
  display: flex;
  height: 50%;
  width: 100%;
}
.button {
  margin-top: 100px;
}
</style>
