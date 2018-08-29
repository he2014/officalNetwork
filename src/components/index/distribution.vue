<template>
  <div class="distribution-box">
     <div class="line"></div>
     <div class="content">
       <div class="title">Kids ‘R’ Kids China</div>
       <div class="left-box">
          <div class="con">
            <i class="icon schools"></i>
            <div>11</div>
            <p>Operating Schools</p>
          </div>
          <div class="con">
            <i class="icon provinces"></i>
            <div>9</div>
            <p>Provinces</p>
          </div>
      </div>  
      <!-- 中间部分 -->
      <div class="center-box">
        <div id="mapContainer" ref="map"></div>
      </div>
      <!-- 右侧 -->
      <div class="right-box">
         <ul class="distribution-ul">
           <li class="provinces" v-for="(item,index) in provinces" :key="index" :class="{'active':item.isShow}" @click.stop="showSchools(item,index)">
            <span class="name">{{item.name}}</span> 
            <ul class="schools-box">
               <li v-for="(school,k) in item.schools" :key="k">
                <div class="left">
                  <p>{{school.name}}</p>
                  <p>{{school.phone}}</p>
                </div>
                <img class="right" src="../../assets/image/home_qrcode_weixin.png" alt="">
               </li> 
            </ul>
           </li>
         </ul>
      </div>
     </div>
  </div>
</template>

<script>
  import 'echarts/map/js/china.js';
export default {
  name: '',
        data () {
          return {  
            provinces:[],
            myChart:{},
            select_index:''
          }
        },
        watch:{
          select_index:{
            handler(val,old){
              this.myChart.dispatchAction({
                type: 'downplay'
              })
             this.myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 0,
                dataIndex: val
             });
            }
          }
        },
        mounted() {
           this.$nextTick(() => {
              this.getSchools();
              this.globalClick(this.schoolsBoxRemove);
           })
        
        },
        methods: {
          schoolsBoxRemove () {  //点击其他地方彈框消失
            this.provinces.forEach((item)=>{
              this.$set(item,'isShow',false);
            })
            this.select_index = '';
          },
          getSchools(){
            let param={};
            this.$post('getMap', param).then((res) => {
              res.data.forEach((item)=>{
                this.provinces.push({
                  name: item.name,
                  value: item.value,
                  schools: item.schools,
                  isShow: false
                })
              })
              this.drawChinaMap();
            }).catch((err) => {
              console.log(err)
            })
          },
          drawChinaMap() {
            let that_ = this;
            that_.myChart = this.$echarts.init(document.getElementById('mapContainer'));
            var option = {
              tooltip : {
                  trigger: 'item',
                  show: false
              },
              dataRange: {
                  show: false,
                  min: 0,
                  max: 2,
                  x: 'left',
                  y: 'bottom',
                  text:['高','低'],           
                  calculable : true,
                  inRange: {
                    color: ['#f6f1e1','#debd77', '#c49938']
                  }     
              },
              series : [
                  {
                      name: 'schools',
                      type: 'map',
                      mapType: 'china',
                      zoom:1.2,
                      roam: false,
                      itemStyle:{
                        normal:{
                            areaColor:'#f8f3e3',   
                            borderColor:'#debd77',
                            borderWidth:'1',
                        },
                          // emphasis:{
                          //   areaColor:'#ffdce0',   
                          // borderColor:'#f72452',
                          // borderWidth:'1'
                          // },
                        },
                      data: that_.provinces
                  }
              ]
            }
             that_.myChart.setOption(option);
             that_.myChart.on('click', function (params) {//点击事件
               params.event.event.stopPropagation();
              let provinces_name =params.name;
              let select_ ;
               that_.provinces.forEach((item)=>{
                 if(item.name==provinces_name){
                   select_ = item;
                 }
                 that_.$set(item,'isShow',false);
               })
               if(select_!==undefined){
                 that_.$set(select_,'isShow',true);
                 that_.select_index = params.dataIndex;
                 var dataLen = option.series[0].data.length;
        //          for(var i=0;i<dataLen;i++){
        //          if(i!= params.dataIndex){
        //           that_.myChart.dispatchAction({
        //                 type: 'downplay',
        //                 seriesIndex: 0,
        //                 dataIndex: i
        //             })
        //           }else{
        //               that_.myChart.dispatchAction({
        //               type: 'highlight',
        //               seriesIndex: 0,
        //               dataIndex: params.dataIndex
        //             })  
        //             }
        //          }
               }
            })
          },
          showSchools(obj,index){
            let _this = this;
            let status = !obj.isShow;
           this.provinces.forEach((item)=>{
            _this.$set(item,'isShow',false);
           })
           this.$set(obj,'isShow',status);
            if(status){
               this.select_index = index;
            }else{
               this.select_index = '';
            }
          }
        },
        
} 

