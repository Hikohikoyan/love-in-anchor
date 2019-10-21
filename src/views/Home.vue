<template>
  <div id="home">
        <img alt="title" id="title" :src="title" />
    <MyButton button_name="大赛介绍" pagename="intro" isAbled= 0 MyButtonled= 0 ></MyButton>
    <MyButton button_name="马上报名" pagename="resgister" isAbled= 0 buttonled= 0 ></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from '@/components/MyButton.vue'
import title from '@/assets/title.png'

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
<style>
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
