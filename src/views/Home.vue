<template>
  <div class="Hello">
    <h1>爱上N主播</h1>
    <B button_name="大赛介绍" isAbled=0 ></B>
    <B button_name="马上报名" isAbled=0 ></B>
  </div>
</template>

<script>
// @ is an alias to /src
import intro from '@/components/intro.vue'
import B from '@/components/B.vue'

export default {
  name: 'home',
  components: {
    intro,
    B
  },
  props: {
      pageindex:0
  }
}
</script>
