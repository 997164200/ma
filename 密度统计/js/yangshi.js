$(document).ready(function(e){
  // 样式经过
	$('.youbian li').mouseover(function(){
		//var sheng=$('.youbian li').index( $(this) );
		$(this).addClass('hover').siblings().removeClass('hover');
		});
    //二级导航
	$('.yincanga .youbian li').click(function(){
		$('.yincr > div').eq($(this).index()).show().siblings().hide();
		});
  	   $('#container .youbian tr').click(function(){
					  $('.yincanga').show();
					  $('.yincanga ul.youbian li').eq($(this).index()).addClass('hover').siblings().removeClass('hover');
					  $('.yincr > div').eq($(this).index()).show(1000).siblings().hide();
					  
			   })
  $('.yincr1 h2 strong').click(function(){
	   $(this).parent().parent().parent().parent().hide();
  })
  
  
  $('.content_table ol li').click(function(){
        $(this).addClass('hover').siblings().removeClass('hover');
        $('.content_table1 div').eq($(this).index()).show().siblings().hide();
  
  })
  $('.tongji .info li').mouseover(function(){
     $(this).css('background','#ccc').siblings().css('background','');
  })
});



$(document).ready(function(e) {
    //热词划过
	
	$('.rcfb h2').hover(function(){
		//var sheng=$('.youbian li').index( $(this) );
		$(this).addClass('hover').siblings().removeClass('hover');
		$('.rot_ci .hua').eq($(this).index()).stop().show(400)},function(){
			$('.rot_ci .hua').eq($(this).index()).stop().hide(400);
		
/*		$('.hua_1').show(400);
		},function(){
			$(this).removeClass('hover');
			$('.hua_1').hide(400);*/
			});









			
			








			

	//块级隐藏
	$(".rcfb h2").click(function(){
	   //$(this).children('.hua').hide();
	   $(".dj").show();	
   });
	$(".dj span").click(function(){
	   $(".dj").hide();	
   })
});
























