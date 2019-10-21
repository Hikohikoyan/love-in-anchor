<template>
  <div id="register_container">
    <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer" maxlength="50" required="required" v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" v-show="namer">不要输些奇怪的名字</span>
    </div>
    <div class="cinbox2">
      <span class="beforetext">性&nbsp;别：</span>
      <input type="radio" class="radio" v-model="gender" :value="1"><span class="aftertext">男</span>
      <input type="radio" class="radio" v-model="gender" :value="0"><span class="aftertext">女</span>
      <span class="attentiontext" id="genderatt" v-show="genderer">请选择性别</span>
    </div>
    <div class="cinbox">
      <span class="beforetext">年&nbsp;级：</span>
      <select v-model="grade" class="inputer">
        <option disabled value=" ">请选择</option>
        <option>大一</option>
        <option>大二</option>
        <option>大三</option>
      </select>
      <span class="attentiontext" v-show="grader">你还没有选择年级</span>
      <div class="overselect"></div>
    </div>
    <div class="cinbox">
      <span class="beforetext">校&nbsp;区：</span>
      <select v-model="campus" class="inputer">
        <option v-for="arr1 in arr1s" :value="arr1.value" :key="arr1.id">
          {{ arr1.text }}
        </option>
      </select>
      <span class="attentiontext" v-show="campuser">你还没有选择校区</span>
      <div class="overselect"></div>
    </div>
    <div class="cinbox">
      <span class="beforetext">学&nbsp;院：</span>
      <select v-model="colledge" class="inputer">
        <option v-for="arr2 in arr2s" :value="arr2.value" :key="arr2.id">
          {{ arr2.text }}
        </option>
      </select>
      <span class="attentiontext" v-show="colledger">你还没有选择学院</span>
      <div class="overselect"></div>
    </div>
    <div class="cinbox">
      <span class="beforetext">手&nbsp;机：</span>
      <input class="inputer" type="tel" maxlength="11" required="required" v-model="tel" placeholder="请输入手机号">
      <span class="attentiontext" id="telatt" v-show="teler">请输入正确的11位手机号</span>
    </div>
    <div class="cinbox3">
      <p class="att2">可接受的海选时间段:(多选)<br>
        &nbsp;&nbsp;（注：五山校区只有10号上午，国际校区只有9号上午）</p>
      <div class="cinbox4">
        <input type="checkbox" class="radio" v-model="checkedtime" :value="1191">
        <span class="aftertext">11.9 上午 9:00-12:00</span></div>
      <div class="cinbox4">
        <input type="checkbox" class="radio" v-model="checkedtime" :value="1192">
        <span class="aftertext">11.9 下午 15:00-17:30</span></div>
      <div class="cinbox4">
        <input type="checkbox" class="radio" v-model="checkedtime" :value="1110">
        <span class="aftertext">11.10 上午 9:00-12:00</span></div>
      <div class="cinbox4">
        <input type="checkbox" class="radio" v-model="checkedtime" :value="1112">
        <span class="aftertext">11.10 下午 15:00-17:30</span></div>
    </div>
    <span class="attentiontext" id="timeatt" v-show="timer">请选择时间段</span>

  </div>
</template>

<script>
  export default {
    name: "register",
    props: {
      name: String,
      gender: Number,
      grade: String,
      colledge: String,
      campus: String,
      checkedtime: Number,
      tel: Number
    },
    data: function () {
      return {
        name: "",
        gender: 0,
        grade: "",
        colledge: "",
        campus: "",
        checkedtime: 0,
        tel: 0,
        namer: true,
        genderer: true,
        timer: true,
        grader: false,
        colledger: false,
        campuser: false
      }
    },
    computed: {

    }
  }
</script>

