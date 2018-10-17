
const listheader = ()=>{
    return $.ajax({
        url : "api/damai/product_list",
        success: (res)=>{
            return res;
        }
    })
}
export default{
    listheader
}