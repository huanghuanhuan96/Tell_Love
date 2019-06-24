<template>
  	<div id="d1" align="center">
			<div class="cdd1">
				<h1>登录</h1>
			</div>
			<hr width="800px">
			<div class="d3">
				<div class="cd1">
					<span>手机号:</span>
					<input type="text" placeholder="请输入手机号">
				</div>
				<div class="cd1">
					<span>密 码：</span>
					<input type="password" placeholder="请输入密码"><br>
				</div>
				<div>
					<a href="javascript:;" id="d112">用手机验证码登录</a>
					<a href="javascript:;" id="d2">前往注册</a><br>
				</div>
				<a href="javascript:;" id="a1">登录</a>
			</div>
		</div>
</template>
<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style scoped>
 *{
				margin:0px;padding:0px;
			}	
			body{
				color:#857272;
      }
      h1{
        color:#857272;
        line-height: 80px;
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
				/*background:url(../../btnBg.png) center;*/
				text-decoration:none;
				line-height:71px;
				border-radius:5px;
				font-size:24px;
				color:#fff;
				box-sizing:border-box;
				background-size:cover;
				margin-left:211px;
			}
			#d2{
			  width:40%;
				float:right;
        margin-left:80rem;
        margin-top:-4rem;
				text-decoration:none;
				font-size:14px;
				color:#ccc;
			}
			#d112{
				margin:30px;
				float:left;
				margin-left:225px;
				text-decoration:none;
				font-size:14px;
				color:#F06;
			}
			.cd1{
				margin-top:80px;
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
</style>