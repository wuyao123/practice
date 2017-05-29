$(document).ready(function(){

  //公司浮动效果
  $(".tupian_i li").mouseover(function(){
    $(this).children("img").next(".heihezi").removeClass("yincang").addClass("xianshi");
  }).mouseout(function(){
    $(this).children("img").next(".heihezi").removeClass("xianshi").addClass("yincang");

  });

  //职位变色
  $(".yitiao").mouseover(function(){
     $(this).removeClass("yuanse").addClass("xinse");
   }).mouseout(function(){
     $(this).removeClass("xinse").addClass("yuanse");

   })
 

    //点击事件
    $(".nav li a").click(function(){
    	$(this).addClass("clickcl").parent("li").siblings("li").children("a").removeClass("clickcl").removeClass("moren")
    })

    //职位表
    $(".zhiweibiao li").mouseover(function(){

    	$(this).children("a").addClass("se")
    }).mouseout(function(){
    	$(this).children("a").removeClass("se")
    });
    //切换登陆和注册
    $("#regist").click(function(){
      $("#regist").addClass("active");
      $("#login").removeClass("active");
      $("#form_regist").css("display","block");
      $("#form_login").css("display","none");

    });
    $("#login").click(function(){
      $("#login").addClass("active");
      $("#regist").removeClass("active");
      $("#form_login").css("display","block");
      $("#form_regist").css("display","none");
    });
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;
    var validate = {
        phoneNum_func:function(){
          var phoneNum =  $(".phone_num input").val();
          if(!phoneNum){
            $(".phone_num .error").css("visibility","visible");
          }else{
             $(".phone_num .error").css("visibility","hidden");
             flag1 = true;
          }
        },
        password_func:function(){
          var password =  $(".password input").val();
          var patrn = /^(\w){6,16}$/;
          if(!patrn.exec(password)){
            $(".password .error").css("visibility","visible");
          }else{
            $(".password .error").css("visibility","hidden");
            flag2 = true;
          }
        },
        yanzhengma_func:function(){
          var yanzhengma =  $(".yanzhengma input").val();
          if(!yanzhengma){
            $(".yanzhengma .error").css("visibility","visible");
          }else{
            $(".yanzhengma .error").css("visibility","hidden");
            flag3 = true;
          }
        },
        jingyan_func:function(){
          var jingyan =  $(".jingyan input:checked").val();
          if(jingyan == null || jingyan == undefined){
            $(".jingyan .error").css("visibility","visible");
          }else{
            if(jingyan == 1){
              $(".jingyan .yes").css("background","#FF4300").css("color","#fff");
              $(".jingyan .no").css("background","#F4F4F4").css("color","#000");
            }else{
              $(".jingyan .no").css("background","#FF4300").css("color","#fff");
              $(".jingyan .yes").css("background","#F4F4F4").css("color","#000");
            }
            $(".jingyan .error").css("visibility","hidden");
            flag4 = true;
          }
        }
    };
    //验证手机号
    $(".phone_num input").keyup(function(){
      validate.phoneNum_func();
    });
    $(".phone_num input").mousedown(function(){
      validate.phoneNum_func();
    })
    //验证验证码
    $(".yanzhengma input").keyup(function(){
      validate.yanzhengma_func();
    });
    $(".yanzhengma input").mousedown(function(){
      validate.yanzhengma_func();
    })
    //验证密码
    $(".password input").keyup(function(){
      validate.password_func();
    });
    $(".password input").mousedown(function(){
      validate.password_func();
    });
    //验证工作经验
     $(".jingyan input").click(function(){
        //$(".jingyan .error").css("visibility","hidden");
        validate.jingyan_func();
    });
    //表单提交时验证
    $(".regist_submit input").click(function(){
      validate.phoneNum_func();
      validate.yanzhengma_func();
      validate.password_func();
      validate.jingyan_func();
      if(flag1&&flag2&&flag3&&flag4){
        $("#form_regist").submit();
      }else{
        return false;
      }
    });


})

