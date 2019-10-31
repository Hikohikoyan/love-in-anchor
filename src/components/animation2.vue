<template>
  <div
    id="anime"
    name="decrease"
    @transitionend="move()"
    :class="{ play: isPlaying }"
  >
    <div id="contain">
      <img alt="left" id="left" class="stick" :src="left" />

      <div :class="bg" id="bg"></div>
      <!-- <img class="bg" :src="title"/> -->
      <img alt="right" id="right" class="stick" :src="right" />
    </div>
    <div id="clouds">
      <img
        alt="title"
        :class="run"
        id="cloud_r"
        ref="rightcloud"
        :src="r_cloud"
      />
      <img
        alt="title"
        :class="run"
        id="cloud_l"
        ref="leftcloud"
        :src="l_cloud"
      />
    </div>
  </div>
</template>
<script>
import "@/assets/css/action3.css";
// import title from "../assets/title1.png";
import r_cloud from "../assets/img/cloudright.png";
import l_cloud from "../assets/img/cloudleft.png";

import title from "../assets/img/bg.png";
import right from "../assets/img/right.png";
import left from "../assets/img/left.png";
export default {
  name: "anime",
  data() {
    return {
      title: title,
      right: right,
      left: left,
      r_cloud: r_cloud,
      l_cloud: l_cloud,
      run: " ",
      isPlaying: false,
      bg: ""
    };
  },
  methods: {
    move() {
      this.run = "run";
    }
  },
  mounted() {
    // setTimeout(() => {/
    this.bg = "bg";
    // }, 200);
    setTimeout(() => {
      this.isPlaying = true;
    });
  }
};
</script>
<style>
#contain {
  display: flex;
  height: 100%;
  width: 100%;
}
.stick {
  width: 5%;
  height: 45%;
  margin-top: 5.6%;
  background-color: #eef5fb;
  /* background-color: white; */
  z-index: 30;
}
#left {
  /* margin-left: -5%; */
  position: relative;
  left: 50%;
  transform: translateX(-100%);
}

#left,
#right {
  transition: all 0.8s linear;
}
#right {
  /* margin-left: -5%; */
  position: relative;
  right: 50%;
  transform: translateX(100%);
}
#bg {
  width: 0%;
  /* margin-left: -5%; */
  height: 49%;
  margin-top: 5.4%;
}
#bg.bg {
  width: 100%;
  height: 49%;
  transition: clip-path 0.8s linear;
  clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
}
#anime.play .bg {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
#anime.play #left {
  left: 0;
  transform: translateX(0);
}
#anime.play #right {
  right: 0;
  transform: translateX(0);
}
#contain {
  justify-content: center;
  /* animation: move 2s linear forwards; */
}
@keyframes move {
  0% {
    transform: translateX(55%);
  }
  100% {
    transform: translateX(0%);
  }
}
#cloud_l,
#cloud_r {
  opacity: 0;
}
#cloud_l {
  position: absolute;
  width: 30%;
  position: absolute;
  top: 67vw;
  left: -100px;
}
#cloud_r {
  position: absolute;
  width: 25%;
  position: absolute;
  margin-top: -8vw;
  right: -100px;
}
#cloud_l.run {
  opacity: 1;
  position: absolute;
  width: 30%;
  top: 67vw;
  left: 0px;
  -webkit-transition: left 0.5s;
  transition: left 0.5s;
}
#cloud_r.run {
  opacity: 1;
  position: absolute;
  width: 25%;
  position: absolute;
  right: 0px;
  margin-top: -8vw;
  transition: right 0.5s;
}
</style>