<template>
  <div id="intro">
    <img id="title" :src="title" style="opacity: 0;" />

    <div id="textbox">
      <p class="intro_text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“爱上女主播”播音主持大赛是华工最为专业、影响力最大的播音主持类比赛，从创办之初至今已延续了十一年，为华工选拔和培育出了一大批优秀的主持人才，也为无数心怀主持梦想的同学开启了全新世界的大门。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今年，“爱上”也为男生提供一个展示的舞台，男生女生皆可报名，故更名为“爱上你主播”。第十二届“爱上你主播”将以“十二时辰”为主题开启新的旅程。在华园，爱上你的十二时辰。
        <br />
        <br />报名方式： <br />一、二饭百步梯摊位线下报名 <br />11月4日至11月6日
        <br />百步梯微信公众号线上报名 <br />11月1日20:00至11月7日24:00
      </p>
    </div>
    <MyButton
      button_name="registerbtn"
      pagename="register"
      isAbled="0"
    ></MyButton>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import title from "@/assets/img/title.png";

export default {
  name: "intro",
  components: {
    MyButton
  },
  data() {
    return {
      title: title
    };
  },
  mounted() {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    document.getElementById("app").style.overflowY = "hidden";
    let title = document.getElementById("title");
    title.offsetHeight;
    document.getElementById("title").style.opacity = 1;
  }
};
</script>

<style>
#intro {
  margin-top: 20vw;
  height: -webkit-fill-available;
  /* display: flex; */
  /* text-align: center; */
}
#title {
  width: 100%;
  height: 24.7vw;
  transition: opacity 0.5s ease-out;
}
.intro_text {
  margin: 10%;
  text-align: left;
  font-family: "Adobe Heiti Std";
  color: rgb(78, 77, 77);
  text-transform: uppercase;
  line-height: 1.5;
  font-size: 2.2vh;
  margin-top: 8%;
  font-weight: 546;
}
</style>