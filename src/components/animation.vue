<template>
  <div id="anime" name="decrease" @transitionend="move()">
          <div class="pic" id="l_stick"></div>

    <!-- <div id="contain"> -->
      <div id="clouds">
        <img alt="title" :class="run" id="cloud_r" ref="rightcloud" :src="right" />
            <img alt="title" :class="run" id="cloud_l" ref="leftcloud" :src="left" />

      </div> 
      <!-- <div id="tao"> -->
      <div class="left">
        <div :class="bg" id="l_bg" ref="leftbg">
          <!-- <img alt="title" :class="bg" id="l_bg" ref="leftbg" :src="l_bg" /> -->
        </div>
      </div>
      <div class="right">
        <div :class="bg" id="r_bg" ref="rightbg"></div>
        <!-- <img alt="title" :class="bg" id="r_bg" ref="rightbg"  :src="r_bg" /> -->
        <!-- </div> -->
      </div>
    <!-- </div> -->
                  <div class="pic" id="r_stick"></div>

  </div>
</template>
<script>
import "@/assets/css/action.css";
// import "@/assets/css/melaji.css";
// import title from "../assets/title.png";
import final from "../assets/img/title.png";
import right from "../assets/img/cloudright.png";
import left from "../assets/img/cloudleft.png";
import l_bg from "../assets/img/leftbg.png";
import r_bg from "../assets/img/rightbg.png";
import bg1 from "../assets/img/bg.png";

// import js from '../assets/action.js'
export default {
  name: "anime",

  data() {
    return {
      // title: title,
      // demobg:" ",
      // bg1:bg1,
      r_bg: r_bg,
      l_bg: l_bg,
      right: right,
      left: left,
      bg: " ",
      run: " "
    };
  },
  methods: {
    move() {
      this.run = "run";
    }
  },
  mounted() {
    // this.$refs['input'].focus();
    setTimeout(() => {
      this.bg = "bg";
      this.demobg = "demotry";
    }, 200);
  }
};
</script>
<style>
#anime {
  /* display: none; */
}
#r_bg {
  opacity: 0;
  width: 40vw;
  margin-left: 0%;
  height: 16vw;
}
#l_bg {
  opacity: 0;
  margin-left: 0%;
  width: 40vw;
  height: 50%;
}
#cloud_l,
#cloud_r {
  opacity: 0;
}
#cloud_l {
  position: absolute;
  top: 15vw;
  left: -30vw;
  width: 25vw;
}
#cloud_r {
  position: absolute;
  top: -9vw;
  right: -30vw;
  width: 25vw;
}
#cloud_l.run {
  opacity: 1;
  position: absolute;
  top: 15vw;
  left: -5vw;
  width: 25vw;
  transition: left 0.5s;
}
#cloud_r.run {
  opacity: 1;
  position: absolute;
  top: -9vw;
  right: -5vw;
  width: 20vw;
  transition: right 0.5s;
}
</style>