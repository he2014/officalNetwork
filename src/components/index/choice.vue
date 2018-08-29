<template>
    <div class="choice-box">
     <div class="content">
       <div class="title">Smart Choice, Smarter Child</div>
        <div class="smallTitle"><span> The First Step to Higher Education</span></div>
        <ul class="choice-ul">
          <li class="chioce-item">
            <img src="../../assets/image/home_img6.png" alt="">
            <div class="english">CURRICULUM</div>
            <div class="chinese">课程</div>
            <div class="sketch">
              <p>核心课程:Brainwaves;</p>
              <p>STEAM Ahead; HiChina</p>
            </div>
          </li>
          <li class="chioce-item">
            <img src="../../assets/image/home_img5.png" alt="">
            <div class="english">STAFFS</div>
            <div class="chinese">老师</div>
            <div class="sketch">
              <p>专业资质认证;国内外名校毕业;</p>
              <p>凯斯系统培训标准</p>
            </div>
          </li>
          <li class="chioce-item">
            <img src="../../assets/image/home_img4.png" alt="">
            <div class="english">QA</div>
            <div class="chinese">品质管理</div>
            <div class="sketch">
              <p>12个方向, 28个类别,</p>
              <p>300多项标准</p>
            </div>
          </li>
        </ul>
     </div>
   </div>
</template>

<script>
export default {

}

</script>
<style rel="stylesheet/scss" lang="scss">
  .choice-box{
    width: 100%;
    background: url('../../assets/image/home_bg1.png') no-repeat;
    background-size:cover; 
    overflow: hidden;
    .title{
      font-size:42px;
      font-family:TimesNewRomanPS-ItalicMT;
      color:rgba(255,255,255,1);
      text-align: center;
      margin-top: 100px;
    }
    .choice-ul{
      width: 1230px;
      margin-left:-30px;
      margin-top: 30px;
      margin-bottom: 100px;
      float: left;
      overflow: hidden;
      li.chioce-item{
        float:left;
        background:rgba(0,52,120,1);
        overflow: hidden;
        width: 380px;
        margin-left: 30px;
        cursor: pointer;
        img{
          display: block;
          width: 310px;
          height: 185px;
          margin: 30px auto;
        }
        .english{
          position: relative;
          text-align: center;
          font-size: 30px;
          font-family:TimesNewRomanPSMT;
          color:rgba(255,255,255,1);
          margin-bottom: 25px;
        }
        .english::after{
          content: '';
           position: absolute;
          bottom: -10px;
          left: 50%;
          margin-left:-20px;
          width: 40px;
          height: 2px;
          background:rgba(174,149,79,1); 
        }
        .chinese{
          text-align: center;
          font-size:24px;
          font-family:SourceHanSansSC-Normal;
          color:rgba(255,255,255,1);
        }
        .sketch{
          width: 100%;
          margin: 20px 0 30px;
          text-align: center;
          p{
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            color:#ffffff;
            margin-bottom: 5px;
          }
        }
      }
    }
  }
</style>