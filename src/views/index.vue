<template> 

 <div>
      <my-header></my-header>
 <!--视频-->
<div class="index_banner" style="background-image: url('imgs/c1200.png')">
    <div class="index_banner-video" id="index_banner-video">
        <video tabindex="-1" class="animated fadeIn" muted="true" autoplay="true" loop="true">
          <source src="imgs/banner.mp4" type="video/mp4">
        </video>
    </div>
    <div class="container">
        <div class="fixed-tip ">
            <div class="index_banner_big_say">
                惊喜 非必浮夸  浪漫 源于表达
            </div>
            <div class="index_banner_say ">
                能够被感受到的爱,才不算辜负
            </div>
            <div class="index_banner_btn"></div>
            <a target="_blank" rel="nofollow" href="#" class="index_banner_btn_top ">我要求婚</a>
        </div>
    </div>
</div>
<!--右侧固定4张图片-->
 <div class='right_fixed'>
   <img src="imgs/left_fix_one.png"  id='right_Small' alt="">
   <img src="imgs/qq.png"  style="margin-right:1rem;" alt="">
   <img src="imgs/weixin.png" alt="">
   <img src="imgs/phone.png" alt="">

 </div>
<!--服务步骤-->
<div class="d-flex my_width text-center">
    <div class="d-flex flex-column justify-content-around">
        服务步骤
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>1</p>
        <p>初步确定</p>
        <p>浪漫框架</p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>2</p>
        <p>下单预定</p>
        <p>支付定金</p>
    </div>
    <div class="d-flex flex-column justify-content-center ">
        <p>3</p>
        <p><a href="javscript:;" class='pink_words'>填写</a></p>
        <p><a href="javscript:;" class='pink_words'>浪漫档案表</a></p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>4</p>
        <p>拟定详细</p>
        <p>策划方案</p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>5</p>
        <p>确认方案</p>
        <p>付预付款</p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>6</p>
        <p>统筹协调</p>
        <p>准备浪漫</p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>7</p>
        <p>现场彩排</p>
        <p>支付尾款</p>
    </div>
    <div class="d-flex flex-column justify-content-center">
        <p>8</p>
        <p>享受</p>
        <p>浪漫求婚</p>
    </div>
