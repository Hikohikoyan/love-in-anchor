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
body,html,#app{
  margin: 0;
  height: 100%;
  width: 100%;
  position:absolute;
  z-index: -4;
}
#app{
  z-index: -1;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 100%;
    height: -webkit-fill-available;
    background-size: cover;
        overflow-y: scroll;
}
::-webkit-scrollbar {
    display: none
}

</style>
