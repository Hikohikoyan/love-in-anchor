<template>
  <div id="register_container">
      <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer"  v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" :under = upername>不要输些奇怪的名字</span>
      </div>
    <div class="cinbox2">
      <span class="beforetext">性&nbsp;别：</span>
      <input type="radio" class="radio" v-model="gender" :value="1"><span class="aftertext">男</span>
      <input type="radio" class="radio" v-model="gender" :value="0"><span class="aftertext">女</span>
      <span class="attentiontext" :under = upername v-if="namer">请选择你的性别</span>
      </div>
            <div class="cinbox">
      <span class="beforetext">年&nbsp;级：</span>
      <input class="inputer"  v-model="name" placeholder="请选择年级">
      <span class="attentiontext" :under = upername v-if="namer">不要输些奇怪的名字</span>
      </div>
            <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer"  v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" :under = upername v-if="namer">不要输些奇怪的名字</span>
      </div>
            <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer"  v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" :under = upername v-if="namer">不要输些奇怪的名字</span>
      </div>
            <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer"  v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" :under = upername v-if="namer">不要输些奇怪的名字</span>
      </div>
            <div class="cinbox">
      <span class="beforetext">姓&nbsp;名：</span>
      <input class="inputer"  v-model="name" placeholder="请输入姓名">
      <span class="attentiontext" :under = upername v-if="namer">不要输些奇怪的名字</span>
      </div>
      <p class="att2">可接受的海选时间段:(多选)<br>
      &nbsp;&nbsp;（注：五山校区只有10号上午，国际校区只有9号上午）</p>
      <div class="timer"><input type="radio" class="radio" v-model="gender" :value="1"><span class="aftertext">男</span></div>
      <div class="timer"><input type="radio" class="radio" v-model="gender" :value="1"><span class="aftertext">男</span></div>
      <div class="timer"><input type="radio" class="radio" v-model="gender" :value="1"><span class="aftertext">男</span></div>

      <span class="attentiontext" :under = upername v-if="namer">请选择你的性别</span>

  </div>
</template>

<script>
export default {
 model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
}
</script>

<style>
.att2{
    width: 80%;
   font-size: 90%;
  font-family: "Adobe Heiti Std";
  color: rgb(78, 77, 77);
  text-transform: uppercase;
}
#register_container{
    height: -webkit-fill-available;
    margin-top: 50px;
    width: 100%;
    margin-left: 10%;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7% 7% 7% 7% 7% 7% 8% 8% 8% 8% 8% 8%;
    grid-gap: 10px;
    }
.cinbox{
        display: inline-grid;
    grid-template-columns: 20% 5% 75%;
    grid-template-rows: 50px;
}
.beforetext{
    font-size: 20px;
  font-family: "Adobe Heiti Std";
  color: rgb(78, 77, 77);
  text-transform: uppercase;
  line-height: 1.2;
  left: 0;
}
.aftertext{
        font-size: 20px;
  font-family: "Adobe Heiti Std";
  color: rgb(78, 77, 77);
  text-transform: uppercase;
  line-height: 1.2;
  left: 0;
}
.inputer{
    margin-top: -5px;
    margin-left: 5px;
    border-width: 2px;
    border-color: rgb(127, 128, 128);
    border-style: dashed;
    border-radius: 9px;
    height: 40px;
    background-color: transparent;
    background-image: -webkit-linear-gradient( 180deg, transparent 0%, rgba(161, 186, 186, 0.2) 100%);
    padding: 2%;
    padding-left: 10px;
    right: 0%;
    width: 200px;
}
.radio{
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
.radio:hover,.radio:active{
 
    background-image: -moz-linear-gradient( 180deg, rgb(194,223,245) 0%, rgb(161,186,186) 100%);
    background-image: -webkit-linear-gradient( 180deg, rgb(194,223,245) 0%, rgb(161,186,186) 100%);
    background-image: -ms-linear-gradient( 180deg, rgb(194,223,245) 0%, rgb(161,186,186) 100%);
    background-size: 10px;
    background-clip: content-box;
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;
    background-position-y: center;
}
.attentiontext{
    color: #c36774;
    font-size: 15px;
    margin-top: 40px;
    margin-left: 60px;
    font-size: 15px;
    white-space: pre-line;
}
</style>