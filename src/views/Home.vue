<template>
  <div id="home">
        <!-- <img alt="title" id="title" :src="title" /> -->
    <anime></anime>
    <MyButton button_name="introbtn" pagename="/intro" isAbled= '0'  ></MyButton>
    <MyButton button_name="registerbtn" pagename="/resgister" isAbled= '0'></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from '../components/MyButton.vue'
import title from '../assets/title1.png'
import anime from '../components/animation.vue'
export default {
  name: 'home',
  components: {
    // intro,
    anime,
    MyButton
  },
  data() {
    return {
      title : title
    }
  },
}

</script>
<style scoped>
#home{
margin-top: 80px;
    height: -webkit-fill-available;
display: grid;
    /* text-align: center; */
    /* align-items: center; */
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    }
#title{
    width: 100%;
}
.button{
  margin-top: 100px;
}
</style>
