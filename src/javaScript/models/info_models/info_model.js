const infoshow = (pid) => {
    return $.ajax({
        url:'/api/damai/concert_list', //http:localhost:3000/damai
        success: (res)=>{
            return res;  //请求到的数据
        }
    })
}


export default {
    infoshow
}