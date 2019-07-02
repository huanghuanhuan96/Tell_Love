<template>
  <div>
    <my-header></my-header>
    <div class="container mb-5">
        <div class="row pr-3 add_border">
          <div id="preview" class="col pr-0">
            <div class="card bg-transparent mr-5 ">
              <div class="card-body p-0 text-center">
                <img id="m-img" class="card-img-top" src="imgs/details/1_one_lg.jpg" alt="Card image cap">           
              <div id="div-lg" class="position-absolute d-none"></div>        
                <img id="btn-left" src="imgs/details/btn_left.png" class="btn float-left btn-light border-0 p-1 pt-4 pb-4 disabled">
                <div class="d-inline-block pt-2 mx-0 m-auto">            
                  <ul id="ulImgs" class="list-unstyled mb-0">
                    <li class="float-left p-1">
                       <img src="imgs/details/3_three_sm.jpg" width='20%' data-lg="img/details/3_three_lg.jpg">
                      <img src="imgs/details/1_one_sm.jpg" width='20%' data-lg="img/details/1_one_lg.jpg">
                      <img src="imgs/details/2_two_sm.jpg" width='20%' data-lg="img/details/2_two_lg.jpg">
                     
                    </li>
                  </ul>
                </div>
                <img  id="btn-right" src="imgs/details/btn_right.png" class="btn float-right btn-light border-0 p-1 pt-4 pb-4">
              </div>
            </div>
          </div>
            <div id="details" class="col pl-0">
            <h5 id="p-title">
              「定制」个性小定制
            </h5>
             
            <div class="alert alert-secondary small" role="alert">
              <div class='pink_title'>
                <span>价格：</span>
                <h2 id="p-price" class="d-inline text-primary font-weight-bold">
                  <span style='color:#df5986'>¥5000.00<small>起</small></span>
                  <img src="imgs/details/youhuijia.png" alt="">
                </h2>
              </div>
              <div class='small_color mt-3'>
                 <p>已售:&nbsp;&nbsp;&nbsp;479</p>
                 <p>适合场景：&nbsp;电影院、咖啡厅、KTV、酒店、餐厅、草坪、广场、沙滩、机场</p>
                 <p>开通地区：全国各地区、日韩、东南亚、欧美</p>
              </div>
            </div>
           
            <!-- 规格 -->
            <div>
              <div class="float-left ">版本选择:</div>
              <div class="float-left w-75">
                <!--将规格包在一个大的div中-->
                <div id="p-specs">
                  <el-row>
                    <el-button type="danger" plain class="btn btn-sm   active">基础档</el-button>
                    <el-button type="danger" plain class="btn btn-sm  ">性价比档</el-button>
                    <el-button type="danger" plain class="btn btn-sm  ">豪华档</el-button>
                  </el-row>
                </div> 
                 <!-- 粉色的 立即预定，在线咨询 -->
                 <el-row class='mt-5'>
                  <el-button type="danger" class='mr-5'>立即预定</el-button>
                  <el-button type="danger" >在线咨询</el-button>
                </el-row> 
                <!-- 分享到。。。  -->
                <div class='row share_imgs mt-5 ml-0'>
                  <div class='col-3'>
                    <span>分享到：</span>
                  </div>
                  <div class='col-1'>
                     <a href="javasript:;" @mouseenter="mouse_enter()" @mouseleave="mouse_leave()" >
                       <img  src="imgs/details/add.png" alt="">
                     </a>
                  </div>
                  <div class='col-1'>
                    <a href="javasript:;" title='分享到新浪微博'>
                      <img   src="imgs/details/weibo.png" alt="">
                    </a>
                  </div>
                  <div class='col-1'>
                     <a href="javasript:;" title='分享到微信'>
                      <img src="imgs/details/weixin.png" alt="">
                     </a> 
                  </div>
                  <div class='col-1'>
                    <a href="javasript:;" title='分享到QQ空间'>
                      <img src="imgs/details/qq_space.png" alt="">
                    </a>
                  </div>
                  <div class='col-2'>
                      <a href="">[收藏]</a>
                  </div>
                   
                </div>
                   <!-- 悬停时隐藏的链接 -->
                     <div v-show="seen" @mouseenter="mouse_enter()" @mouseleave="mouse_leave()" class='Disable'>
                          <el-table 
                            :data="tableData"
                            style="width: 100%"
                            :row-class-name="tableRowClassName">                    
                            <el-table-column
                              prop="name"                  
                              width="180">
                            </el-table-column>
                            <el-table-column
                              prop="address" >                          
                            </el-table-column>
                          </el-table>                 
                    </div>
                </div>           
              </div>            
            </div>
          </div>
          <!-- 中间部分 -->
           <div class='row'>
             <!--左侧详情介绍-->
              <div class='col-10'>
                <!--页头部分-->
                 <div>
                     <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                      <el-tab-pane label="套餐介绍" name="first" class='font-size:20px'>
                        <img class='mt-2 mb-2' src="imgs/details/2_detail_erweima.jpg" alt="">
                         <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mb-4 mt-4'>主题诠释</button>   
                        <p style='font-size:18px'>根据需求在套餐基础上进行个性化调整改进。</p>
                         <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mb-4'>套餐详情</button>   
                        <img src="imgs/details/1_detail_big.jpg"  alt="">
                         
                         <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mt-4 mb-4'>人员服务</button> 
                         <img src="imgs/details/duiwu.png" alt="">
                         <!--优势对比-->
                         <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mt-4 mb-4'>优势对比</button> 
                         <img src="imgs/details/yousi.png" alt="">
                          <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mt-4 mb-4'>服务流程</button> 
                         <img src="imgs/details/web-service-steps.png" alt="">
                           <button style='background:#df5986;border-radius:50px;color:#fff;width:300px;height:45px;' class='mt-4 mb-4'>疑问解答</button> 
                           <img src="imgs/details/web-servivce-steps.png" alt="">
                           <!--手风琴-->
                           <div class="panel-group" id="accordion1">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="#collapse5" data-toggle="collapse">测化一场浪漫需要多少钱？</a>
                                </h4>
                            </div>
                            <div id="collapse5" class="panel-collapse collapse" > 
                                <div class="panel-body">浪漫价格是由不同的浪漫形式，不同的创意惊喜流程，以及在流程中涉及到的相关服务人员多少等等因素来综合决定的。 浪漫服务档次一般的七八千元，好一点的1-3万元，还有一种高端专属定制。所以，我们一般是您告诉我们消费档次大概在哪个范围？然后，我们策划师围绕您的预算和浪漫档案来进行策划和推荐相关的服务项目，您再根据自己的情况增加和删减相关项目，最终是由您来决定浪漫价格。</div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="#collapse6" data-toggle="collapse">
                    浪漫的价格是看现场物料布置本身吗？</a>
                                </h4>
                            </div>
                            <div id="collapse6" class="panel-collapse collapse" > 
                                <div class="panel-body">一场完美的浪漫浪漫是否能够达到效果，除了现场物料布置本身以外，最关键在于流程的设计和统筹、现场浪漫氛围的营造！浪漫费用从大体上来说，分成四个部分：
                              第一，浪漫现场布置费用；
                              第二，浪漫综合策划费用；
                              第三，浪漫工作人员费用；
                              第四，浪漫统筹服务费用；
                              综上所述，因为浪漫策划服务是一种无形的商品，没法提前知道商品的效果。因此，选择一家专业而富有浪漫经验的品质浪漫公司，协助您完成一生只有一次的浪漫惊喜浪漫盛典！留下一段难忘的回忆！就显得非常有必要。现场效果好，因为规范，价格也会相对合理。并且，浪漫过程也不会产生任何隐形的“消费陷阱”。</div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="#collapse7" data-toggle="collapse">有没有浪漫套餐之类的可以供我选择？</a>
                                </h4>
                            </div>
                            <div id="collapse7" class="panel-collapse collapse" >
                                <div class="panel-body">
                                  您好，我们有三种策划形式：
                                  1.浪漫套餐：选择我司精心挑选和搭配的浪漫套餐，直接购买。
                                  2.专属定制方案：按照客户朋友预算来私人定制个性化浪漫方案，专属策划方案并报价。
                                  3.特殊形式的浪漫策划：客户朋友提出比较新奇的浪漫想法，比如大楼灯光造型浪漫、国家电台浪漫、古城堡浪漫等。这个需要具体核算公关活动费用后报价。
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a href="#collapse8" data-toggle="collapse">我怎么样知道我浪漫的效果？</a>
                                </h4>
                            </div>
                            <div id="collapse8" class="panel-collapse collapse" >
                              <div class="panel-body">效果分成三个部分：布置效果、氛围效果和男女主角的心理感受效果。
                            一场完美的浪漫浪漫是否能够达到效果，除了现场物料布置本身以外，最关键在于流程的设计和统筹、现场浪漫氛围的营造！
                            浪漫音乐的选择、浪漫道具的使用、亲友团的配合、外界不相关的人打扰，以及浪漫服务人员的现场专业统筹水平都会影响一场浪漫的效果和质量！
                            因此，必须选择一家专业而富有浪漫经验的品质浪漫公司，协助您完成一生只有一次的浪漫惊喜浪漫盛典！
                            </div>
                            </div>
                        </div>
                    </div>
                
                      </el-tab-pane>
                      <el-tab-pane label="人员and服务" name="second"> 
                       
                      </el-tab-pane>
                      <el-tab-pane label="疑问解答" name="third"> </el-tab-pane>
                      <el-tab-pane label="客户评价" name="fourth"> </el-tab-pane>
                    </el-tabs>
                     <!-- post请求 模板
                        let param = new URLSearchParams()
