<template>
  <div class="Hello">
    <h1>爱上N主播</h1>
    <MyButton button_name="大赛介绍" isAbled=0 MyButtonled=0 ></MyButton>
    <MyButton button_name="马上报名" isAbled=0 buttonled=0 ></MyButton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import MyButton from '@/components/MyButton.vue'

export default {
  name: 'home',
  components: {
    // intro,
    MyButton
  },

}
</script>
