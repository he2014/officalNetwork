<template>
  <div class="header-index">
    <div class="logo"><img src="../../assets/image/home_logo.png" alt=""></div>
    <div class="goENG" @click.stop="goENG">ENG</div>
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <li class="menu-item" v-for="(item,index) in navMenu" :key="index">
          <span class="title">{{item.name}}</span>
          <div class="sublevel-box">
             <ul class="sublevel-ul">
                <li class="sublevel_li" v-for="(son,i) in item.sublevel" :key="i">
                  {{son.name}}
                </li>
              </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
   data(){
     return{
       navMenu:[
         {name:"首页",path:'/'},
         {name:"关于凯斯",path:'/',sublevel:[{name:"半个世纪的故事",path:''},{name:"爱在中国",path:''},{name:"凯斯信念",path:''},{name:'国际团队',path:'/'} ]},
         {name:"选择凯斯",path:'/',sublevel:[{name:"核心优势",path:''},{name:"专业课程",path:''},{name:"学霸老师",path:''},{name:'QA体系',path:'/'},{name:'食品健康',path:'/'},{name:'家长说',path:'/'} ]},
         {name:"加入凯斯",path:'/',sublevel:[{name:"给新家长的一封信",path:''},{name:"凯斯大家庭",path:''},{name:"凯斯工作和生活",path:''},{name:'立刻申请',path:'/'} ]},
         {name:"联系我们",path:'/',sublevel:[{name:"半个世纪的故事",path:''},{name:"爱在中国",path:''},{name:"凯斯信念",path:''},{name:'国际团队',path:'/'} ]},
         {name:"家长预约",path:'/',sublevel:[{name:"半个世纪的故事",path:''},{name:"爱在中国",path:''},{name:"凯斯信念",path:''},{name:'国际团队',path:'/'} ]},
       ]
     }
   },
   methods:{
     goENG(){
       window.open("//www.jb51.net");               
     }
   }
}

</script>
<style rel="stylesheet/scss" lang="scss">
 @import "@/assets/css/variables.scss";
.header-index{
  position: fixed;
  top:30px;
  left:50%;
  right:0;
  width: 1200px;
  margin-left:-600px;
  z-index:999;
  .logo{
    width: 290px;
    height: auto;
    float:left;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .goENG{
    position: absolute;
    top:0px;
    right:20px;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;
  }
  .menu-wrapper{
    float:right;
    margin-top:30px;
    ul.nav-menu{
      z-index: 200;
      display: inline-block;
      vertical-align: top;
      height: 40px;
      li.menu-item{
        float: left;
        display: block;
        position: relative;
        .title{
          display: block;
          height:40px;
          line-height: 40px;
          padding:0 25px;
          background-color:$color-primary;
          color: #ffffff;
          font-size: 16px;
          cursor: pointer;
        }
        .sublevel-box{
          display: none;
          position: absolute;
          top: 35px;
          left:0;
          padding-top:5px;
          li.sublevel_li{
            width: 240px;
            height:30px;
            line-height: 30px;
            text-align: center;
            font-size: 14px;
            color: #ffffff;
            background: #000000;
            opacity:0.8;
            cursor: pointer;
          }
          li.sublevel_li:hover{
            background: #00367b;
            opacity:1;
          }
        }
      }
      li.menu-item:hover .sublevel-box{
         display: block;
      }
      li.menu-item:hover .title{
         background: #094CA4;
      }
    }
  }
}
</style>