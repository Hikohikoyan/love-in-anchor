<template>
<div class="button" :id="button_name" :isAbled=0 @click="showpages">
    <span class="btnname">{{button_name}}</span>
</div>
</template>
<script>
export default {
  name: 'MyButton',
  props: {
    button_name:'button',
    isAbled:0,
    pageindex: 0,
    msg: ' '
  },
  methods: {
      mounted () {
          axios
          .get('../assets/test.json')
          .then(response => {
              this.errmsg = response;
              msg = String(response);
              if( errcode == 0 ){
                  isAbled = 1;
              }
              })
          .catch(function (error) { 
              isAbled = 1;
              // 请求失败处理
      });
      },
      showpages: function (isAbled,button_name) {
          isAbled=this.isAbled;
          button_name=this.button_name;
        //   pageindex=this.pageindex;
          if( isAbled==1 ){
              setTimeout(() => {
                  isAbled = 0;
              }, 5000);
              return;
          }
          isAbled=1;
              if (button_name == "大赛介绍") {
            //   pageindex = 1;
              alert("func="+'1');
              return;
          }
          if (button_name == "马上报名") {
            //   pageindex = 2;
              alert("func="+'2');
              return;
          }
      },
  },
}
</script>
<style scoped>
</style>