<template>
  <div id="register_container">
    <div id="form">
      <div class="cinbox">
        <label class="beforetext">姓名：</label>
        <input
          @input="checkname"
          id="name"
          class="inputer"
          maxlength="15"
          required="required"
          v-model.trim="userinfo.name"
          placeholder="请输入姓名"
          ref="input"
        />
        <label for="name" class="attentiontext" v-show="namer"
          >请输入姓名</label
        >
      </div>
      <div class="cinbox2">
        <label class="beforetext">性别：</label>
        <input
          type="radio"
          class="radio"
          id="male"
          v-model="userinfo.gender"
          value="1"
        />
        <label for="male" class="aftertext">男</label>
        <input
          type="radio"
          class="radio"
          id="female"
          v-model="userinfo.gender"
          value="0"
        />
        <label for="female" class="aftertext">女</label>
        <span class="attentiontext" id="genderatt" v-show="show"
          >请选择性别</span
        >
      </div>

      <div class="cinbox" id="campus_selector">
        <label class="beforetext">校区：</label>
        <div id="campussl" class="inputer">
          <select v-model="campus" class="select" @change="change">
            <option v-for="(item, index) in arr1" :value="index" :key="index">{{
              item
            }}</option>
          </select>
        </div>
        <span class="attentiontext" v-show="campus_check"
          >你还没有选择校区</span
        >
      </div>
      <div class="cinbox" id="colledge_selector">
        <label class="beforetext">学院：</label>
        <div id="collegesl" class="inputer">
          <select v-model="college" @change="back" class="select">
            <option v-for="(item, index) in arr2" :value="item" :key="index">{{
              item
            }}</option>
          </select>
        </div>
        <label class="attentiontext" v-show="college_check"
          >你还没有选择学院</label
        >
      </div>
      <div class="cinbox" id="grade_selector">
        <label class="beforetext">年级：</label>
        <div id="gradesl" class="inputer">
          <select v-model="userinfo.grade" @change="back" class="select">
            <option disabled value=" ">请选择</option>
            <option>大一</option>
            <option>大二</option>
            <option>大三</option>
            <option>大四</option>
            <option v-if="college === '医学院' || college === '建筑学院'"
              >大五</option
            >
            <option>研一</option>
            <option>研二</option>
            <option>研三</option>
          </select>
        </div>
        <span class="attentiontext" v-show="grade_check">你还没有选择年级</span>
      </div>
      <div class="cinbox">
        <label class="beforetext">手机：</label>
        <input
          class="inputer"
          type="tel"
          ref="tel"
          maxlength="11"
          required="required"
          v-model.trim="userinfo.tele"
          placeholder="请输入手机号"
          @input="isPhone"
        />
        <label class="attentiontext" id="telatt" v-show="teler"
          >请输入正确的11位手机号</label
        >
      </div>
      <div class="cinbox3">
        <p class="att2" id="select_text">
          可接受的海选时间段:(多选)
          <br />
        </p>
        <p class="att3">
          注：五山校区只有10号上午
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国际校区只有9号上午
        </p>

        <div class="cinbox4">
          <input
            type="checkbox"
            id="time1"
            class="radio2"
            @change="back"
            v-model="userinfo.time"
            :value="time[0]"
          />
          <label for="time1" class="aftertext2">{{ time[0] }}</label>
        </div>
        <div class="cinbox4">
          <input
            type="checkbox"
            id="afternoon9"
            class="radio2"
            @change="back"
            v-model="userinfo.time"
            :value="time[1]"
          />
          <label for="afternoon9" class="aftertext2">{{ time[1] }}</label>
        </div>
        <div class="cinbox4">
          <input
            type="checkbox"
            id="morning10"
            class="radio2"
            @change="back"
            v-model="userinfo.time"
            :value="time[2]"
          />
          <label for="morning10" class="aftertext2">{{ time[2] }}</label>
        </div>
        <div class="cinbox4">
          <input
            type="checkbox"
            id="afternoon10"
            class="radio2"
            @change="back"
            v-model="userinfo.time"
            :value="time[3]"
          />
          <label for="afternoon10" class="aftertext2">{{ time[3] }}</label>
        </div>
      </div>
      <label class="attentiontext" id="timeatt" v-show="timer"
        >你还没有选择时间段</label
      >
      <div class="button" id="btn_container" @click="remove">
        <input
          type="submit"
          value
          :disabled="isAbled"
          :isClick="isClick"
          id="submitbtn"
          @click="submit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/css/register.css";
