<template>
<ul class="news-ul">
    <li class="news-item" v-for="(item,index) in newsData" :key="index">
     <div class="top">
       <img :src="item.img" alt="">
       </div>
     <div class="news-title">{{item.title}}</div>
     <div class="time"><span>{{item.time}}</span><span>{{item.garden}}</span></div>
     <div class="rows" v-html="item.content"></div>
   </li>
</ul>
 
</template>

<script>
export default {
  props:{
    news:{
      type: Array
    }
  },
  data(){
    return {

    }
  },
  computed:{
    newsData(){
      console.log(this.news)
      return this.news;
    }
  }


}

</script>
<style rel="stylesheet/scss" lang="scss">
@import "@/assets/css/variables.scss";
.news-ul{
  width: 1230px;
  margin-left:-30px;
  overflow: hideen;
  li.news-item{
    width:380px;
    float:left;
    margin-left: 30px;
    .top{
      border-bottom:6px solid $color-primary;
      img{
        display: block;
        width: 100%;
        height: 240px;
      }
    }
    .news-title{
        font-size:18px;
        color: $color-primary;
        line-height:25px;
        margin-top:10px;
      }
      .time{
       margin-top: 10px;
       margin-bottom:5px;
       span{
         font-family:SourceHanSansSC-Normal;
         color:rgba(174,149,79,1); 
         margin-right: 10px;
       }
      }
      .rows{
        font-size: 14px;
        color:#666666;
        line-height:24px;
      }
  }
}
</style>