param.append('username', 'admin')
param.append('pwd', 'admin')
axios({
    method: 'post',
    url: '/api/lockServer/search',
    data: param
})

                     -->          
                 </div>    
              </div>
              <!--相关案例-->
              <div class='col-2' style='position:relative;' >
                <h2 style='width:100%;color:#e5759c;height:58px;font-size:16px;line-height:58px;border:1px solid #f4f4f4;background-color:#f4f4f4'>相关案例</h2>
                <div class='father_pic mb-3' v-for="(item,index) of right_pics" :key='index'>         
                     <div>
                       <img style='width:230px' src="imgs/details/detail_right_one.jpg" alt="">
                     </div> 
                     <div class='black_touming'>
                      <p>
                        茜粉凝桃——倾心佳人——重庆武隆浪漫求婚
                      </p> 
                     </div>
                   
                </div>

                 <!--相关文章-->
                 <h2 style='width:100%;color:#e5759c;height:58px;font-size:16px;line-height:58px;border:1px solid #f4f4f4;background-color:#f4f4f4'>相关文章</h2>

                 <ul class='d-block right_li'>
                   <li>求婚方式推荐，求婚方式有哪些?</li>
                   <li>生日聚会，气球布置派对</li>
                   <li>求婚气球布置教程，如何打造气球造型</li>
                   <li>求婚场景布置，自己如何布置</li>
                   <li>订婚酒店布置，订婚酒店布置注意事项</li>
                   <li>订婚宴现场布置，怎么布置有创意?</li>
                 </ul>
              </div>
             

           </div>
        </div>    
     <my-footer></my-footer>       
  </div>
