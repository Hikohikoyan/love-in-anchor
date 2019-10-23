<template>
  <div id="register_container">
    <div id="form" >
      <div class="cinbox">
        <label class="beforetext">姓&nbsp;名：</label>
        <input
        @input="checkname"
          id="name"
          class="inputer"
          maxlength="50"
          required="required"
          v-model.trim="userinfo.name"
          placeholder="请输入姓名"
          ref="input"
        />
        <label for="name" class="attentiontext" v-show="namer">不要输些奇怪的名字</label>
      </div>
      <div class="cinbox2">
        <label class="beforetext">性&nbsp;别：</label>
        <input type="radio" class="radio" id="male" v-model="userinfo.gender" :value="1" />
        <label for="male" class="aftertext">男</label>
        <input type="radio" class="radio" id="female" v-model="userinfo.gender" :value="0" />
        <label for="female" class="aftertext">女</label>
        <span class="attentiontext" id="genderatt" v-show="genderer">请选择性别</span>
      </div>
      <div class="cinbox" id="grade_selector">
        <label class="beforetext">年&nbsp;级：</label>
        <select v-model="userinfo.grade" class="inputer">
          <option disabled value=" ">请选择</option>
          <option>大一</option>
          <option>大二</option>
          <option>大三</option>
        </select>
        <span class="attentiontext" v-show="grader">你还没有选择年级</span>
      </div>
      <div class="cinbox" id="campus_selector">
        <label class="beforetext">校&nbsp;区：</label>
        <select v-model="campus" class="inputer" @change="change" >
          <option v-for="(item,index) in arr1" :value="index"  :key="index" >{{ item }}</option>
        </select>
        <span class="attentiontext" v-show="campuser">你还没有选择校区</span>
      </div>
      <div class="cinbox" id="colledge_selector">
        <label class="beforetext">学&nbsp;院：</label>
        <select v-model="colledge" class="inputer">
          <option v-for="(item,index) in arr2" :value="item" :key="index">{{ item }}</option>
        </select>
        <label class="attentiontext" v-show="colledger">你还没有选择学院</label>
      </div>
      <div class="cinbox">
        <label class="beforetext">手&nbsp;机：</label>
        <input
          class="inputer"
          type="tel"
          maxlength="11"
          required="required"
          v-model.number="userinfo.tel"
          placeholder="请输入手机号"
          @change="isPhone"
        />
        <label class="attentiontext" id="telatt" v-if="teler">请输入正确的11位手机号</label>
      </div>
      <div class="cinbox3">
        <p class="att2" id="select_text">
          可接受的海选时间段:(多选)
          <br />&nbsp;&nbsp;（注：五山校区只有10号上午，国际校区只有9号上午）
        </p>
        <div class="cinbox4">
          <input type="checkbox" id="moring9" class="radio" v-model="userinfo.checkedtime" :value="time[0]" />
          <label for="morning9" class="aftertext">{{time[0]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="afternoon9" class="radio" v-model="userinfo.checkedtime" :value="time[1]" />
          <label for="afternoon9" class="aftertext">{{time[1]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="morning10" class="radio" v-model="userinfo.checkedtime" :value="time[2]"/>
          <label for="morning10" class="aftertext">{{time[2]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="afternoon10" class="radio" v-model="userinfo.checkedtime" :value="time[3]" />
          <label for="afternoon10" class="aftertext">{{time[3]}}</label>
        </div>
      </div>
      <label class="attentiontext" id="timeatt" v-show="timer" >你还没有选择时间段</label>
    </div>
      <div class="button" id="btn_container" isAbled="0">
      <input type="submit" value id="submitbtn" @click="submit" />
    </div>

  </div>
</template>

<script>
import "@/assets/register.css";
// import "@/assets/check.js";
//
 var college = require('@/assets/college.json');
 const ajaxurl = "http://182.254.161.213/loveinanchor/recruit"
import axios from "axios";
export default {
  name: "register",
  data: function() {
    return {
      campus: '',
      colledge: "",
      arr1:['大学城校区','五山校区','国际校区'],
      arr2:[],
      time:["11.9 上午 9:00-12:00","11.9 下午 15:00-17:30","11.10 上午 9:00-12:00","11.10 下午 15:00-17:30"],
      userinfo:{name: "",gender: 0,grade: "",checkedtime: [],tel: "",},
      namer: false,
      genderer: false,
      timer: false,
      grader: false,
      colledger: false,
      campuser: false,
      teler: false,
  }
  },
  methods: {
    submit() {
    // console.log(userinfo);
    this.userinfo.campus=this.campus;
    this.userinfo.colledge=this.colledge;
    this.userinfo = JSON.stringify(this.userinfo);
    const options = {
        method: 'POST',
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*', 
            'Access-Control-Allow-Methods': 'POST,GET',
            'Content-Type':'application/json',
     },
        data: this.userinfo,
        url : ajaxurl,
      };      
      this.axios(options)
    //   .then((res) => {
    //   console.log(res);
    // })

    },
    checkname() {
    name=String(this.userinfo.name);
    const patternStr = /^[\u4E00-\u9FA5A-Za-z]+(·[\u4E00-\u9FA5A-Za-z]+)*$/g;
      this.namer = (!patternStr.test(name)) || (!name);
    // console.log(this.userinfo.name);
    if(this.namer == true){
      this.$refs['input'].placeholder = '';
    }
    },
    change(){
      // console.log("e",this.campus)
      this.arr2 = college[this.campus]
    },
    isPhone() {
    this.teler=false;
    var pattern = /^1[3|4|5|7|8]\d{9}$/
    this.teler= !pattern.test(this.userinfo.tel);
    }
  },
  mounted() {
    this.arr2 = college[0];
    this.$refs['input'].focus();
  }
  }
  
</script>
<style>
</style>