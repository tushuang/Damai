

import  listlunbo_template from "../../views/productList_view/listlunbo.html";
import listlunbo_models from "../../models/productList_models/listheader";

const render =()=>{
    getlist();
   
}
const getlist = async ()=>{
    let listdata = await listlunbo_models.listlunbo();
    let _template =  Handlebars.compile(listlunbo_template);
    // console.log(listdata.data.artistProjectList)
    let _temp = _template({list : listdata.data.artistProjectList});
    $(".productlist-lunbo").html(_temp);
}

export default {
    render
}