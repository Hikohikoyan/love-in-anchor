<template>
  <div id="app" :style="{backgroundImage: 'url(' + title + ')'}">
<router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title: require('@/assets/background.png')
    }
}
}
</script>
<style >
body{
  margin: 0;
}
#app{
      overflow: hidden;
  z-index: -1;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
        height: -webkit-fill-available;
    background-size: cover;
    /* text-align: center; */
    display: flex;
    align-items: center;
    justify-items: center;
    /* overflow-y:scroll; */
}
::-webkit-scrollbar {
    display: none
}

</style>
