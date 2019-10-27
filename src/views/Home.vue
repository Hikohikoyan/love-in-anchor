<template>
  <div id="home">
    <!-- <img alt="title" id="title" :src="title" /> -->
    <anime id="anime"></anime>
    <MyButton button_name="introbtn" pagename="/intro" isAbled="0"></MyButton>
    <MyButton button_name="registerbtn" pagename="/resgister" isAbled="0"></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from "../components/MyButton.vue";
// import title from '../assets/title1.png'
import anime from "../components/animation.vue";
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
    };
  },
  mounted() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementById("app").style.overflowY = "hidden";
    const options = {
      method: "GET",
      headers: {
        // 'content-type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST,GET",
        "Content-Type": "application/json"
      },
      transformRequest: [
        function(data) {
          console.log(data);
          data = JSON.stringify(data);
          return data;
        }
      ],
      url: "http://182.254.161.213/love-in-anchor/checkLogin"
    };
    this.axios(options)
    .then(res => {
      if(res.data.errcode!=0){
        this.$alert('感谢关注','BBT',{
          confirmButtonText:'OK'
        }).catch(() => {
                });
      }else{
        this.$alert('你还没有关注','BBT',{
          confirmButtonText:'OK'
        }).catch(() => {
                });
      }
    });
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
