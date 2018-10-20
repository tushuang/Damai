

import  listlunbo_template from "../../views/productList_view/listlunbo.html";
import listlunbo_models from "../../models/productList_models/listheader";
import BScorll from "better-scroll";
const render =()=>{
    getlist();
   
}
const getlist = async ()=>{
    let listdata = await listlunbo_models.listlunbo();
    let _template =  Handlebars.compile(listlunbo_template);
    // console.log(listdata.data.artistProjectList)
    let _temp = _template({list : listdata.data.artistProjectList});
    $(".productlist-lunbo").html(_temp);
    swiper();
}
const swiper = ()=>{
     new Swiper(".listlunbo-main ",{
        direction: 'horizontal',
        freeMode:true,
        slidesPerView :'auto',
        spaceBetween:30,
        loop:false
    })
    
}
export default {
    render
}