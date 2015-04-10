$(document).ready(function(e){
/*头部*/
 $(".head ul li").click(function(){
  $(this).find('.info').toggle().parent().siblings().children('.info').hide();
  $(".head dl dd .info").hide();
  return false;
 })
 
 $(".head dl dd span").click(function(){
   $(".head dl dd .info").toggle();
   $(".head ul li .info").hide();
   return false;   
 })
 
 $(window).click(function(){
   $(".head .info").hide();
   $(".tongji .title .info").hide();
 })
/*子导航*/
 $(".sub_menu ul li").click(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   return false;
 })
/*参数设置*/
 $(".canshu .content ul li").click(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   var index=$(".canshu .content ul li").index($(this));
   $(".canshu .content .info").eq(index).show().siblings().hide();
 })
/*表格*/
 $(".canshu .content .tab tr:gt(0)").css({"background":"#eaeaea"})
 $(".canshu .content .tab tr:odd").css("background","#fff")
 
 $(".canshu .content .tab tr:gt(0)").hover(function(){
   $(this).addClass("hover");
 },function(){
   $(this).removeClass("hover");
 })

})