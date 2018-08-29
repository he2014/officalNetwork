<template>
	<div class="banner" @mouseover="isButtonShow=true" @mouseout="isButtonShow=false">
		<div class="topic-preview-wrapper">
			<div class="topic-preview-list-wrapper">
				<ul class="topic-preview"  :style="{width: offsetWidth*bannerlist.length+'px'}" ref="banner"> 
          	<li class="banner-item" v-for="(item,index) in bannerlist" :key="index" :style="{width: offsetWidth+'px'}" @mouseover="overStyle(item) "   :class="{'active':item.active}" @mouseout="outStyle(item)">
              <div class="b-link" target="_blank">
                <img :src="item.pic">
              </div>
              <span class="describe" >{{item.describe}}</span>
            </li>
				</ul>
			</div>
      <!--左右按钮-->
      <div class="button-box" v-show='isButtonShow'>
        <span class="last" @click.stop="lastEvent"></span>
        <span class="next" @click.stop="nextEvent"></span>    
      </div>
      <!-- 底部圆圈按钮 -->
			<div class="s-bottom">
				<ul class="slide-bar">
					<li :class="{on: count == index}" v-for="(item, index) in bannerlist" :key="index" @click="cutItem(index)"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props:{
    width:{
      type:Number
    }
  },
  computed:{
   offsetWidth: function(){
     return this.width;
   }
  },
	data() {
		return {
			count: 0,
			show: false,
      interval: Function,
      bannerlist:[
      {"pic":"http://pic.616pic.com/bg_w1180/00/24/63/HCcvOIID0m.jpg!/fh/300","describe":"图片一"},
      {"pic":"http://pic.616pic.com/bg_w1180/00/24/63/jTicyriLfG.jpg!/fh/300","describe":"图片二"},
      {"pic":"http://pic.616pic.com/bg_w1180/00/03/32/ZMmnErVcVd.jpg!/fh/300","describe":"图片一"}
      ],
      isButtonShow: false
		}
	},
	mounted() {
		this.startInterval();
  },
  watch:{
    isButtonShow:{
      handler(val,old){
       if(val==true){
         clearInterval(this.interval)
       }else{
         this.startInterval()
       }
      }
    }
  },
	methods: {
		cutItem(index) {  //底部按钮点击事件
			this.count = index
			let distance = -100 * this.count
			let left = distance + "%"
			this.$refs.banner.style.marginLeft = left
		},
		startInterval() { 	//轮播图定时滚动
			this.interval = setInterval(() => {
				this.count ++ 
				if (this.count === this.bannerlist.length) {
					this.count = 0
				}
				let distance = -100 * this.count
				let left = distance + "%"
				if (this.$refs.banner) {
					this.$refs.banner.style.marginLeft = left
				}
			}, 5000)
    },
     overStyle (item) {
      var _this=this;
      this.$nextTick(function () {
        this.bannerlist.forEach(function (item) {
          _this.$set(item,'active',false);
        });
        this.$set(item,'active',true);
        clearInterval(this.interval);
      });
      },
      outStyle (item) {
        this.$set(item,'active',false);
      },
      lastEvent(){
        clearInterval(this.interval);
				if (this.count === 0) {
          this.count = this.bannerlist.length-1
        }else{
          this.count --;
        }
        let distance = -100 * this.count
				let left = distance + "%"
				if (this.$refs.banner) {
					this.$refs.banner.style.marginLeft = left
				}
      },
      nextEvent(){
         clearInterval(this.interval);
				if (this.count === this.bannerlist.length-1) {
					this.count = 0
				}else{
          this.count ++
        }
				let distance = -100 * this.count
				let left = distance + "%"
				if (this.$refs.banner) {
					this.$refs.banner.style.marginLeft = left
        }
        
      }
	},
}
</script>

<style rel="stylesheet/scss" lang="scss">
	.banner{
    width:100%;
    height:600px;
    .topic-preview-wrapper{
      position: relative;
      width: 100%;
			height: 100%;
      a{
        color: #fff;
      }
      .topic-preview-list-wrapper{
        height: 100%;
        overflow: hidden;
        border-radius: 4px;
        .topic-preview{
					height: 100%;
          transition: .2s;
          li.banner-item{
            position: relative;
            width: 440px;
            height: 100%;
            float: left;
            div.b-link{
               display: inline-block;
               width: 100%;
               height: 100%;
               img{
                 display: block;
                 width: 100%;
                 height: 100%;
                 cursor: pointer;
               }
            }
            .describe{
              display:none;
              position: absolute;
              font-size: 16px;
              font-size: #333;
              top:50%;
              left:50%;
            }

          }
           li.banner-item.active{
             .describe{
               display:block;
             }
           }
        }
      }
       
      .button-box{
        position: absolute;
        top:50%;
        margin-top:-30px;
        left:0px;
        width: 100%;
        height: 60px;
        z-index: 999;
        span{
          display:block;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          line-height: 60px;
          opacity:0.5;
          color:#fff;
          font-size:17px;
          text-align:center;
          cursor: pointer;
        }
        span.last{
          float:left;
          margin-left: 80px;
          background: url(../../assets/image/icon.png) no-repeat;
          background-position: -220px -20px;
        }
        span.next{
          float:right;
          margin-right: 80px;
          background: url(../../assets/image/icon.png) no-repeat;
          background-position: -320px -20px;
        }
      }
      .s-bottom{
          position: absolute;
          bottom: 150px;
          left: 0;
          width:100%;
          height: 35px;
          border-radius: 0 0 4px 4px;
          .slide-bar{
            position: absolute;
            z-index: 3;
            bottom: 6px;
            right: 50%;
            li{
              float:left;
              width:10px;
              height:10px;
              border: 2px solid #ffffff;
              border-radius: 50%;
              margin-left:5px;
              background:rgba(255,255,255,1);
              cursor: pointer;
            }
            li.on{
              background:rgba(0,52,120,1);
              opacity:0.85;
            }
          }
					
        }
    }
			
  }
</style>