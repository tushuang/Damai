

import login_template from "../../views/login_view/login.html";
const render = ()=>{
    $(".root").html(login_template);
    hander();
}
const hander = ()=>{//处理业务逻辑
    var phone_str;
    var use = localStorage.getItem("user");
    if(use!=null){
        var user = JSON.parse(use);

        var use_phone = [];
        var use_pwd = [];
        user.forEach(item => {
            use_phone.push(item.phone);
            use_pwd.push(item.pwd);
        });
        $(".login-btn").on("touchstart",()=>{
            var phone_num = $(".login-phone").val();
            var phone_pwd = $(".login-pwd").val();
            phone_str = phone_num.split("");
            if(phone_str.length==11){
                if(use_phone.indexOf(phone_num)==-1){
                    $(".login-text-msg").css({"display" : "block"});
                    $(".login-text-msg").html("你输入的手机号还未注册");
                }else{
                    var index = use_phone.indexOf(phone_num);
                    if(phone_pwd!=use_pwd[index]){
                        $(".login-text-msg").css({"display" : "block"});
                        $(".login-text-msg").html("你输入的密码有误");
                    }else{
                        $(".login-text-msg").css({"display" : "none"});
                        router.switch("#/profile");
                        var loginuser = {
                            phone : phone_num,
                            pwd : phone_pwd
                        }
                        localStorage.setItem("loginuser",JSON.stringify(loginuser));
                    }
                }
            }else{
                $(".login-text-msg").css({"display" : "block"});
                $(".login-text-msg").html("你输入的手机号码有误");
            }
        })
        $(".login-btn").on("touchsend",()=>{
            $(".login-text-msg").css({"display" : "none"});
        })
    }else{
        $(".login-btn").on("click",()=>{
            var phone_num = $(".login-phone").val();
            phone_str = phone_num.split("");
            if(phone_str.length==11){
                $(".login-text-msg").css({"display" : "block"});
                $(".login-text-msg").html("你输入的手机号码还未注册");
            }else{
                $(".login-text-msg").css({"display" : "block"});
                $(".login-text-msg").html("你输入的手机号码有误");
            }
        })
        $(".login-btn").on("touchend",()=>{
            $(".login-text-msg").css({"display" : "none"});
        })
    }
    $(".login-phone").on("focus",()=>{
        $(".phone-num-line").css({"display":"block"});
  })
  $(".login-pwd").on("focus",()=>{
      $(".phone-pwd-line").css({"display":"block"});
  })
  $(".login-phone").on("blur",()=>{
          $(".phone-num-line").css({"display":"none"});
  })
  $(".login-pwd").on("blur",()=>{
      $(".phone-pwd-line").css({"display":"none"});
  })
}


export default {
    render
}