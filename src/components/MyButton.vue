<template>
<div class="button" :id="button_name" :isAbled= 0 @click="showpages"> 
    <router-link :to="pagename" :class="button_name" ></router-link>
    <div id="btnpic" :class= button_name ></div>
</div>
</template>
<script>
  // var src='@/assets/'+ button_name +'.png';
import '@/assets/css/button.css'
export default {
  name: "MyButton",
  props: {
    button_name:{
      type: String,
      default: "button"
    },
    isAbled:{
      type: Number,
      default: 0
    },
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
      showpages: function () {
        console.log(this.pagename);
          button_name=this.button_name;
          if( this.isAbled==1 ){
              setTimeout(() => {
                  isAbled = 0;
              }, 5000);
              return;
          }
          console.log(button_name);
              if (button_name == "introbtn") {
              // console.log(this.$router.push('/intro'));
              this.$router.push('/intro')
              return;
          }
          if (button_name == "registerbtn") {
              this.$router.push('/register')
              return;
          }
      },
  },

}
</script>
<style scoped>
</style>