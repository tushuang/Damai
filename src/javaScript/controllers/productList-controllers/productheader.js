

import productheader from "../../views/productList_view/listheader.html";
import list_models from "../../models/productList_models/listheader"
const render = ()=> {
    //利用handelbars将字符串转化为可编译的函数
    getList();
    
}


const getList = async()=>{
    let msg = await list_models.listheader();
    console.log(msg);
    let _template = Handlebars.compile(productheader);
    let _html = _template(msg);
    $(".root").html(_html);
    hander();
}
const hander =()=>{
    let mySwiper = new Swiper(".swiper2-container",{
        autoplay : true,
        loop: true,
        autoplay : true,
        pagination :{//分页器
            el : ".swiper-pagination"
        }
    })
}
export default {
    render
}