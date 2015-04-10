$(document).ready(function(e){
/*头部*/
 $(".head ul li").click(function(){
  $(this).find('.info').toggle().parent().siblings().children('.info').hide();
  $(".head dl dd .info").hide();
  return false;
 })
 
 $(window).click(function(){
   $(".head .info").hide();
   $(".tongji .title .info").hide();
   $(".kehuzhichi_fuwu ol li .city").hide();
 })
/*子导航*/
 $(".sub_menu ul li").click(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   return false;
 })
/*微博统计*/
 $(".tongji .title strong").click(function(){
   $(".tongji .title .info").toggle();
   return false;   
 })
/*人群分布*/
 $(".renqun .content_l ul .shuju p").hover(function(){
   $(".renqun .content_l ul .shuju p span").show();
 },function(){
   $(".renqun .content_l ul .shuju p span").hide();
 })
 
 $(".renqun .content_l ul .shuju em").hover(function(){
   $(".renqun .content_l ul .shuju em i").show();
 },function(){
   $(".renqun .content_l ul .shuju em i").hide();
 })
 
 $("#news .con ol li .total").hover(function(){
   $(this).find("span").show();
 },function(){
   $(this).find("span").hide();
 })

 $(".kehuzhichi_fuwu ol li .text").click(function(){
   $(".kehuzhichi_fuwu ol li .city").toggle();
   return false;
 })

 $(".kehuzhichi_fuwu ol li a").click(function(){
   $(".kehuzhichi_fuwu ol .gaoji").toggle();
   $(this).toggle();
   $(".kehuzhichi_fuwu ol li .putong").toggle();
   return false;
 })
 $(".kehuzhichi_fuwu ol li .putong").click(function(){
   $(this).toggle();
   $(".kehuzhichi_fuwu ol li .gj").toggle();
   return false;
 })

 $(".pp form ul li.biaodan .gengduo").click(function(){
   $(".pp form ul li.info").toggle();
 })
 
//图片滚动 
 $('.slider-area ul').width(212*$('.slider-area li').length );
	   $(".btn-left").click(function(){
		   $(".slider-area ul li").last().prependTo($(".slider-area ul"));
		   $(".slider-area ul").css({"left":-212});
		   $(".slider-area ul").not(":animated").animate({"left":0},1000);
		   });
	   $(".btn-right").click(function(){
		   $(".slider-area ul").not(":animated").animate({"left":-212},1000,function(){
		   $(".slider-area ul li").first().appendTo($(".slider-area ul"));
		   $(".slider-area ul").css({"left":0})  
			   });
		   
		   });
 
 
 
})