</script>
<style rel="stylesheet/scss" lang="scss">
 .distribution-box{
    width: 100%;
    background: url('../../assets/image/home_bg2.png') no-repeat;
    background-size:cover; 
    height: 680px;
   .line{
      width: 100%;
      height: 6px;
      background:#BA9A40;
   }
   .content{
     overflow: hidden;
   }
   .title{
     width: 588px;
     height: 80px;
     line-height: 80px;
     font-size:60px;
     font-family:TimesNewRomanPS-ItalicMT;
     color:rgba(255,255,255,1);
     margin:0 auto;
     background:#BA9A40;
     text-align: center;
     font-style: initial;
     border-bottom-left-radius: 6px;
     border-bottom-right-radius: 6px;
   }
   .left-box{
     width: 300px;
     float:left;
     margin-top: 100px;
     .con{
       position: relative;
       width: 100%;
       padding-left:130px;
       box-sizing: border-box;
       margin-left:30px;
       height: 130px;
       margin-bottom: 100px;
       i.icon{
         display: block;
         position: absolute;
         top:0;
         left:0;
         width:104px;
         height: 104px;
       }
       i.icon.schools{
          background: url(../../assets/image/icon.png) no-repeat;
          background-position: -398px -8px;
       }
       i.icon.provinces{
          background: url(../../assets/image/icon.png) no-repeat;
          background-position: -528px -8px;
       }
       div{
         position: relative;
         font-size:48px;
        font-family:TimesNewRomanPS-BoldMT;
        color:rgba(186,154,64,1);
        padding-top: 10px;
        margin-bottom:15px;
       }
       div::after{
         content:'';
         position: absolute;
         bottom:-10px;
         left:2px;
         width:40px;
        height:3px;
        background:rgba(186,154,64,1);

       }
       p{
         font-size:18px;
        font-family:TimesNewRomanPSMT;
        color:rgba(186,154,64,1);
       }
     }
   }
   .center-box{
     width: 580px;
     height: 450px;
     float:left;
     margin-top:40px;
     div{
       width: 100%;
       height: 100%;
     }
   }
   .right-box{
     width: 240px;
     float:right;
     margin-top: 50px;
     margin-right:10px;
     .distribution-ul{
       width: 240px;
       .provinces{
         margin-left:10px;
         float:left;
         position: relative;
         margin-bottom: 10px;
         .name{
            display: block;
            width: 110px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #D6BE7B;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
         }
         .schools-box{
            display: none;
            position: absolute;
            top: 35px;
            left: 0px;
            border-bottom:2px solid #BA9A40;
            z-index:999;
            background: #ffffff;
            li{
              position: relative;
              width: 230px;
              height: 60px;
              padding:0 80px 0 10px;
              box-sizing: border-box;
              border-bottom:1px solid #E1D4AE;
             .left{
               width: 100%;
               p{
                 font-size:14px;
                 font-family:SourceHanSansSC-Normal;
                 color:rgba(186,154,64,1);
                 margin-top:5px;
                 line-height: 20px;
               }
             }
             .right{
               display: block;
               position: absolute;
               width:56px;
               height: 56px;
               right: 10px;
               top: -3px;
             }
            }
         }
       }
       .provinces.active{
         .name{
           background:rgba(186,154,64,1);
         }
        .schools-box{
          display: block;
        }
       }
     }
   }
}
</style>