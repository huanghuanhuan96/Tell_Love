<template>
  <header id="header" class="mb-4"> 
   <div align="center" id="d2">
		<div style="width:35%;float:left;color:#999999" class='ml-5'  align="center">
				全 国 浪 漫 热 线：400-900-2572
			&nbsp;&nbsp;|&nbsp;&nbsp;进入商家中心
		</div>
		<div style="width:47%;float:left" align="right" >
		      <router-link :to="{path:'/login'}">登录</router-link>
		</div>
		<div style="width:5%;float:left" align="right" >
				<router-link :to="{path:'/regist'}">注册</router-link>
			 
		</div>
	</div>
	<div id="dd1" align="center">
		<table>
			<tr align="center" id="t1">
				<td>
					<img src="imgs/Love_logo.png" style="width:157px;hight:51px">
				</td>
				<td class="drop">
					<a href="javascript:;">[切换城市]</a>
					<div class="drop-menu">
						<div>
							<span>直辖市：</span>
							<a href="javascript:;">北京</a>
							<a href="javascript:;">上海</a>
							<a href="javascript:;">重庆</a>
							<a href="javascript:;">天津</a>
							<span>四川省：</span>
							<a href="javascript:;">成都</a>
						</div>
						<div>
							<span>云南省：</span>
							<a href="javascript:;">昆明</a>
							<span>贵州省：</span>
							<a href="javascript:;">贵阳</a>
							<span>海南省：</span>
							<a href="javascript:;">海口</a>
							<a href="javascript:;">三亚</a>
						</div>
						<div>
							<span>广东省：</span>
							<a href="javascript:;">广州</a>
							<a href="javascript:;">深圳</a>
							<a href="javascript:;">东莞</a>
							<a href="javascript:;">珠海</a>
							<a href="javascript:;">湛江</a>
							<a href="javascript:;">肇庆</a>
							<a href="javascript:;">江门</a>
							<a href="javascript:;">惠州</a>
						</div>
						<div>
							<span>广西省：</span>
							<a href="javascript:;">南宁</a>
							<span>福建省：</span>
							<a href="javascript:;">福州</a>
							<a href="javascript:;">厦门</a>
							<a href="javascript:;">泉州</a>
						</div>
						<div>
							<span>浙江省：</span>
							<a href="javascript:;">杭州</a>
							<a href="javascript:;">温州</a>
							<a href="javascript:;">宁波</a>
							<a href="javascript:;">义乌</a>
							<a href="javascript:;">台州</a>
							<a href="javascript:;">绍兴</a>
						</div>
						<div>
							<span>江苏省：</span>
							<a href="javascript:;">南京</a>
							<a href="javascript:;">苏州</a>
							<a href="javascript:;">无锡</a>
							<a href="javascript:;">常州</a>
							<a href="javascript:;">扬州</a>
							<a href="javascript:;">徐州</a>
							<a href="javascript:;">盐城</a>
						</div>
						<div>
							<span>安徽省：</span>
							<a href="javascript:;">合肥</a>
							<a href="javascript:;">芜湖</a>
							<a href="javascript:;">宿州</a>
						</div>
						<div>
							<span>山东省：</span>
							<a href="javascript:;">济南</a>
							<a href="javascript:;">青岛</a>
							<a href="javascript:;">潍坊</a>
							<a href="javascript:;">淄博</a>
							<a href="javascript:;">东营</a>
							<span>江西省：</span>
							<a href="javascript:;">南昌</a>
						</div>
						<div>
							<span>湖南省：</span>
							<a href="javascript:;">长沙</a>
							<a href="javascript:;">湘潭</a>
							<a href="javascript:;">株洲</a>
							<span>湖北省：</span>
							<a href="javascript:;">宜昌</a>
							<a href="javascript:;">武汉</a>
							<a href="javascript:;">荆州</a>
						</div>
						<div>
							<span>河南省：</span>
							<a href="javascript:;">郑州</a>
							<a href="javascript:;">开封</a>
							<span>山西省：</span>
							<a href="javascript:;">太原</a>
							<span>陕西省：</span>
							<a href="javascript:;">西安</a>
						</div>
						<div>
							<span>河北省：</span>
							<a href="javascript:;">石家庄</a>
							<a href="javascript:;">邯郸</a>
							<a href="javascript:;">廊坊</a>
							<span>辽宁省：</span>
							<a href="javascript:;">沈阳</a>
							<a href="javascript:;">大连</a>
						</div>
						<div>
							<span>吉林省：</span>
							<a href="javascript:;">长春 黑龙江省： 哈尔滨 大庆 港澳台： 香港</a>
							<span>黑龙江省：</span>
							<a href="javascript:;">哈尔滨</a>
							<a href="javascript:;">大庆</a>
							<a href="javascript:;">港澳台：</a>
							<a href="javascript:;">香港</a>
						</div>
						<div>
							<span>国外：</span>
							<a href="javascript:;">巴黎</a>
							<a href="javascript:;">马尔代夫</a>
							<a href="javascript:;">巴厘岛</a>
							<a href="javascript:;">苏梅岛</a>
							<a href="javascript:;">塞班岛</a>
							<a href="javascript:;">普吉岛</a>
							<a href="javascript:;">洛杉矶</a>
							<a href="javascript:;">东京</a>
						</div>
					</div>
				</td>
				<td>
					<router-link :to="{path:'/'}">网站首页<br>HOME</router-link><br>
					
				</td>
				<td>
					<router-link :to="{path:'/price'}">求婚套餐<br>PRICE</router-link>
				</td>
				<td>
					<a href="javascript:;">高端定制<br>CUSTOMISE</a>
				</td>
				<td>
					<a href="javascript:;">我要定制<br>DESIGN</a>
				</td>
				<td>
					<a href="javascript:;">视频案例<br>CASES</a>
				</td>
				<td>
					<a href="javascript:;">求婚攻略<br>METHOD</a>
				</td>
			</tr>
		</table>		
	</div>
  </header>
</template>
<script>
  //抛出匿名模块对象,将来谁引入都可随意起名字。
  export default {
		name:"my-header",
		//组件的js内容
    data(){
      return {
         
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/header.css";
</style>