<style>
  .att2 {
    width: 80%;
    font-size: 90%;
    font-family: "Adobe Heiti Std";
    color: rgb(78, 77, 77);
    text-transform: uppercase;
  }

  #register_container {
    height: -webkit-fill-available;
    margin-top: 120px;
    width: 100%;
    margin-left: 10%;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7% 7% 7% 7% 7% 7% 10% 30px 30px 30px 30px;
    grid-gap: 20px;
  }

  .cinbox {
    display: inline-grid;
    grid-template-columns: 20% 5% 75%;
    grid-template-rows: 50px;
  }

  .beforetext {
    font-size: 20px;
    font-family: "Adobe Heiti Std";
    color: rgb(78, 77, 77);
    text-transform: uppercase;
    line-height: 1.2;
    left: 0;
  }

  .aftertext {
    font-size: 20px;
    font-family: "Adobe Heiti Std";
    color: rgb(78, 77, 77);
    text-transform: uppercase;
    line-height: 1.2;
    left: 0;
  }

  .overselect {
    width: 20px;
    width: 0px;
    height: 6px;
    border: 13px solid;
    border-color: #838485 transparent transparent transparent;
    position: relative;
    margin-left: 265px;
    margin-top: -40px;
    z-index: 20;
    border-radius: 0.4rem 0.4rem 0 0.2rem;
  }

  .inputer {
    margin-top: -5px;
    margin-left: 5px;
    border-width: 2px;
    border-color: rgb(127, 128, 128);
    border-style: dashed;
    border-radius: 9px;
    height: 40px;
    background-color: transparent;
    background-image: -webkit-linear-gradient(180deg, transparent 0%, rgba(161, 186, 186, 0.2) 100%);
    padding: 2%;
    padding-left: 10px;
    right: 0%;
    width: 200px;
    padding-right: 5.66px;
    outline: none;
  }

  select.inputer {
    width: 220px;
    padding-right: 0;
    -webkit-appearance: none;
  }

  select::after {
    content: " " !important;
    width: 10px;
    height: 10px;
    border: 10px solid;
    border-color: #666 transparent transparent transparent;
    position: absolute;
    top: 0px;
    z-index: 20;
  }

  .radio {
    display: inline-block;
    border-width: 2px;
    border-color: rgb(127, 128, 128);
    border-style: solid;
    border-radius: 50%;
    margin: 0;
    -webkit-appearance: unset;
    /* border: none; */
    margin-left: 10px;
    height: 25px;
    width: 25px;
    margin-right: 10px;
    padding-top: 4px;
    border-radius: 1rem;
  }

  /* .radio::before {
    content: " ";
    border-width: 3px;
    border-color: rgb(127, 128, 128);
    border-style: solid;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    margin-top: -3px;
    position: absolute;
} */
  .radio:hover,
  .radio:active {

    background-image: -moz-linear-gradient(180deg, rgb(194, 223, 245) 0%, rgb(161, 186, 186) 100%);
    background-image: -webkit-linear-gradient(180deg, rgb(194, 223, 245) 0%, rgb(161, 186, 186) 100%);
    background-image: -ms-linear-gradient(180deg, rgb(194, 223, 245) 0%, rgb(161, 186, 186) 100%);
    background-size: 10px;
    background-clip: content-box;
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: center;
  }

  .attentiontext {
    color: #c36774;
    font-size: 15px;
    margin-top: 40px;
    margin-left: 70px;
    font-size: 15px;
    white-space: pre-line;
    position: relative;
  }
  .aftertext::before {
    content: " ";
    background: linear-gradient(90deg, rgba(163, 188, 193, 1) 0%, rgba(185, 213, 229, 1) 100%);
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 9rem;
    margin-left: -29px;
    margin-top: 6px;
}
  #genderatt {
    margin-left: 10px;
  }

  #timeatt {
    margin-left: 20px;
    margin-top: 100px;
  }

  #telatt {
    margin-left: 30px;
  }

  .cinbox4 {
    display: -webkit-inline-box;
    height: 30px;
  }
</style>