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
/*全选*/ 
 $('#quanxuan').toggle(function(){
      $(':checkbox').attr('checked',true)
  },function(){
        $(':checkbox').attr('checked',false)
 })
 
 $(".canshu .content .tab tr").hover(function(){
   $(this).addClass("hover");
 },function(){
   $(this).removeClass("hover");
 })


})