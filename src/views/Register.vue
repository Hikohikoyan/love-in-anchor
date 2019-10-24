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
        <label for="name" class="attentiontext" v-if="namer">请输入姓名</label>
      </div>
      <div class="cinbox2">
        <label class="beforetext">性&nbsp;别：</label>
        <input type="radio" class="radio" id="male" v-model="userinfo.gender" value= 1 />
        <label for="male" class="aftertext">男</label>
        <input type="radio" class="radio" id="female" v-model="userinfo.gender" value= 0 />
        <label for="female" class="aftertext">女</label>
        <span class="attentiontext" id="genderatt" v-if="userinfo.gender==3">请选择性别</span>
      </div>
      <div class="cinbox" id="grade_selector">
        <label class="beforetext">年&nbsp;级：</label>
        <select v-model="userinfo.grade" class="inputer" >
          <option disabled value=" ">请选择</option>
          <option>大一</option>
          <option>大二</option>
          <option>大三</option>
        </select>
        <span class="attentiontext" v-show="userinfo.grade==' '" >你还没有选择年级</span>
      </div>
      <div class="cinbox" id="campus_selector">
        <label class="beforetext">校&nbsp;区：</label>
        <select v-model="campus" class="inputer" @change="change" >
          <option v-for="(item,index) in arr1" :value="index"  :key="index" >{{ item }}</option>
        </select>
        <span class="attentiontext" v-if="campus>2" >你还没有选择校区</span>
      </div>
      <div class="cinbox" id="colledge_selector">
        <label class="beforetext">学&nbsp;院：</label>
        <select v-model="college" class="inputer">
          <option v-for="(item,index) in arr2" :value="item" :key="index">{{ item }}</option>
        </select>
        <label class="attentiontext" v-if="college==''">你还没有选择学院</label>
      </div>
      <div class="cinbox">
        <label class="beforetext">手&nbsp;机：</label>
        <input
          class="inputer"
          type="tel"
          maxlength="11"
          required="required"
          v-model.trim="userinfo.tele"
          placeholder="请输入手机号"
          @change="isPhone"
        />
        <label class="attentiontext" id="telatt" v-if="teler">请输入正确的11位手机号</label>
      </div>
      <div class="cinbox3">
        <p class="att2" id="select_text">
          可接受的海选时间段:(多选)
          <br />&nbsp;&nbsp;注：五山校区只有10号上午<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国际校区只有9号上午
        </p>
        <div class="cinbox4">
          <input type="checkbox" id="moring9" class="radio" v-model="userinfo.time" :value="time[0]" />
          <label for="morning9" class="aftertext">{{time[0]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="afternoon9" class="radio" v-model="userinfo.time" :value="time[1]" />
          <label for="afternoon9" class="aftertext">{{time[1]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="morning10" class="radio" v-model="userinfo.time" :value="time[2]"/>
          <label for="morning10" class="aftertext">{{time[2]}}</label>
        </div>
        <div class="cinbox4">
          <input type="checkbox" id="afternoon10" class="radio" v-model="userinfo.time" :value="time[3]" />
          <label for="afternoon10" class="aftertext">{{time[3]}}</label>
        </div>
      </div>
      <label class="attentiontext" id="timeatt" v-if="userinfo.time==' '" >你还没有选择时间段</label>
            <div class="button" id="btn_container" @click="remove">
      <input type="submit" value :disabled="isAbled" id="submitbtn"  @click="submit" />
    </div>
    </div>


  </div>
</template>

<script>
import "@/assets/register.css";
// import "@/assets/check.js";
//
 var college = require('@/assets/college.json');
 const collegeurl= "http://182.254.161.213/love-in-anchor/colleges"
 const ajaxurl = "http://182.254.161.213/love-in-anchor/recruit"
import axios from "axios";
import QS from 'qs'
export default {
  name: "register",
  data: function() {
    return {
      campus: 3,
      college: "",
      arr1:['大学城校区','五山校区','国际校区'],
      arr2:[],
      time:["11.9 上午 9:00-12:00","11.9 下午 15:00-17:30","11.10 上午 9:00-12:00","11.10 下午 15:00-17:30"],
      userinfo:{name: "",gender: 3,grade: " ",time: [],tele: ""},
      teler:true,
      namer:true,
      errmsg:{name:'',tele:''},
      isAbled: false,
  }
  },
  methods: {
    submit() {
      var select_check=!(this.college==' '&&this.userinfo.grade==' ');
      console.log(select_check);
      var check=Boolean((this.userinfo.time!=' ') &&select_check&&(this.userinfo.name!='')&&(!this.teler));
      console.log(check);
      if(!check){
        console.log('没填完');
        return;
      }else{
      this.isAbled= true;
    this.userinfo.campus=this.campus;
    this.userinfo.college=this.college;
    console.log(this.userinfo);
    // this.userinfo = JSON.stringify(this.userinfo);
    const options = {
        method: 'POST',
        headers: { 
            // 'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*', 
            'Access-Control-Allow-Methods': 'POST,GET',
            'Content-Type':'application/json',
     },
     transformRequest: [function(data) {
       console.log(data);
      data = JSON.stringify(data)
      return data
    }],
        data: this.userinfo,//QS.stringify()
        url : ajaxurl,
      };      
      this.axios(options)
      .then((res) => {
        if(res.data.errcode == 0){
        this.$router.push('/success');
        }
      if(res.data.errcode == 400){
        var len=res.data.errmsg.type.length;
        for(let i=0;i<len;i++){
          console.log(i,res.data.errmsg.type[i])
          switch (res.data.errmsg.type[i]) {
            case "name":
              this.namer = true;
              break;
            case "tele":
              this.teler = true;
            break;
            default:
              console.log('还有什么写错了')
              break;
          }
        }
      }
    })
      .catch((error)=>{
        console.log(error.response);
        var errcode= error.response.status;
        switch (errcode) {
          case 400:
            console.log('你什么都没有填嘛');
            break;
          case 402:
            console.log('你不是报名过了吗');
            break;
          case 403:
            this.isAbled= false;
            console.log(error.response.data);
            console.log(error.message);
          case 500:
            this.isAbled = true;
            console.log('Interval error')  
          default:
            console.log(error.config)
            break;
        }
      });
    }
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
      console.log("e",this.campus)

      this.arr2 = college[this.campus]
    },
    isPhone() {
    this.teler=true;
    var pattern = /^1[3|4|5|7|8]\d{9}$/
    this.teler= pattern.test(this.userinfo.tel);
    },
    remove(){
        setTimeout(() => {
        this.isAbled= false;
      }, 1000);
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