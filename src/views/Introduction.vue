<template>
  <div id="intro">
    <img id="title" :src="title" />

    <div id="textbox">
      <p class="intro_text">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"爱上女主播"播音主持大赛是华工最为专业、影响力最大的播音主持类比赛，从创办之初至今已延续了十一年，为华工选拔和培育出了一大批优秀的主持人才，也为无数心怀主持梦想的同学开启了全新世界的大门。
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;今年，第十二届"爱上你主播"将以"十二时辰"为主题开启新的旅程。在华园，爱上你的十二时辰。
        <br />
        <br />报名方式：
        <br />10月28日至10月30日
        <br />一、二饭百步梯摊位线下报名
        <br />10月25日至10月31日
        <br />百步梯微信公众号线上报名
      </p>
    </div>
    <MyButton button_name="registerbtn" pagename="register" isAbled="0"></MyButton>
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
  }
};
</script>

<style>
#intro {
  margin-top: 60px;
  height: -webkit-fill-available;
  /* display: flex; */
  /* text-align: center; */
}
#title {
  width: 100%;
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