</template>
<script>
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"

export default {
  pics:[],
  data(){
    return {
      right_pics:[1,1,1,1],
      seenTimer:null,
      seen:false,
      disabled_link:false,
       activeName: 'first',
        tableData: [{
          address: '一键分享',
        }, {
         
          address: 'QQ空间'
        }, {
          
          address: '新浪微博',
        }, {
          address: '百度云收藏',
        },
        {address: '微信 ',
        },
        {address: '人人网',},
        ]
    }
  },
  mounted(){
    var url='http://127.0.0.1:3000/details';
   this.axios.get(url).then(
       (result)=>{
         console.log(result);
       }
    ).catch(
      (err)=>{
        console.log(err)
      }
    );
  },
  methods:{
    //导航栏的事件
       handleClick(tab, event) {
        console.log(tab, event);
      },
     tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      //鼠标移入到 +  显示下面的table,且悬停在table上时，该table不消失
      mouse_enter(){
        //console.log("mouse_enter");
         clearTimeout(this.seenTimer);
         this.seen = true;
      },
      mouse_leave(){
        //console.log("mouse_leave");
        this.seenTimer = setTimeout(()=>{
          this.seen = false;
        },300)
     }
  }
}
</script>
<style scoped>
.right_li li{
 list-style-type: none!important;
 color:#999;
 font-size:10px;
 margin-top:2px;
}
.father_pic{
  position:relative;
}
.black_touming{
  width:230px;
  height:50px;
  background-color:rgba(102,102,102,0.6);
  position:absolute;
  top:80px;
  text-align: center;
}
.black_touming p{
  color:#fff;
  line-height: 50px;
}
.add_border{
 width:75rem;
 padding:1rem;
 border:1px solid #e9e9e9;
}
#btn-left,.btn-right{
  float:left;
}
.p-title{
  color:#333333;
  font:18px '微软雅黑';
  margin-left:1rem;
}
 /*右侧边框背景颜色*/
 .alert-secondary{
   background-color:#f2f2f2;
   border:0;
 }
 .small_color p{
    font-size: 14px;
    color: #767676;
    text-align: start;
 }
 .pink_title{
   text-align: start;
 }
 .share_imgs div img{
   width:30px;
   height:30px;
   border:1px solid #767676;
 }
 
 .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .Disable{
    position:absolute;
     
  }
 /*定制规格参数按钮的颜色*/
