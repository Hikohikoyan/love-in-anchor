<template>
  <div id="home">
        <img alt="title" id="title" :src="title" />
    <MyButton button_name="introbtn" pagename="/intro" isAbled= '0'  ></MyButton>
    <MyButton button_name="registerbtn" pagename="/resgister" isAbled= '0'></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from '../components/MyButton.vue'
import title from '../assets/title.png'

export default {
  name: 'home',
  components: {
    // intro,
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
    /* display: flex; */
    /* text-align: center; */
    }
#title{
    width: 100%;
}
.button{
  margin-top: 100px;
}
</style>