</div>
<div class="container">
    <!--对N对客户服务-->
    <div class="m-5 my_gray" >
        <h2>服务全国及海外的互联网求婚策划平台，已经为<span style="font-size:35px;font-family: MicrosoftYaHei;" class="my_pink"> 3 1 4 4 7 </span>对客户提供服务</h2>
    </div>
    <!--求婚图-->
    <a href="#"><img class="w-100 mb-3" src="imgs/original.jpg" alt=""/></a>
    <!--超值求婚套餐-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">超 值 求 婚 套 餐</p>
            <p class="font-size-mid">— — — — — —EXCELLENT QUALITY AND REASONABLE PRICE— — — — — —</p>
            <p>我 们 只 用 服 务 和 效 果 说 话</p>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-12 my_m-b" v-for='(item,index) of firstList' :key='index'>
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" :src="`imgs/c/${item.img}`" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href="#">{{item.title}}</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥{{item.price}}起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：{{item.saled}}</p>
                            </div>
                            <div class="col-2 p-0">
                                <router-link :to="{path:'/price'}"
                                class="btn btn-sm btn-pink" >预定</router-link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--<div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/2.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「爱情影院」·VIP电影包房惊喜套餐</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥9800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：1502</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/3.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「深海之谜」·心形灯海浪漫策划</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥8800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：2966</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/4.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「浪漫满屋」·浪漫惊喜策划</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥8800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：1760</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/5.jpg" alt=""/>
                        <p class=" border-bottom p-3">
                            <a class="text-dark" href=" javascript:;">「缤纷世界」KTV浪漫惊喜策划</a>
                        </p>
                        <div class="row">
                            <div class="col-6">
                                    <p class="mt-1 my_pink pl-3">¥6800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：1167</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/6.jpg" alt=""/>
                        <p class=" border-bottom p-3">
                            <a class="text-dark" href=" javascript:;">「Color Of Love」·浪漫露台主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥7800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：1038</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/7.jpg" alt=""/>
                        <p class=" border-bottom p-3">
                            <a class="text-dark" href=" javascript:;">「糖果乐园」大气花台甜美浪漫策划</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥15800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：1124</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/8.jpg" alt=""/>
                        <p class=" border-bottom p-3">
                            <a class="text-dark" href=" javascript:;">「你是我的倾城时光」室内花房主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥13800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：873</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/9.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「爱夜梦里」花房浪漫惊喜策划</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥15800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：872</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/10.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「听见花开」·浪漫惊喜策划</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥8800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：744</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/11.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「静思·花语」梦幻露台花海主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥12800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：624</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/12.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「秘境之林」森系浪漫求婚套餐</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥15800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：298</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
            <div class="m-auto pb-3">
                <a class="btn btn-my_a d-block" href="">查 看 更 多</a>
            </div>

        </div>
    </div>
    <!--高端求婚定制-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">高 端 求 婚 定 制</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ADVANCED CUSTOMIZATION &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>我 们 只 用 服 务 和 效 果 说 话</p>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-12 my_m-b" v-for='(item,index) of secondList' :key='index'>
                <div class="card">
                    <div class="card-body p-0 ">
                        <img class="w-100 my_img" :src="`imgs/c/${item.img}`" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">{{item.title}}</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥{{item.price}}起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：{{item.saled}}</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--<div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_2.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「Moment」户外创意花海主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥28800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：549</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_3.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「Lovely World」户外城堡主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥25800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：697</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_4.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「浩瀚星河」户外星空主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥35800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：523</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_5.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「时空尽头」户外创意星球主题</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥21800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：563</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_6.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「空中花园」室内小清新定制</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥35800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：431</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_7.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「微光觅影」浪漫仙境</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥38800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：697</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-4 col-sm-12">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_8.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「龙猫——可遇见」宫崎骏动漫主题套餐</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥26800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：18</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-12 my_m-b">
                <div class="card">
                    <div class="card-body p-0 modal-open">
                        <img class="w-100 my_img" src="imgs/c/dz_4.jpg" alt=""/>
                        <p class=" border-bottom p-3"><a class="text-dark" href=" javascript:;">「微光觅影」浪漫仙境</a></p>
                        <div class="row">
                            <div class="col-6">
                                <p class="mt-1 my_pink pl-3">¥38800起</p>
                            </div>
                            <div class="col-3 p-0">
                                <p class="mt-1">已售：697</p>
                            </div>
                            <div class="col-2 p-0">
                                <a class="btn btn-sm btn-pink" href=" javascript:;">预定</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>-->
            
           

              <div class="col-md-4 col-sm-12">
              </div>
              <div class="m-auto pb-3">
                <a class="btn btn-my_a d-block" href="">查 看 更 多</a>
              </div>
        </div> 
    </div>
    <!--尊享求婚之服务流程-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">尊 享 求 婚 之 服 务 流 程</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; SERVICE DETAIL &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>正 规 和 专 业 来 源 于 标 准 与 流 程</p>
        </div>
    </div>
</div>
<!--服务流程-->
<div class="my_zxbg">
    <div class="container my_zxbg">
        <div>
            <ul class="breadcrumb my_zxbg  mb-0 pb-0">
                <li class="breadcrumb-item b1 mt-20"><img src="imgs/lun5.png" alt=""/></li>
                <li class="breadcrumb-item b1 mt-20"><img src="imgs/lun4.png" alt=""/></li>
                <li class="breadcrumb-item b1 mt-20"><img src="imgs/lun3.png" alt=""/></li>
                <li class="breadcrumb-item b1 mt-20"><img src="imgs/lun2.png" alt=""/></li>
                <li class="breadcrumb-item b1 mt-20"><img src="imgs/lun1.png" alt=""/></li>
            </ul>
        </div>
        <div>
            <ul class="breadcrumb my_zxbg mb-20">
                <li class="breadcrumb-item b2 mb-20">构思浪漫框架</li>
                <li class="breadcrumb-item b2 mb-20">完成专属浪漫档案</li>
                <li class="breadcrumb-item b2 mb-20">贴心策划拟定方案</li>
                <li class="breadcrumb-item b2 mb-20">统筹协调准备浪漫</li>
                <li class="breadcrumb-item b2 mb-20">享受浪漫之旅</li>
            </ul>
        </div>
    </div>
