
const profile_template = require("../../views/profile_view/profile.html")

const render = ()=>{
    $(".root").html(profile_template);
    hander();
}
const hander =()=>{
    $(".pro-order").on("tap",()=>{
        if(localStorage.getItem("loginuser")){
            router.switch("#/order");
        }else{
            $(".profile-back").css({"display":"block","background":"#ff1268","color":"#fff"});
            $(".profile-back").html("请先登录");
            $(".profile-back").on("tap",()=>{
                router.switch("#/login")
            })
        }
    })


    $(".pro-login").on("tap",()=>{
        router.switch("#/login")
    })
    $(".pro-reg").on("tap",()=>{
        router.switch("#/reg")
    })

    let userlogin = localStorage.getItem("loginuser");
    if(userlogin != null){
        $(".pro-heade-right").css({"display":"none"});
        $(".profile-back").css({"display":"block"});
        var user = JSON.parse(userlogin);
        var username = user.phone;
        $(".profile-name").html(username);
    }else{
        $(".profile-back").css({"display":"none"});
    }
    $(".profile-back").on("tap",()=>{
        localStorage.removeItem("loginuser");
    })
    
    
}
export default {
    render
}