<template>
<div>
     <my-header></my-header>

   <div class="container">
    <!--导航-->
    <div class="border-grow p-3 mt-3 mb-3">
        <!--面包屑-->
        <ul class="breadcrumb text-brown">
            <li class="breadcrumb-item"><router-link :to="{path:'/'}">网站首页</router-link></li>
            <li class="breadcrumb-item">求婚套餐</li>
        </ul>
        <div class="text-brown pl-3 mb-4">
        <div class="float-left pt-3">形 式：</div>
            <a href="javascript:;" class="btn a_title ml-3 mt-3 font-dh pt-0 pb-0"
            v-for='(item,index) of manyStyle' :key='index'>{{item}}</a>
            
        </div>
        <div class="text-brown pl-3">
            <div class="float-left mb-3 pt-3">场 地：</div>
            <a href="javascript:;" 
            class="btn a_title ml-3 mt-3 font-dh pt-0 pb-0"
            v-for='(item,index) of manyPlace ' :key='index'>{{item}}</a>
            
        </div>
    </div>
    <!--超值求婚套餐-->
    <div class="border_czqh text-brown">
        <div class="h4 mb-0">超 值 求 婚 套 餐</div>
        <div>E X C E L L E N T&nbsp; &nbsp;Q U A L I T Y&nbsp;  &nbsp; A N D&nbsp;  &nbsp; R E A S O N A B L E P R I C E </div>
    </div>   
    <div class="row">
        <div class="col-md-4 col-sm-12 my_m-b" v-for='(item,index) of myList' :key='index'>
            <div class="card">
                <div class="card-body p-0 modal-open">
                     
                       <img class="w-100 my_img"  :src=imgUrl+item.img alt=""/>
                 
                   
                    <p class=" border-bottom p-3"><a class="text-dark" href="javascript:;">{{item.title}}</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥{{item.price}}起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：{{item.saled}}</p>
                        </div>
                        <div class="col-2 p-0">
                            
                             <button class="btn btn-sm btn-pink" @click='toDetails(item.pid)'>预定</button>
                           
                        </div>
                    </div>
                </div>
            </div>

    </div>
        <!--<div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/2.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「爱情影院」·VIP电影包房惊喜套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥9800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1502</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/3.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「深海之谜」·心形灯海浪漫策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：2966</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c280.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「浪漫满屋」·浪漫惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1760</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="javascript:;">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/4.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「浪漫满屋」·浪漫惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1760</p>
                        </div>
                        <div class="col-2 p-0">
                            <router-link :to="{path:'/details'}" class="btn btn-sm btn-pink" href="javascript:;">预定</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/5.jpg" alt=""/>
                    <p class=" border-bottom p-3">
                        <a class="text-dark" href="#">「缤纷世界」KTV浪漫惊喜策划</a>
                    </p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥6800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1167</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="javascript:;">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/6.jpg" alt=""/>
                    <p class=" border-bottom p-3">
                        <a class="text-dark" href="#">「Color Of Love」·浪漫露台主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥7800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1038</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/7.jpg" alt=""/>
                    <p class=" border-bottom p-3">
                        <a class="text-dark" href="#">「糖果乐园」大气花台甜美浪漫策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥15800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：1124</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/8.jpg" alt=""/>
                    <p class=" border-bottom p-3">
                        <a class="text-dark" href="#">「你是我的倾城时光」室内花房主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥13800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：873</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/9.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「爱夜梦里」花房浪漫惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥15800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：872</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/10.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「听见花开」·浪漫惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：744</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/11.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「静思·花语」梦幻露台花海主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥12800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：624</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/12.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「秘境之林」森系浪漫求婚套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥15800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：298</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c2.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「梦幻国度」户外城堡灯海主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥15800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：364</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c5_3.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「简爱」 KTV浪漫惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：221</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c6_1.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「呓语」沙滩花房惊喜套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥13800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：362</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c6_2.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「初遇」创意餐厅求婚套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥8800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：156</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c6_3.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「爱的华尔兹」快闪惊喜策划</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥11800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：420</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c7_1.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「Croatian」户外创意克罗地亚凤格主题套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥15800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：22</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c7_2.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「轻纱掩红颜」清新静谧求婚套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥13800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：128</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/c7_3.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「甜蜜爱之屋」·室内粉色系求婚</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥7800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：238</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
    <!--高端求婚定制 9张图 -->
    <div class="border_czqh text-brown">
        <div class="h4 mb-0">高 端 求 婚 定 制</div>
        <div>A D V A N C E D&nbsp; &nbsp; C U S T O M I Z A T I O N</div>
    </div>
    <div class="row">
        <div class="col-md-4 col-sm-12 my_m-b" v-for='(item,index) of highDesign' :key='index'>
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" :src='`imgs/c/${item.img}`' alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="javascript:;">{{item.title}}</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥{{item.price}}起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：{{item.saled}}</p>
                        </div>
                        <div class="col-2 p-0">
                            <button class="btn btn-sm btn-pink"  @click='toDetails(item.pid)'>预定</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       <!--<div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_8.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「 龙猫——可遇见」 宫崎骏动漫主题套餐</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥26800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：18</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_2.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「Moment」户外创意花海主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥28800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：549</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_3.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「Lovely World」户外城堡主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥25800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：697</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_4.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「浩瀚星河」户外星空主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥35800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：523</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_5.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「时空尽头」户外创意星球主题</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥21800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：563</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 my_m-b">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_6.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「空中花园」室内小清新定制</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥35800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：431</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_7.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「微光觅影」浪漫仙境</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥38800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：697</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-4 col-sm-12">
            <div class="card">
                <div class="card-body p-0 modal-open">
                    <img class="w-100 my_img" src="../../public/imgs/c/dz_12.jpg" alt=""/>
                    <p class=" border-bottom p-3"><a class="text-dark" href="#">「日月星辰」奢华创意求婚</a></p>
                    <div class="row">
                        <div class="col-6">
                            <p class="mt-1 my_pink pl-3">¥198800起</p>
                        </div>
                        <div class="col-3 p-0">
                            <p class="mt-1">已售：84</p>
                        </div>
                        <div class="col-2 p-0">
                            <a class="btn btn-sm btn-pink" href="#">预定</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>-->
    </div>
    <div class="border_czqh text-brown">
        <div class="h4 mb-0">热 门 案 例</div>
        <div>P O P U L A R&nbsp; &nbsp; C A S E</div>
    </div>
    <div class="row">
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_13.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">圣诞恋曲——深圳浪漫小区求婚</p>
                    <p class="mt-1 pl-3">深圳</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_14.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">遇见你，是我的小幸运——浪漫花房求婚</p>
                    <p class="mt-1 pl-3">武汉</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_15.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">爱不停转——浪漫摩天轮求婚</p>
                    <p class="mt-1 pl-3">广州</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_1.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">Yes，I Do——宁波浪漫餐厅求婚</p>
                    <p class="mt-1 pl-3">宁波</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_16.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">浪漫沙滩——与你情定三亚</p>
                    <p class="mt-1 pl-3">三亚</p>
                </div>
            </div>
        </a>
        <a class="col-md-4 col-sm-12 my_m-b text-secondary" href="javascript:;">
            <div class="card my_img2">
                <div class="card-body p-0">
                    <img class="w-100" src="../../public/imgs/c/al_17.jpg" alt=""/>
                    <p class="pl-3 pt-3 m-0">浪漫童话无锡粉色城堡主题求婚</p>
                    <p class="mt-1 pl-3">无锡</p>
                </div>
            </div>
        </a>
    </div>
  </div>
  <my-footer></my-footer>
