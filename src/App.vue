<template>
  <div id="app">
   <router-view  ref="child"></router-view> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App',
  mounted () {
    window.addEventListener("resize",()=>{  //全局监听窗口变化
        this.resize();
    });
  },
  methods:{
    resize(){
       try{
          if(typeof(eval(this.$refs.child.callResize))=="function"){
             
              this.$refs.child.callResize();
          }
        }catch(e){
        }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
#app {
  font-family:”Microsoft YaHei”;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}
</style>
