<template>
  <div class="footer-box">
    <div class="content top">
      <div class="left">
        <img src="../../assets/image/home_foot_logo.png" alt="" class="footer-logo">
        <div class="name">凯斯国际</div>
      </div>
      <div class="center">
        <p>Kids ‘R’ Kids凯斯中国总部</p>
        <p><img src="../../assets/image/home_icon_phone.png"  align="absmiddle" alt=""><span>(010)-56705595</span></p>
        <p><img src="../../assets/image/home_icon_address.png" align="absmiddle" alt=""><span>北京市朝阳区望京SOHO塔1-A座2105室</span></p>
        <p><img src="../../assets/image/home_icon_mail.png"  align="absmiddle" alt=""><span>contact@kidsrkidschina.com</span></p>
      </div>
      <div class="right">
        <div class="pic">
          <img src="../../assets/image/home_qrcode_weixin.png" alt="">
          <p>微信平台</p>
        </div>
        <div class="pic">
          <img src="../../assets/image/home_qrcode_weibo.png" alt="">
          <p>新浪微博</p>
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="content bottom">
      <div class="left">
        <p>© 2012 Kids R Kids China Limited, 由凯斯国际教育咨询（北京）有限公司保留所有权利。</p>
        <p>北京ICP备14028694号-1</p>
      </div>
      <div class="right">
        <span>网站地图</span>
        <span>隐私政策</span>
      </div>
    </div> 
  </div>
</template>

<script>
export default {

}

</script>
<style rel="stylesheet/scss" lang="scss">
.footer-box{
  width: 100%;
  height: 280px;
  overflow: hidden;
  background:rgba(21,43,72,1);
  .top{
    margin-top:50px;
    margin-bottom: 40px;
    overflow: hidden;
    .left{
      width: 235px;
      float:left;
      .footer-logo{
        width:100%;
        height: auto;
      }
      .name{
        font-size: 30px;
        color: #ffffff;
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
      }
    }
    .center{
      width: 350px;
      float:left;
      margin-left: 80px;
      margin-top: 10px;
      p{
        height:20px;
        line-height: 20px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        color:rgba(255,255,255,1);
        margin-bottom:5px; 
        img{
          float:left;
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        span{
          float:left;
        }
      }
    }
    .right{
      float:right;
      .pic{
        width: 100px;
        background: hsl(0, 0%, 100%);
        float:left;
        margin-left:50px;
        img{
          width: 100px;
        }
        p{
           width: 100%;
           height: 20px;
           line-height: 20px;
           font-size: 12px;
           text-align: center;
           border-top: 1px dashed #333;
        }
      }
    }
    
  }
  .line{
    width: 100%;
    height:1px;
    background:rgba(8,26,50,1);
  }
  .bottom{
   overflow: hidden;
   margin-top:5px;
   .left{
     float: left;
     p{
       height: 20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      color:rgba(122,145,176,1);
      line-height:24px;
      margin-top:5px;
     }
   }
   .right{
     float: right;
     span{
       display: inline-block;
      height: 20px;
      font-size:14px;
      font-family:PingFangSC-Regular;
      color:rgba(122,145,176,1);
      line-height:24px;
      margin-top:10px;
      margin-left: 30px;
     }
   }
  }
}
</style>