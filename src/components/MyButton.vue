<template>
<div class="button" :id="button_name" :isAbled= 0 @click="showpages" >
    <router-link :to="pagename" class="btnname" ></router-link>
    <div id="btnpic" :class= button_name ></div>
</div>
</template>
<script>
  // var src='@/assets/'+ button_name +'.png';
  // import btnsrc from src
import '@/assets/button.css'
export default {
  name: "MyButton",
  props: {
    button_name:{
      type: String,
      default: "button"
    },
    isAbled:0,
    msg:{
      type: String,
      default: "a"
    },
    pagename:{
      type: String,
      default: "/"
    },
  },
  methods: {
      showpages: function (isAbled,button_name) {
          isAbled=this.isAbled;
          button_name=this.button_name;
          if( isAbled==1 ){
              setTimeout(() => {
                  isAbled = 0;
              }, 5000);
              return;
          }
          isAbled=1;
              if (button_name == "introbtn") {
              console.log(this.$route);
              return;
          }
          if (button_name == "registerbtn") {
              console.log(this.$route);
              return;
          }
      },
  },

}
</script>
<style scoped>
</style>