$(".list-unstyled a").on("click",function(){
	$(this).next().slideToggle();
});

$("#quit").on('click',function(){
	location.href = '/dist/html/user/login.html';
})