</div>
<!--谁选择了我们-->
<div class="container mt-4">
    <!--顾问-->
    <div class="text-center">
        <p class="m-0">你还在为准备求婚繁琐而抓狂吗？Tell Love求婚管家式服务，省时又省心！</p>
        <div class="mt-3 my_btn btn-pink pl-4 pr-4 my_a-font-size">顾问微信：telllove31</div>
    </div>
    <!--谁选择了我们 分割线-->
    <div class="text-center my_gray m-5">
        <p class="font-size-top">谁 选 择 了我 们</p>
        <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp;OUR GUESTS &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
        <p>感 谢 对 我 们 的 认 可</p>
    </div>
    <!--轮播图-->
    <div class="lb_f">
        <div class="lb_s">
            <img src="imgs/lunb/c1.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c2.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c3.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c4.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c5.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c6.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c7.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c8.png" class="mr-3 float-left" alt=""/>
            <img src="imgs/lunb/c9.png" class="float-left" alt=""/>
            <div class="clearfix"></div>
        </div>
    </div>
    <!--正在为客户筹备-->
    <div class="text-center my_gray m-5">
        <p class="font-size-top">我 们 正 在 为 这 些 客 户 筹 备</p>
        <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;MAKE PREPARATIONS &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
        <p>嘘 🤐 要 替 他 们 保 密 噢~~</p>
    </div>
</div>
<!--五个客户图片-->
<div class="my_zxbg">
    <div class="container">
        <div class="row ">
            <div class="col-24  m-20">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="w-100" src="imgs/new_boy.png" alt=""/>
                        <p class="mb-0 mt-4">龚先生</p>
                        <p>西安</p>
                    </div>
                </div>
            </div>
            <div class="col-24  m-20">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="w-100" src="imgs/new_boy.png" alt=""/>
                        <p class="mb-0 mt-4">l先生</p>
                        <p>沈阳</p>
                    </div>
                </div>
            </div>
            <div class="col-24  m-20">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="w-100" src="imgs/new_boy.png" alt=""/>
                        <p class="mb-0 mt-4">温先生</p>
                        <p>北海市</p>
                    </div>
                </div>
            </div>
            <div class="col-24  m-20">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="w-100" src="imgs/new_boy.png" alt=""/>
                        <p class="mb-0 mt-4">房先生</p>
                        <p>丹东市</p>
                    </div>
                </div>
            </div>
            <div class="col-24  m-20">
                <div class="card">
                    <div class="card-body text-center">
                        <img class="w-100" src="imgs/new_boy.png" alt=""/>
                        <p class="mb-0 mt-4">姜先生</p>
                        <p>沈阳</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--案例-->
