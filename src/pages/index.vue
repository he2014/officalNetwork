<template>
  <div class="page-index">
    <!--头部-->
    <HeaderIndex  v-show="isFixed==false"></HeaderIndex>
    <!--悬浮头部-->
    <Header v-show="isFixed"></Header>
    <!--轮播图-->
    <Banner :width = "bodyWidth"></Banner>
    <!--颈部-->
    <div class="neck-box">
      <ul class="neck-ul content">
        <li>
          <i class="iconfont icon-signUp"></i>
          <div class="title"><p>signUp</p><p>家长预约</p></div>
        </li>
        <li>
          <i class="iconfont icon-news"></i>
          <div class="title"><p>News</p><p>新闻动态</p></div>
        </li>
        <li>
          <div>The Frist Step to Higher Education</div>
        </li> 
      </ul>
    </div>
    <!--img-->
    <img src="../assets/image/home_banner2.png" alt="" class="banner2">
   <!--新闻模块-->
   <div class="news-box">
    <div class="content">
       <div class="title"><span>What's News</span> at Kids ‘R’ Kids?</div>
       <div class="smallTitle"><span>learn more</span></div>
       <news :news="newsData"></news>
    </div>
   </div>
   <!--choice-->
   <choice></choice>
   <!--分布-->
   <distribution></distribution>
   <!--底部模块 -->
   <Footer></Footer>
  </div>
</template>

<script>
import HeaderIndex from '@/components/header/HeaderIndex' //头部
import Header from '@/components/header/Header' //悬浮头部
import Banner from '@/components/index/Banner' //轮播图
import news from '@/components/news/news' //新闻
import choice from '@/components/index/choice' //选择模块
import distribution from '@/components/index/distribution' //分布模块
import Footer from '@/components/footer/footer'//底部模块
export default {
  name:'index',
  data(){
    return{
      isFixed:false,
      bodyWidth: 1920,
      newsData:[], 
    }
  },
  mounted () {//给window添加一个滚动滚动监听事件
    this.$nextTick(() => {
      this.bodyWidth = document.body.offsetWidth;
      if(this.bodyWidth<=1200){
        this.bodyWidth=1200;
      }
      window.addEventListener('scroll', this.handleScroll);
      this.getNews();
    })
  },
  methods: {
    getNews(){  //获取新闻
      let param={};
      this.$post('getNews', param).then((res) => {
        this.newsData = res.data.list;
      }).catch((err) => {
        console.log(err)
      })
    },
    callResize: function(){
     this.bodyWidth = document.body.offsetWidth;
    },
    handleScroll () { //改变元素#searchBar的top值
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop<=50){
        this.isFixed = false;
      }else{
        this.isFixed = true;
      }
    },
  },
  destroyed () {//离开该页面需要移除这个监听的事件
    window.removeEventListener('scroll', this.handleScroll)
  },
   components: {
    HeaderIndex,
    Header,
    Banner,
    news,
    choice,
    distribution,
    Footer

  },
}

</script>
<style rel="stylesheet/scss" lang="scss">
 @import "@/assets/css/variables.scss";
.page-index{
  .smallTitle{
      width: 100%;
      text-align: center; 
      margin:20px auto;
      span{
        display: inline-block;
         height: 30px;
         line-height: 30px;
         text-align: center;
         padding: 0 20px;
        background:rgba(186,154,64,1);
        font-size:24px;
        font-family:TimesNewRomanPS-BoldItalicMT;
        color:rgba(255,255,255,1);
        cursor: pointer;
      }
    }
  .neck-box{
    width: 100%;
    height: 120px;
    background:rgba(0,52,120,1);
    opacity:0.85;
    margin-top: -120px;
    .neck-ul{
      height: 100%;
      li{
        position: relative;
        width:400px;
        height: 100%;
        float:left;
        cursor: pointer;
        i.iconfont{
          display: block;
          width: 80px;
          height: 80px;
          margin-left:96px;
          margin-top: 20px;
          float:left;
        }
        i.iconfont.icon-signUp{
          background: url(../assets/image/icon.png) no-repeat;
          background-position: -110px -10px;
        }
         i.iconfont.icon-news{
          background: url(../assets/image/icon.png) no-repeat;
          background-position: -10px -10px;
        }
        div.title{
          float:left;
          margin-top: 20px;
          margin-left:35px;
          p{
            width: 100%;
            font-size: 18px;
            color: #ffffff;
            margin-top: 10px;
          }
           p:first-child{
             font-size: 22px;
           }
        }
      }
      li:hover{
        background:rgba(0,40,93,1);
      }
      li::before{
        content: '';
        width:1px;
        height: 120px;
        position: absolute;
        left:0;
        top:0;
        bottom:0;
        background:rgba(21,78,152,1);
      }
      li:last-child{
        cursor: default;
        div{
          position: relative;
          font-size:16px;
          color: #ffffff;
          text-align: center;
          line-height: 120px;
          font-style: italic;
        }
        div::after{
          position: absolute;
          content: '';
          width:40px;
          height: 1px;
          background: #ffffff;
          left:50%;
          bottom:35px;
          margin-left:-20px;
        }
      }
      li:last-child:hover{
        background:none;
      }
      li:last-child::after{
        content: '';
        width:1px;
        height: 120px;
        position: absolute;
        right:0;
        top:0;
        bottom:0;
        background:rgba(21,78,152,1);
      }
    }
  }
  .banner2{
    display: block;
    width: 100%;
    height: auto;
  }
  .news-box{
    width: 100%;
    overflow: hidden;
    .title{
      width: 100%;
      text-align: center;
      font-size: 40px;
      color: $color-primary;
      font-family:TimesNewRomanPS-BoldItalicMT;
      font-style: italic;
      font-weight: lighter;
      margin-top:100px;
      span{
        font-size: 42px;
        font-weight: bold;
        color: $color-primary;
        font-style: italic;
      }
    }
    .news-ul{
      float: left;
      margin-bottom: 100px;
    }
  }

}

</style>