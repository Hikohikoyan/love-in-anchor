<template>
  <div class="Hello">
    <h1>爱上N主播</h1>
    <Mybutton button_name="大赛介绍" isAMybuttonled=0 ></Mybutton>
    <Mybutton button_name="马上报名" isAMybuttonled=0 ></Mybutton>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '@/components/intro.vue'
import Mybutton from '@/components/Mybutton.vue'

export default {
  name: 'home',
  components: {
    // intro,
    Mybutton
  },
  props: {
      pageindex: 
  }
}
</script>
