$('.nav>ul>li').click(function(){
	var menuidx=$(this).index();
	//console.log(menuidx);
	$('.sub_wrap').removeClass('on');
	$(this).find('.sub_wrap').addClass('on');
	
})
$('.closeBtn').click(function(){
	$(this).parents('.sub_wrap').removeClass('on');
	
	return false;
});

//swiper
var swiper = new Swiper(".mySwiper", {
	cssMode: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
  });

var	car=$('.car_lineup>.lineup_Box'),
  	model=$('.model_wrap > div'),
  	arrow=$('.model_wrap>.arrow');



car.click(function(){
	$('.select_model_wrap').css('display','block');
	model.css('display','none');
	$(this).children('strong').css('color','#000');
	$(this).children('strong').eq(caridx).css('color','#007fa8');
	var caridx=$(this).index();
	model.eq(caridx).css('display','block');
	$('.model-infotext').eq(caridx).css('display','flex');
	
	if(caridx==0){
		arrow.css('left',100)
	 }else if(caridx==1){
		arrow.css('left',320)
	 }else if(caridx==2){
		arrow.css('left',540)
	 }else if(caridx==3){
		arrow.css('left',760)
	 }else{
		arrow.css('left',980)
	 }
  
});