</div>
 
</template>
<script>
  //1. 引入header.vue组件对象，并起名
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"
  import priceDetails from "@/views/priceDetails"
  export default {
     //props:['kwords'],//必须和route.js 中的/:kwords一致
//{path:"/details/:lid",...,props:true}
   //接url中的lid参数
    data(){
      return {
       myList:[],
       imgUrl:"imgs/c/",
       highDesign:[],
       manyStyle:['全部','灯海','焰火','公仔','快闪','花房','大屏幕','气球','花海'],
       manyPlace:['全部','灯海','咖啡厅','KTV','酒店','餐厅',
       '草坪','商场','广场','海边','校园','沙滩','公园','酒吧',
       '机场','家里','露台','游泳池','雪地','游乐园']
      }
    },
    /*created() {
        if(this.$route.query) {
            this.pid = this.$route.query.pid;
            this.init();
        }
    },*/
    mounted(){
         this.axios.get('http://127.0.0.1:3000/list',{
             params:{
                // kw:this.kwords,
                 //pno:0,
             }
         })
         .then(result=>{//必须用箭头函数 this->当前
             this.myList=result.data.slice(0,29);
            this.highDesign=result.data.slice(29);
             
         })
         .catch(err=>{console.log(err)});
    },

    /*watch: {
        '$route' (to, from) { //监听路由是否变化
            if(to.query.pid != from.query.pid){
                this.pid = to.query.pid;
                this.init();//重新加载数据
            }
        }
    },*/
    methods:{
        toDetails(pid){
            this.$router.push({name:'priceDetails',params:{pid}});
        }
    },
    components:{
        myHeader,
        myFooter,
        priceDetails
    }

  }
</script>

<style scoped>
 @import '../assets/css/price.css';
 @import '../assets/css/public.css';
</style>