// import "@/assets/check.js";
//
var college = require("@/assets/college.json");
import axios from "axios";
import { ajaxurl } from "../config";
import api from "../api";
export default {
  name: "register",
  data: function() {
    return {
      campus: 3,
      college: "",
      arr1: ["大学城校区", "五山校区", "国际校区"],
      arr2: [],
      time: [
        "11.9 上午 9:00-12:00",
        "11.9 下午 15:00-17:30",
        "11.10 上午 9:00-12:00",
        "11.10 下午 15:00-17:30"
      ],
      userinfo: {
        name: "",
        gender: 1,
        grade: "",
        time: [],
        tele: "",
        campus: "",
        college: ""
      },
      teler: false,
      namer: false,
      errmsg: { name: "", tele: "" },
      isAbled: false,
      // timer: false,
      grade_check: false,
      campus_check: false,
      college_check: false,
      show: false,
      isClick: false
    };
  },
  methods: {
    submit() {
      this.isClick == true;
      if (window.sessionStorage.getItem("isAbled") == "true") {
        this.isAbled = true;
        this.$alert(window.sessionStorage.getItem("TimeErr"), "活动时间提示", {
          confirmButtonText: "返回"
        }).catch(() => {});
        return;
      }
      if (this.campus == 3) {
        this.campus_check = true;
      }
      if (this.college == "") {
        this.college_check = true;
      }
      if (this.userinfo.garde == "") {
        this.grade_check = true;
      }
      if (this.userinfo.tele == "") {
        this.teler = true;
      }
      if (this.userinfo.name == "") {
        this.namer = true;
      }
      var select_check = !(
        this.grade_check &&
        this.campus_check &&
        this.college_check
      );
      // console.log(select_check);
      var check = Boolean(
        this.timer == false &&
          select_check &&
          this.userinfo.name != "" &&
          !this.teler &&
          this.userinfo.gender != 3
      );
      // console.log(check);
      if (!check) {
        this.$alert("你还没有填完所有信息", "提示", {
          confirmButtonText: "确认",
          center: true
        }).catch(() => {});
        return;
      } else {
        this.isAbled = true;
        this.userinfo.campus = this.campus;
        this.userinfo.college = this.college;
        const options = {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST,GET",
            "Content-Type": "application/json"
          },
          transformRequest: [
            function(data) {
              console.log(data);
              data = JSON.stringify(data);
              return data;
            }
          ],
          data: this.userinfo,
          url: ajaxurl
        };
        this.axios(options)
          .then(res => {
            if (res.data.errcode == 0) {
              this.$router.push("/success");
              return;
            }
            if (res.data.errcode == 400) {
              var len = res.data.errmsg.type.length;
              for (let i = 0; i < len; i++) {
                // console.log(i, res.data.errmsg.type[i]);
                switch (res.data.errmsg.type[i]) {
                  case "name":
                    this.namer = true;
                    this.$refs["input"].focus();
                    break;
                  case "tele":
                    this.teler = true;
                    this.$refs["tel"].focus();
                    break;
                  default:
                    this.$alert("有什么填错了", "提示", {
                      confirmButtonText: "返回"
                    }).catch(() => {});
                    break;
                }
              }
            } else if (res.data.errcode == 402) {
              this.$alert(
                String(res.data.errmsg.name) +
                  "同学，你" +
                  String(res.data.errmsg.msg),
                "提示",
                {
                  confirmButtonText: "返回"
                }
              ).catch(() => {
                // this.$router.push('/');
              });
            } else {
              this.$alert(String(res.data.errmsg), "提示", {
                confirmButtonText: "返回"
              }).catch(() => {
                // this.$router.push('/');
              });
            }
          })
          .catch(error => {
            console.log(this.error.response);
            var errcode = this.error.response.status;
            switch (errcode) {
              case 400:
                this.isAbled = true;
                this.$router.go(-1);
                this.$alert("你还没有填写信息！", "提示", {
                  confirmButtonText: "确认"
                }).catch(() => {});
                break;
              case 402:
                this.isAbled = true;
                this.$alert("你不是报名过了吗", "提示", {
                  confirmButtonText: "返回"
                }).catch(() => {
                  // this.$router.push('/');
                });
                break;
              case 403:
                this.isAbled = false;
                this.$alert("网络出错啦", "提示", {
                  confirmButtonText: "返回"
                }).catch(() => {
                  // this.$router.push('/');
                });
                console.log(error.response.data);
                console.log(error.message);
              case 500:
                this.isAbled = true;
                this.$alert("网络出错啦", "提示", {
                  confirmButtonText: "返回"
                }).catch(() => {
                  // this.$router.push('/');
                });
              case 502:
                this.isAbled = true;
                this.$alert("网络出错啦", "提示", {
                  confirmButtonText: "返回"
                }).catch(() => {
                  // this.$router.push('/');
                });
              default:
                console.log(this.error.config);
                break;
            }
          });
      }
    },
    checkname() {
      name = String(this.userinfo.name);
      const patternStr = /^[\u4E00-\u9FA5A-Za-z]+(·[\u4E00-\u9FA5A-Za-z]+)*$/g;
      const patternwrong = /[^a-zA-Z0-9\_\u4e00-\u9fa5]/g;
      this.namer = !patternStr.test(name) || !name;
      if (this.namer == true || patternwrong.test(name)) {
        this.namer = true;
        this.userinfo.name = "";
      }
    },
    change() {
      this.college = "";
      // console.log(this.college);
      this.campus_check = true;
      this.arr2 = [];
      // console.log(this.college_check);
      if (this.college_check == false) {
        this.college_check = true;
      }
      this.arr2 = college[this.campus];
      if (this.campus < 3) {
        this.campus_check = false;
      } else {
        this.campus_check = true;
      }
      this.arr2 = null;
      this.college = "";
      this.arr2 = college[this.campus];
    },
    isPhone() {
      this.$refs["tel"].focus();
      this.teler = false;
      const pattern = /^1[3|4|5|7|8]\d{9}$/;
      const patternStr = /[^a-zA-Z0-9\_\u4e00-\u9fa5]/g;
      this.teler = pattern.test(this.userinfo.tel);
      if (patternStr.test(this.userinfo.tele)) {
        this.userinfo.tele = "";
        this.teler = true;
      }
    },
    remove() {
      setTimeout(() => {
        this.isAbled = false;
      }, 1000);
    },
    back() {
      if (this.userinfo.grade == "") {
        this.grade_check = true;
      } else {
        this.grade_check = false;
      }
      if (this.campus == 3) {
        this.campus_check = true;
      } else {
        this.campus_check = false;
      }
      if (this.college != "") {
        this.college_check = false;
      } else {
        this.college_check = true;
      }
    }
  },
  mounted() {
    this.arr2 = college[0];
    this.$refs["input"].focus();
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    let app = document.getElementById("app");
    app.style.overflowY = "scroll";
    app.style.height = getComputedStyle(app, null).getPropertyValue("height");
  },
  computed: {
    timer: function() {
      if (this.userinfo.time.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style>
</style>