<div class="container">
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">您 可 以 先 看 我 们 的 案 例</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; OUR CASES &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>6 年 我 们 见 证 了 上 万 对 情 侣 的 浪 漫 时 刻</p>
        </div>
    </div>
    <div class="row">
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_1.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">Yes，I Do——宁波浪漫餐厅求婚</p>
                    <p class="mt-1 pl-3">宁波</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_2.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">一见钟情 挚爱万年</p>
                    <p class="mt-1 pl-3">成都市</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_3.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">微光寻你——重庆森系主题浪漫求婚</p>
                    <p class="mt-1 pl-3">重庆市     灯光、女主惊讶感动</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_4.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">日月星辰——重庆浪漫霸气场景求婚</p>
                    <p class="mt-1 pl-3">重庆市     舞台、大场景</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_5.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">炙热山城 挚爱永恒</p>
                    <p class="mt-1 pl-3">重庆市</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_6.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">从校服走向婚纱——重庆餐厅浪漫求婚</p>
                    <p class="mt-1 pl-3">重庆市     花房、餐厅</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_7.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">情定圣托尼里</p>
                    <p class="mt-1 pl-3">湘乡市</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_8.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0 text-truncate">自从遇见你，余生都是你~——厦门浪漫餐厅露台求婚</p>
                    <p class="mt-1 pl-3">厦门</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_9.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">浪漫童话无锡粉色城堡主题求婚</p>
                    <p class="mt-1 pl-3">无锡</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_10.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">对你一眼万年——成都浩瀚星河求婚</p>
                    <p class="mt-1 pl-3">成都市</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_11.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">甜言蜜语，为爱执笔——重庆浪漫餐厅求婚</p>
                    <p class="mt-1 pl-3">重庆市</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href=" javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="imgs/c/al_12.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">最是一抹梨花香——深圳灯海焰火花房求婚</p>
                    <p class="mt-1 pl-3">深圳     灯海、花房  </p>
                </div>
            </div>
        </a>
        <div class="m-auto pb-3">
            <a class="btn btn-my_a d-block" href="">查 看 更 多</a>
        </div>
    </div>
    <!--实力团队-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">公 司 实 力 团 队</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PROFESSIONAL TEAM  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>您 的 参 谋 背 后 是 一 个 团 队</p>
        </div>
    </div>
</div>
<!--宣传照片-->
<div>
    <img class="w-100" src="imgs/c/xuanchuan.jpg" alt=""/>
</div>
<div class="container">
    <!--全球覆盖-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">全 球 覆 盖</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                GLOBALIZATION&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>全 球 ， 我 们 已 经 做 了 很 多 场 了</p>
        </div>
    </div>
</div>
<!--全球覆盖-->
<div class="my_zxbg">
    <div class="w-90 m-auto">
        <div class="row m-5">
            <div class="float-left">
                <div class="my_bg_brown text-white text-center m-t-5 pt-5 remen_size">
                    <p class="my_rm-font">国 内 热 门</p>
                    <p class="my_rm-font2">国 外 热 门</p>
                </div>
            </div>
            <div class="ml-3 float-left">
                <div class="row">
                    <div class="p-5 pics_smaller">
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/beijing.png')">
                                <div class="content_c">北 京</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/pujidao.png')">
                                <div class="content_c">普 吉 岛</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/guangzhou.png')">
                                <div class="content_c">广 州</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/luoshanji.png')">
                                <div class="content_c">洛 杉 矶</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/chongqing.png')">
                                <div class="content_c">重 庆</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/bali.png')">
                                <div class="content_c">巴 厘 岛</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/shenzheng.png')">
                                <div class="content_c">深 圳</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/dongjing.png')">
                                <div class="content_c">东 京</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/hangzhou.png')">
                                <div class="content_c">杭 州</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/maerdai.png')">
                                <div class="content_c">马 尔 代 夫</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/sanya.png')">
                                <div class="content_c">三 亚</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/sumei.png')">
                                <div class="content_c">苏 梅 岛</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/chengdu.png')">
                                <div class="content_c">成 都</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/changtan.png')">
                                <div class="content_c">长 滩 岛</div>
                            </a>
                        </div>
                        <div class="float-left mr-3">
                            <a href=" javascript:;" class="d-block a_relative bg mt-5" style="background-image:url('imgs/xianggang.png')">
                                <div class="content_c">香 港</div>
                            </a>
                            <a href=" javascript:;" class="d-block a_relative bg mt-4 mb-5" style="background-image:url('imgs/lundun.png')">
                                <div class="content_c">伦 敦</div>
                            </a>
                        </div>
                        <div class="float-left">
                            <a href=" javascript:;" class="content_a d-block bg mt-5 pt-4">
                                <img src="imgs/dian.png" alt=""/><br/>
                                <span class="span_a">咨询更多</span>
                            </a>
                            <a href=" javascript:;" class="content_a d-block bg mt-4 pt-4">
                                <img src="imgs/dian.png" alt=""/><br/>
                                <span class="span_a">咨询更多</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--合作伙伴-->
