<template>
  <div id="success">
    <!-- <img alt="title" id="title" :src="title" /> -->
    <div>
      <h1 class="finaltext">提交成功</h1>
      <h2 class="finaltext">
        海选信息将以短信的形式通知
        <br />请确保手机号填写正确
      </h2>
      <h3 class="finaltext">请注意查收</h3>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
// import title from '@/assets/title.png'

export default {
  name: "Final",
  components: {
    // intro,
  },
  methods: {
    goBack(){
    this.$router.replace({path: '/'});
    }
  },
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.goBack, false);
    }
  },

  destroyed() {
    window.removeEventListener("popstate", this.goBack, false);
  }
  // data() {
  //   return {
  //     title : title
  //   }
  // },
};
</script>
<style>
#success {
  margin-top: 260px;
  height: -webkit-fill-available;
  /* display: flex; */
  /* text-align: center; */
      overflow:hidden;
  width: 100%;
}
/* #title{
    width: 100%;
} */
h1 {
  font-size: 25px;
  font-weight: 400;
}
.finaltext {
  font-family: "Adobe Heiti Std";
  color: rgb(78, 77, 77);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
}
h2,
h3 {
  font-weight: 300;
  font-size: 17.6px;
}
</style>
