import wx from "weixin-js-sdk";
import { apiurl, phpurl, bbturl, getWxurl } from "./config";
import axios from "axios";
import qs from "qs";

var timestamp = new Date().getTime();
const instance = axios.create({
  baseURL: bbturl,
  timeout: 10000
});
// // axios设置请求拦截器,设置响应头token
axios.interceptors.request.use(
  config => {
    config.headers.token = window.sessionStorage.getItem("token");
    return config;
  },
  err => {
    console.log(err);
  }
);
// axios.defaults.headers.post["Content-Type"] = "application/json";
export function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  // if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  // return true;
  // } else {
  // return false;
  // }
  return true;
}
function switchErrcode(errcode, method) {
  var errmsg = "";
  switch (method) {
    case "checkSubscribe":
      switch (errcode) {
        case 400:
          errmsg = "请授权登录!";
          break;
        case 401:
          errmsg = "你还没有关注!";
          break;
        default:
          break;
      }
      break;
    case "checkTime":
      switch (errcode) {
        case 400:
          errmsg = "活动还未开始哦～敬请期待";
          break;
        case 401:
          errmsg = "活动已经结束啦～感谢关注";
          break;
        default:
          break;
      }
    default:
      break;
  }
  return errmsg;
}
export function checkTime() {
  if (!isWeiXin) {
    return;
  }

  const options = {
    method: "GET",
    url: apiurl + "checkTime"
  };
  axios(options).then(res => {
    var msg = switchErrcode(Number(res.data.errcode),"checkTime");
    console.log(msg);
    if (msg != "") {
      // this.$alert(msg, "提示", {
      //   confirmButtonText: "好的"
      // }).catch(() => {});
      window.sessionStorage.setItem("TimeErr", msg);
      window.sessionStorage.setItem("isAbled", "true");
    } else {
      window.sessionStorage.setItem("TimeErr", "");
    }
  });
}

export function checkLogin() {
  if (!isWeiXin) {
    return;
  }

  var checkurl = apiurl + "checkLogin";
  axios.get(checkurl).then(res => {
    wxlogin();
    if (res.data.errcode != 0 || res.data.errcode == 400) {
      window.location.href = phpurl;
    } else {
      return true;
    }
  });
}

export function checkSubscribe() {
  if (!isWeiXin) {
    return;
  }

  axios.get(bbturl).then(res => {
    if (res.data.errcode == 0) {
      return "";
    }
    if (res.data.errcode == 400) {
      //未授权 请求授权wx login链接
      window.location.href = phpurl;
    } else {
      //请求关注公众号
    }
    var msg = switchErrcode(res.data.errcode,"checkSubscribe");
    return msg;
  });
}
export function wxlogin() {
  if (!isWeiXin) {
    return;
  }
  fetch(getWxurl, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST",
    body: qs.stringify({
      url: location.href.split("#")[0]
    })
  })
    .then(res => res.json())
    .then(res => {
      wx.config({
        appId: res.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature,
        jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"],
        debug: false
      });
      wx.ready(function() {
        //alert(window.location.href.split('#')[0]);
        wx.updateTimelineShareData({
          title: "爱上你主播：爱上你的十二时辰", // 分享标题
          link: "https://hemc.100steps.net/2019/anchor/recruit/",
          imgUrl: "https://hemc.100steps.net/2019/anchor/poster/recruit.jpg",
          success: function(res) {},
          cancel: function(res) {
            this.$message("取消了分享~").catch(() => {});
          }
        });
      });
      //分享给朋友
      wx.updateAppMessageShareData({
        title: "爱上你主播：爱上你的十二时辰",
        desc: "", // 分享描述
        link: "https://hemc.100steps.net/2019/anchor/recruit/",
        imgUrl: "https://hemc.100steps.net/2019/anchor/poster/recruit.jpg",
        success: function(res) {
          // 用户确认分享后执行的回调函数
        },
        cancel: function(res) {
          // 用户取消分享后执行的回调函数
          this.$message("取消了分享~").catch(() => {});
        }
      });
      wx.error(function(res) {
        logUtil.printLog("验证失败返回的信息:", res);
        this.$alert("授权失败了=n=", "提示", {
          confirmButtonText: "重试",
          cancelButtonText: "取消"
        }).catch(() => {});
        //点击重试 再重新请求一次  取消就消失弹框
      });

      //处理验证成功的信息
    });
}
