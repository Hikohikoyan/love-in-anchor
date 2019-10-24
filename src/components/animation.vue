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
import "@/assets/action.css";
import title from "../assets/title1.png";
import final from "../assets/title.png";
import right from "../assets/right.png";
import left from "../assets/left.png";
import js from '../assets/action.js'
export default {
  name: "anime",

  data() {
    return {
      title: title,
      right: right,
      left: left
    };
  },
};
</script>
<style>
</style>