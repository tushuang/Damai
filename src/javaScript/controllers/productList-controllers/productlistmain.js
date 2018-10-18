

import listmain_template from "../../views/productList_view/listmain.html";
import listmain_models from "../../models/productList_models/listheader";
import better_scroll from "better-scroll";
const render = ()=>{
    getlist();
}

const getlist =async ()=>{
    let listdata =await listmain_models.listmain();
    console.log(listdata.data.currentCity,123);
    let _list = Handlebars.compile(listmain_template);
    let tmp = _list({list : listdata.data.currentCity});
    $(".product-main").html(tmp);
}

const scroll = ()=>{

}
export default {
    render
}