<div class="container">
    <!--合作伙伴-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">合 作 伙 伴</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                OUR PARTNER&nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>我 们 和 合 作 伙 伴 共 同 成 长</p>
        </div>
    </div>
</div>
<!--合作伙伴图-->
<div class="my_hzbg">
    <div class="container">
        <img src="imgs/m_hezuo1_1.png" alt="" class="mt-5 mb-5"/>
    </div>
</div>
<!--求婚攻略-->
<div class="container pb-5">
    <!--求婚攻略-->
    <div>
        <div class="text-center my_gray m-5">
            <p class="font-size-top">求 婚 攻 略</p>
            <p class="font-size-mid">— — — — — — &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                PROPOSED APPROACH &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;— — — — — —</p>
            <p>攻 略 只 是 方 法 ， 表 达 才 是 浪 漫</p>
        </div>
    </div>
    <div class="row mb-5">
        <div class="col-3">
            <a href="">
                <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 创 意</p>
                <img src="imgs/qhgl/c1.png" alt="" class="w-90"/>
            </a>
            <div class="w-90 text-truncate mt-2">
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
            </div>
        </div>
        <div class="col-3">
            <div>

                <a href="">
                    <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 词</p>
                    <img src="imgs/qhgl/c2.png" alt="" class="w-90"/>
                </a>
                <div class="text-truncate mt-2 w-90">
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                </div>
            </div>
        </div>
        <div class="col-3">
            <a href="">
                <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 歌 曲</p>
                <img src="imgs/qhgl/c3.png" alt="" class="w-90"/>
            </a>
            <div class="w-90 text-truncate mt-2">
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
            </div>
        </div>
        <div class="col-3">
            <div>

                <a href="">
                    <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 策 划</p>
                    <img src="imgs/qhgl/c4.png" alt="" class="w-90"/>
                </a>
                <div class="text-truncate mt-2 w-90">
                    <a  href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                </div>
            </div>
        </div>
        <div class="col-3 mt-4">
            <a href="">
                <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 戒 指</p>
                <img src="imgs/qhgl/c5.png" alt="" class="w-90"/>
            </a>
            <div class="w-90 text-truncate mt-2">
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
            </div>
        </div>
        <div class="col-3 mt-4">
            <div>
                <a href="">
                    <p class="my_gray text-center font_qhcy mb-2 w-90">求 婚 方 式</p>
                    <img src="imgs/qhgl/c6.png" alt="" class="w-90"/>
                </a>
                <div class="text-truncate mt-2 w-90">
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                </div>
            </div>
        </div>
        <div class="col-3 mt-4">
            <a href="">
                <p class="my_gray text-center font_qhcy mb-2 w-90">挽 回 爱 情</p>
                <img src="imgs/qhgl/c7.png" alt="" class="w-90"/>
            </a>
            <div class="w-90 text-truncate mt-2">
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
            </div>
        </div>
        <div class="col-3 mt-4">
            <div>
                <a href="">
                    <p class="my_gray text-center font_qhcy mb-2 w-90">生 日 惊 喜</p>
                    <img src="imgs/qhgl/c8.png" alt="" class="w-90"/>
                </a>
                <div class="text-truncate mt-2 w-90">
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意asdfsdfasdf</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                    <a href="" class="my_gray d-block mt-1 text-truncate">-怎么来一场简单的求婚？求婚创意</a>
                </div>
            </div>
        </div>
    </div>
</div>
<my-footer></my-footer>
</div>

</template>
<script>
  //1. 先引入header.vue组件对象，临时命名为Header，将来组件标签就是<my-header> VUE会自动将驼峰翻译为<my-header>
   
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"
  export default {
      
    data(){
      return {
       firstList:[],
       secondList:[]
                       
           }
       },
    mounted(){
         this.axios.get('http://127.0.0.1:3000/shouye')
         .then(result=>{
            this.firstList=result.data.slice(0,12);
            this.secondList=result.data.slice(12);
           
         })
         .catch(err=>{console.log(err)});

         


         },
         
    //2. 将header.vue设置为当前组件的子组件
   components:{
     myHeader,
     myFooter

   }
    
  }

   
   
 
