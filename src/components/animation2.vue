<template>
  <div id="anime" name="decrease" >
      <div class="pic" id="l_stick">
        <!-- <img alt="title"  :src="left" /> -->
      </div>
      <div class="pic" id="r_stick">
        <!-- <img alt="title"  :src="right" /> -->
      </div>
      <div class="bg" id="l_bg">
        <!-- <img alt="title"  :src="title" />  左放右-->
      </div>
      <div class="bg" id="r_bg"></div>
      <!-- <img alt="title"  :src="title" /> -->

  </div>
</template>
<script>
import "@/assets/css/action2.css";
// import title from "../assets/title1.png";
import final from "../assets/img/title.png";
import right from "../assets/img/right.png";
import left from "../assets/img/left.png";
export default {
  name: "anime",
  data() {
    return {
    //   title: title,
      right: right,
      left: left
    };
  },
};
</script>
<style>
</style>