$("#login-form").on("submit",function(e){
	$.ajax({
		url:'/v6/login',
		type:'post',
		data:$(this).serialize(),
		success:function(data){
			console.log(data);
			if(data.code == 200){
				alert("登录成功");
				location.href = "/dist";
			}else{
				alert("失败");
			}
		},
		error:function(){
			alert("登录失败");
		}
	});
	return false;
})
