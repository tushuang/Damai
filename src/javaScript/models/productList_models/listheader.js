
const listheader = ()=>{
    return $.ajax({
        url : "api/damai/product_list",
        success: (res)=>{
            return res;
        }
    })
}
const listlunbo = ()=>{
    return $.ajax({
        url : "api/damai/product_lunbo",
        success: (res)=>{
            return res;
        }
    })
}
const listmain = ()=>{
    return $.ajax({
        url : "api/damai/product_main",
        success: (res)=>{
            return res;
        }
    })
}
export default {
    listheader,
    listlunbo,
    listmain
}