#details>div:nth-child(5)>div .btn-outline-secondary:hover{
  color:#0069d9;
  background-color:#f5f5f5;
  border-color:#e4393c;
}
#details>div:nth-child(5)>div .btn-outline-secondary.active{
  color:#6c757d;
  background-color:#f5f5f5;
  border-color:#e4393c;
  border-width:2px;
}
/*定制数量按钮的颜色*/
#details>div:nth-child(6) .btn-outline-secondary{
  width:30px;
}
#details>div:nth-child(6) .btn-outline-secondary:hover,
#details>div:nth-child(6) .btn-outline-secondary:active,
#details>div:nth-child(6) .btn-outline-secondary:focus{
  color:#6c757d;
  background-color:#f5f5f5;
  border-color:#0069d9;
  box-shadow: none;
}
/*定制立即购买按钮背景色*/
#details>div:nth-child(7)>a:first-child{
  background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
}

 
/*定制为你推荐部分的样式*/
#recommend{
  width:915px;
  border-color: 1px solid rgba(0, 0, 0, 0.125);
  overflow:hidden;
}
#recommend>ul>li{
  width:220px;
}
/*订制商品详情部分的样式*/
#main>nav.navbar{
  background:linear-gradient(to bottom,#f0f0f0,#e0e0e0);
  box-shadow:0px 3px 6px #ccc
}
#main>nav.navbar .active{
  margin-top:2px;
  border-bottom:3px solid #0069d9;
}
#params .col-md-2>.btn{
  background: linear-gradient(to bottom,#f0f0f0,#e0e0e0);
  box-shadow:0px 3px 4px #ccc
}
#params .col-md-10>div>ul>li{
  width: 237px;
}

</style>