</script>

<style scoped>
  /* @import '../css/index.css';  */
 /* @import '../css/public.css'; */
 body{
    padding: 0;margin: 0;
    font-family:Helvetica,"Microsoft Yahei",Arial,STHeiti;
}

.my_header{
    width:100%;
    height:9rem;
}
.my_footer{
    width:100%;
    height:40rem;
}
.right_fixed{
    width:100px;
    position:fixed;
    right: 0px;
    bottom: 5rem;  
      

}
.right_fixed :not(#right_Small){
  width:58px;
  height:58px;
  background-color:#fff;
  border:1px solid #fff;
  border-radius:50%;
  display:block;
  padding:2px;

  margin-bottom: 1rem;
  margin-right:-1rem;
}
.right_fixed :not(#right_Small):hover{
    box-shadow: 
}
#right_Small{
    width:80px;
    height:80px;
    margin-right: 2rem;
}
.text-rose{
    color:#DF5986 !important;
}
a.text-rose:hover, a.text-rose:focus {
    color: #DF5986 !important;
}
.text-brown{
    color:#857272 !important;
}
a.text-brown:hover, a.text-brown:focus {
    color: #857272 !important;
}
.my_m-b{
    margin-bottom:30px;
}
.my_img{
    width:248px;
    height:232px;
}
.my_img:hover,.my_img2:hover{
    transition:1s;
    transform:scale(1.1,1.1);
    cursor:pointer;
    box-shadow: 1px 1px 8px #D3D3D3;
}
div.my_width>div>p>a,.my_pink{
    color:#DF5986;
}
.btn-pink{
    color: #fff;
    background-color: #DF5986 ;
    border-color: #DF5986 ;
}
.btn-pink:focus, .btn-pink.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.btn-pink:hover, .btn-pink.hover {
    color:#fff;
}
a:hover{
    text-decoration: none;
}
a.text-secondary>.my_img2>.card-body>p:last-child{
    font-size:0.8rem;
}
.card{
    box-shadow: 3px 3px 8px #D3D3D3;
}
.index_banner .fixed-tip {
  position: absolute;

  margin-left: -125px;
  text-align: center;

  font-size: 20px;
  line-height: 45px;}
