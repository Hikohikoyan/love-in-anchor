import wx from 'weixin-js-sdk';
var timestamp=new Date().getTime();
const url = 'http://182.254.161.213/love-in-anchor/';

// axios.defaults.baseURL = 'http://127.0.0.1:8888/'
// // axios设置请求拦截器,设置响应头token
// axios.interceptors.request.use(
//   config => {
//     config.headers.token = window.sessionStorage.getItem('token') //每次发送请求之前自动将在session中的token提取出来当做响应头header
//     return config
//   },
//   err => {
//     console.log(err)
//   }
// )

export function checkTime(){
  const options = {
      method: 'GET',
      headers: { 
          'content-type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods': 'POST,GET',
          'Content-Type':'application/json',
   },
      url : apiurl+'checkTime',
    };      
    axios(options)
    .then((ret) => {
    console.log(ret.data);
    if( ret.data.errcode == 401 ){
      //att('活动已结束')
    }
  })
}

function checkBBT(){
  var checkurl="https://hemc.100steps.net/2018/fireman/auth.php?redirect=https://hemc.100steps.net/2019/recruit-autumn-game/get_wx&state=divdestui68";
  axios.get(checkurl)
  .then((data,status,responseText)=>{
      if(data.errcode != 0 ) {
          window.location.href="https://hemc.100steps.net/2018/fireman/auth.php?redirect=https://hemc.100steps.net/2019/recruit-autumn-game/get_wx&state=divdestui68";
      };
  });
}
// wx.config({
//   appId: appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
//   timestamp:timestamp, 
//   nonceStr: nonceStr, 
//   signature: signature,
//   jsApiList: [
//     'updateTimelineShareData','updateAppMessageShareData'
//   ]
// });
// wx.error(function (res) {
//   logUtil.printLog('验证失败返回的信息:',res);
// });
// //处理验证成功的信息
// wx.ready(function () {
// //alert(window.location.href.split('#')[0]);
//   wx.updateTimelineShareData({ 
//     title:"爱上N主播|线上报名", // 分享标题
//     link: window.location.href.split('#')[0],
//     imgUrl:"logo", 
//     success: function (res) {
//       // 用户确认分享后执行的回调函数
//       console.log(res);
//     },
//     cancel: function (res) {
//       // 用户取消分享后执行的回调函数
//       console.log(res);
//     }
//   });
//   //分享给朋友
//   wx.updateAppMessageShareData({
//     title: "爱上N主播|线上报名", 
//     desc: "爱上N主播", 
//     link: window.location.href.split('#')[0], 
//     imgUrl: "logo", 
//     type: 'link', 
//     dataUrl: '', 
//     success: function (res) {
//       // 用户确认分享后执行的回调函数
//       console.log(res);
//     },
//     cancel: function (res) {
//       // 用户取消分享后执行的回调函数
//       console.log(res);
//     }
//   })
axios.defaults.baseURL = '微信认证页'
// axios.get('/微信认证页')
//   .then(function (response) {
//     console.log(response);
//     if(response.status!=200){
//       alert(response.data.errmsg);
//     }
//   })
//   .catch(function (error) {
//     if (error.response) {
//       console.log(error.response.data);
//       console.log(error.response.status)}
//     });

// // axios设置请求拦截器,设置响应头token
// axios.interceptors.request.use(
//   config => {
//     config.headers.token = window.sessionStorage.getItem('token') //每次发送请求之前自动将在session中的token提取出来当做响应头header
//     return config
//   },
//   err => {
//     console.log(err)
//   }
// )