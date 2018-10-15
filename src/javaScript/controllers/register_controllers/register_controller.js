import reg_template from "../../views/register_view/register.html"
const render = ()=>{
    $(".root").html(reg_template);
    hander();
}
const hander =()=>{
    let numstr,reg,pwd;
    var use = localStorage.getItem("user");//获得cookie中已经存在的用户信息
    var user = JSON.parse(use);//
    //处理注册的逻辑,验证手机格式和密码输入格式
    $("#phone-num").on("click",()=>{
        $(".phone-num-line").css({"display":"block"});
    })
    $("#phone-num").on("blur",()=>{
        $(".phone-num-line").css({"display":"none"});
        let num = $("#phone-num").val();
         numstr = num.split("");
        if(numstr.length!=11){
            $(".text-msg").css({"display":"block"})
            $(".text-msg").html("请输入正确的手机号码");
        }else{
            $(".text-msg").css({"display":"none"})
        }

        if($("#phone-num").val()==="" && $("#phone-pwd").val() === ""){
            $(".text-msg").css({"display":"none"});
         }
    })

    $("#phone-pwd").on("click",()=>{
        $(".phone-pwd-line").css({"display":"block"});
        $(".text-msg").css({"display":"block"})
        $(".text-msg").html("密码必须符合由数字,字母,至少其中两种组成，且长度不小于8，同时第一位不能为数字");
    })
    $("#phone-pwd").on("blur",()=>{
        $(".text-msg").css({"display":"none"})
        $(".phone-pwd-line").css({"display":"none"});
         pwd = $("#phone-pwd").val();
         reg=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/;
        if(reg.test(pwd)===false){
            $(".text-msg").css({"display":"block"})
            $(".text-msg").html("密码格式不正确");
        }
         if($("#phone-num").val()==="" && $("#phone-pwd").val() === ""){
            $(".text-msg").css({"display":"none"});
         }
    })

   
    $(".reg-btn").on("click",()=>{
        var phone =  $("#phone-num").val();
        var userlist = [];
        var usernumlist = [];
            if(user == null){
            }else{
                user.forEach(item => {
                    userlist.push(item);
                });
            }
            userlist.forEach((item)=>{
                usernumlist.push(item.phone);
            })
        if(numstr.length!=11){
            $(".text-msg").css({"display":"block"})
            $(".text-msg").html("请输入正确的手机号码");
        }else if(reg.test(pwd)==false){
            $(".text-msg").css({"display":"block"})
            $(".text-msg").html("请输入正确的密码格式");
        }else if(numstr.length==11 && reg.test(pwd)==true){
            if(usernumlist.indexOf(phone)==-1){
                $(".reg-btn").attr({"href":"#/login"})
                //存cookie值，用localStroage
                var obj = {
                    phone : phone,
                    pwd : pwd
                }
                userlist.push(obj);
                // console.log(userlist);
                localStorage.setItem("user",JSON.stringify(userlist));
            }else{
                $(".text-msg").css({"display":"block"})
                $(".text-msg").html("该手机号码已注册过");
            }
           
        }
    })
    
}
export default {
    render
}