.fixed-tip {
  width: 76%;
  height: 458px!important;
  left: 18%!important;
  top: 215px!important;
}
.index_banner_big_say {
  margin: 12px auto 0;
  width: 909px;
  height: 60px;
  font-size: 46px;
  line-height: 24px;
  letter-spacing: 6px;
  color: #fff;}
.index_banner_big_say, .index_banner_say {
  font-weight: 400;
  font-stretch: normal;
  font-family: MicrosoftYaHei;
}
.index_banner_say {
  width: 449px;
  height: 30px;
  font-size: 19px;
  line-height: 30px;
  letter-spacing: 13px;
  color: #fff;
  margin: 0 auto;
}
.index_banner_btn, .index_banner_btn_top {
  width: 325px;
  height: 83px;
  border-radius: 5px;}
.index_banner_btn {
  margin: 244px auto 0;
  margin-left:38.65%;
  background-image: linear-gradient(rgba(75,75,75,.43),rgba(75,75,75,.43)),linear-gradient(#4b4b4b,#4b4b4b);
  background-blend-mode: normal,normal;
  opacity: .5;}
.index_banner_btn_top {
  display: block;
  position: absolute;
  bottom: 29px;
  left: 38.65%;
  z-index: 55555;
  border: 2px solid #fff;
  color: #fff;
  font-size: 32px;
  line-height: 83px;
  text-decoration:none;
}
.index_banner_btn_top:hover{
  text-decoration:none;
  color:#fff;
}
.index_banner {
  position: relative;
  overflow: hidden;
  height: 756px;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  color: #FCFCFC;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;}
.index_banner-video {
  overflow: hidden;
}

.index_banner-video video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  height: auto;
}
.my_width{
  width:100%;
  height:165px;
}
.my_width>div{
  width:11.11111111%;
  height:165px;
  border-bottom: 1px solid #E4E4E4;
}
.my_width>div+div{
  border-left: 1px solid #E4E4E4;
}
div.my_width>div>p+p,.font-size-mid{
  font-size:1rem;
}
div.my_width>div>p+p{color:#CCC;}
div.my_width>div>p:first-child,.font-size-top{
  font-size:2rem;
}
div.my_width>div>p>a{
  border-bottom: 1px solid #DF5986;
 
}
div.my_width>div>p>a:hover{
    transform: rotate(45deg);
}


div.my_width>div>p+p,.my_gray,.btn-my_a{
  color:#857272 !important;
}
.card{
  box-shadow: 1px 0 8px 0 rgba(0,0,0,.42);
}
.my_img:hover{
  transition:1s;
  transform:scale(1.1,1.1);
  cursor:pointer;
}

.btn-my_a{
  background-color: #fff ;
  border:2px solid rgba(133,114,114,.65);
  padding-right: 3rem;
  padding-left: 3rem;
  margin:0 auto;
}
.btn-my_a:focus, .btn-my_a.focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.my_zxbg{
  background:rgb(215,215,215);
}
.b1 + .b1::before{
  content:">";
  font-size:2rem;
  margin:1.5rem;
}
.b2 + .b2::before{
  content:"|";
  font-size:1rem;
  margin:0 2.8rem;
}
.my_a-font-size{
  font-size:0.2rem;
}
.my_btn{display: inline-block;
font-weight: 400;
text-align: center;
border: 1px solid transparent;
padding: 0.375rem 1rem;
font-size: 1rem;
line-height: 1.5;
border-radius: 0.25rem;
transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;}
.col-24{
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}
.m-20{
  margin:4rem 0;
}
.mt-20{
  margin-top:4rem;
}
.mb-20{
  margin-bottom:4rem;
}
.my_bg_brown{
  background:#857272 !important;
  box-shadow: 6px 0 17px 0 rgba(73,73,73,.63);
}
.m-t-5{
  margin-top:-2rem;
}
.w-90{
  width:90%;
}
.col-122{
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 13.5%;
}
.content_c{
  color:white;
  text-align: center;
  line-height:100px;
}
.content_img{
  margin-top:-1rem;
}
.a_relative{
  position:relative;
}
.bg{
  width:94.56px;
  height:100px;
}
.remen_size{
  width:200px;
  height:400px
}
.my_rm-font{
   font-size:1.5rem;
   margin-top:7rem;
   padding-bottom:0rem;
}
.my_rm-font2{
  font-size:1.5rem;
  margin-top:5.5rem;
  padding-bottom:0rem;
}
.content_a{
  width:57px;
  height:100px;
}
.span_a{
  display: block;
  width: 53px;
  text-align: center;
  letter-spacing: 6px;
  color: #857272;
  margin-top: 7px;
  font-size: 16px;
  margin-left: 6px;
  box-sizing: border-box;
}
.my_hzbg{
  background:#F3F2F2;
}
.font_qhcy{
  font-size: 1.3rem;
}
.lb_f{
  position: relative;
  overflow: hidden;
  height:462px;
}
.lb_s{
  width:3528px;
  position: absolute;
  left:0px;
  animation-name:change;
  animation-duration:15s;
  animation-timing-function:ease-in-out;
  animation-iteration-count:infinite;
  animation-direction:alternate;
}
@keyframes change {
  5% {
      left: 0px;
  }
  100%{
      left:-2230px;
  }
}
.lb_s>img{
  box-shadow: 6px 0 10px 0 rgba(0,0,0,.57);
}
.my_rm-font,.my_rm-font2{
    color:#fff;
}
.pics_small{
    margin-top: -22rem;
    margin-left: 11rem;
}
 
 
</style>