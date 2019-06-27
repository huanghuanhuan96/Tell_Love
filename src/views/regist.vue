<template>
  <div id="d1" align="center">
			<div class="cdd1">
				<h1 class='newRegist'>新用户注册</h1>
			</div>
			<div class="d3">
				<div class="cd1">
					<span>手机号:</span>
					<input type="text" placeholder="请输入手机号">
				</div>
				<div class="cd1 cdd1" id="cdd2">
					<span>密 码：</span>
					<input type="password" placeholder="请输入密码"><br>
				</div>
				<div class="cd1">
					<span>姓 名：</span>
					<input type="text" placeholder="怎么称呼您">
				</div>
				 
				<router-link :to="{path:'/'}"> <el-button type="danger"   plain id="a1">完成注册</el-button></router-link>
			</div>
		</div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped>
  		*{
				margin:0px;padding:0px;
			}	
			body{
				color:#857272;
			}
			.newRegist{
              color:#999;
			}
				#d1{
				width:880px;
				height:770px;
				border:2px solid #857272;
				margin:0 auto 30px;
			}
			input{
				margin:7px;
				width:97%;
				height:50px;
				font-size:22px;
				padding-left:110px;
				box-sizing:border-box;
				border-radius:5px;
				border:1px solid #EEEEEE;
				
			}
			span{
				font-size:24px;
				position:absolute;
				left:20px;
				top:8px;
				line-height:50px;
				
			}
			.d3 input:focus{
				outline:none;
				box-shadow:inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);

				}
				#a1{
				float:left;
				width:460px;
				height:71px;
				text-decoration:none;
				 
				border-radius:5px;
				font-size:24px;
				color:#999;
				box-sizing:border-box;
				background-size:cover;
				margin-left:211px;
			}
			#d2{
				width:300px;
			}
			.cd1{
				margin:40px;
				width:450px;
				height:50px;
				text-align:center;
				
				position:relative;
			}
			.cdd1{
				border-bottom:1px solid #E4E4E4;
				height:80px;
				line-height:80px;
			}
			#cdd2{
				padding-bottom:40px;
			}
</style>

