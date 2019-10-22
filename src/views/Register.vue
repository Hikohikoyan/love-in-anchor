<template>
  <div id="register_container">
    <form id="form" @submit="checkForm" action=" " method="post">
      <div class="cinbox">
        <label class="beforetext">姓&nbsp;名：</label>
        <input id="name" class="inputer" maxlength="50" required="required" v-model="name" placeholder="请输入姓名">
        <label for="name" class="attentiontext" v-show="namer">不要输些奇怪的名字</label>
      </div>
      <div class="cinbox2">
        <label class="beforetext">性&nbsp;别：</label>
        <input type="radio" class="radio" id="male" v-model="gender" :value="1"><label for="male"
          class="aftertext">男</label>
        <input type="radio" class="radio" id="female" v-model="gender" :value="0"><label for="female"
          class="aftertext">女</label>
        <span class="attentiontext" id="genderatt" v-show="genderer">请选择性别</span>
      </div>
      <div class="cinbox" id="grade_selector">
        <label class="beforetext">年&nbsp;级：</label>
        <select v-model="grade" class="inputer">
          <option disabled value=" ">请选择</option>
          <option>大一</option>
          <option>大二</option>
          <option>大三</option>
        </select>
        <span class="attentiontext" v-show="grader">你还没有选择年级</span>
      </div>
      <div class="cinbox" id="campus_selector">
        <label class="beforetext">校&nbsp;区：</label>
        <select v-model="campus" class="inputer">
          <option v-for="arr1 in arr1s" :value="arr1.value" :key="arr1.id">
            {{ arr1.text }}
          </option>
        </select>
        <span class="attentiontext" v-show="campuser">你还没有选择校区</span>
      </div>
      <div class="cinbox" id="colledge_selector">
        <label class="beforetext">学&nbsp;院：</label>
        <select v-model="colledge" class="inputer">
          <option v-for="arr2 in arr2s" :value="arr2.value" :key="arr2.id">
            {{ arr2.text }}
          </option>
        </select>
        <label class="attentiontext" v-show="colledger">你还没有选择学院</label>
      </div>
      <div class="cinbox">
        <label class="beforetext">手&nbsp;机：</label>
        <input class="inputer" type="tel" maxlength="11" required="required" v-model="tel" placeholder="请输入手机号">
        <label class="attentiontext" id="telatt" v-show="teler">请输入正确的11位手机号</label>
      </div>
      <div class="cinbox3">
        <p class="att2">可接受的海选时间段:(多选)<br>
          &nbsp;&nbsp;（注：五山校区只有10号上午，国际校区只有9号上午）</p>
        <div class="cinbox4">
          <input type="checkbox" class="radio" v-model="checkedtime" :value="1191">
          <label class="aftertext">11.9 上午 9:00-12:00</label></div>
        <div class="cinbox4">
          <input type="checkbox" class="radio" v-model="checkedtime" :value="1192">
          <label class="aftertext">11.9 下午 15:00-17:30</label></div>
        <div class="cinbox4">
          <input type="checkbox" class="radio" v-model="checkedtime" :value="1110">
          <label class="aftertext">11.10 上午 9:00-12:00</label></div>
        <div class="cinbox4">
          <input type="checkbox" class="radio" v-model="checkedtime" :value="1112">
          <label class="aftertext">11.10 下午 15:00-17:30</label></div>
      </div>
      <label class="attentiontext" id="timeatt" v-show="timer">请选择时间段</label>
    </form>
    <div class="button" isAbled= 0 @click="submit">
      <input type="submit" value="" id="submitbtn">
    </div>
  </div>
</template>

<script>
import '@/assets/register.css'
// import axios from 'axios'
  export default {
    name: "register",
    data: function () {
      return {
        name: "",
        gender: 0,
        grade: "",
        colledge: "",
        campus: "",
        checkedtime: 0,
        tel: '',
        namer: true,
        genderer: true,
        timer: true,
        grader: false,
        colledger: false,
        campuser: false
      }
    },
    computed: {

    },
      mounted() {
            // this.getData();
        },
        methods: {
            // getData() {
            //     axios.get('@/assets/colledge.json').then(response => {
            //         console.log(response.data);
            //     }, response => {
            //         console.log("error");
            //     });
            // }
        }
  }
</script>

<style>

</style>