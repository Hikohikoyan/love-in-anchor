document.body.addEventListener('transitionend', () => {
    var right=document.getElementById('r_sticik');
    var currX_l=280;
    console.log(currX_l);
  console.log('Transition ended');
});
// document.body.addEventListener('transitionstart', () => {
//   console.log('2',this);
//   var left=document.getElementById('l_sticik');
//   var leftinterval=setInterval(() => {
//     left.style.left="100px";
// }, 200);
window.onload=function(){
    var left=document.getElementById('l_sticik');
    console.log(left);
  }
// addEvent(window, "load", function() {
//     //执行HTML DOM操作
//   var left=document.getElementById('l_sticik');
//   console.log(left);
// });