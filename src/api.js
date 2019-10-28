import wx from 'weixin-js-sdk';
import {apiurl,phpurl,bbturl,getWxurl} from './config';
import axios from 'axios';

var timestamp = new Date().getTime();
const instance = axios.create({
  baseURL: bbturl,
  timeout: 10000,
});
// // axios设置请求拦截器,设置响应头token
axios.interceptors.request.use(
  config => {
    config.headers.token = window.sessionStorage.getItem('token');
    return config
  },
  err => {
    console.log(err)
  }
)
axios.defaults.headers.post['Content-Type'] = 'application/json';
export function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
  return true;
  } else {
  return false;
  }
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
          errmsg = "活动还未开始!";
          break;
        case 401:
          errmsg = "活动已结束!";
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
  if(!isWeiXin){
    return;
  }

  const options = {
    method: 'GET',
    url: apiurl + 'checkTime',
  };
  axios(options)
    .then((res) => {
      var msg = switchErrcode(Number(res.data.errcode));
      console.log(msg);
      if (msg != "") {
        this.$alert(msg, '提示', {
          confirmButtonText: '好的'
        }).catch(() => {});
        window.sessionStorage.setItem('TimeErr',msg);
        window.sessionStorage.setItem('isAbled','true');
      }else{
        window.sessionStorage.setItem('TimeErr','');
      }
    })
}

export function checkLogin() {
  if(!isWeiXin){
    return;
  }

  var checkurl = apiurl + "checkLogin";
  axios.get(checkurl)
    .then((res) => {
      if (res.data.errcode != 0 || res.data.errcode == 400) {
        window.location.href= phpurl;
      } else {
        return true;
      }
    });
}

export function checkSubscribe() {
  if(!isWeiXin){
    return;
  }

  axios.get(bbturl).then((res) => {
    if(res.data.errcode==0){
      return '';
    }
    if(res.data.errcode==400){//未授权 请求授权wx login链接
      window.location.href=phpurl;
    }else{//请求关注公众号
    }
    var msg=switchErrcode(res.data.errcode);
    return msg;

  })
}
export function wxlogin(){
  if(!isWeiXin){
    return;
  }
  const option_wx={
    method:'POST',
    transformRequest: [
      function(data) {
        console.log(data);
        data = JSON.stringify(data);
        return data;
      }
    ],
    data:  window.location.href.split('#')[0],
    url: getWxurl
  };
  axios(option_wx).then((res)=>{
    wx.config({
      appId: res.data.appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
      timestamp: res.data.timestamp,
      nonceStr: res.data.nonceStr,
      signature: res.data.signature,
      jsApiList: [
        'updateTimelineShareData', 'updateAppMessageShareData'
      ]
    });
    wx.ready(function () {
      //alert(window.location.href.split('#')[0]);
      wx.updateTimelineShareData({
        title: "爱上N主播|线上报名", // 分享标题
        link: window.location.href.split('#')[0],
        imgUrl: "logo",
        success: function (res) {
          this.$alert('感谢分享~','爱上N主播',{
            confirmButtonText:"确定"
          }).catch(()=>{});
          console.log(res);
        },
        cancel: function (res) {
          this.$message('取消了分享~').catch(()=>{});
          console.log(res);
        }
      });
    });
    //分享给朋友
    wx.updateAppMessageShareData({
      title: "爱上N主播|线上报名",
      desc: "爱上N主播",
      link: window.location.href.split('#')[0],
      imgUrl: "logo",
      type: 'link',
      dataUrl: '',
      success: function (res) {
        // 用户确认分享后执行的回调函数
        console.log(res);
      },
      cancel: function (res) {
        // 用户取消分享后执行的回调函数
        console.log(res);
      }
    });
    wx.error(function (res) {
      logUtil.printLog('验证失败返回的信息:', res);
      this.$alert('授权失败了=n=','提示',{
        confirmButtonText:"重试",
        cancelButtonText:"取消",
      }).catch(()=>{
      });
      //点击重试 再重新请求一次  取消就消失弹框
    });
    
    //处理验证成功的信息
    
  })
}

