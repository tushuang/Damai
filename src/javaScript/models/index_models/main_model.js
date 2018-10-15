
const configure_msite_list = () => {
    return $.ajax({
        url:'/api/damai/configure_mite_list', //http:localhost:3000/damai
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}

const artist_list = ()=>{
    return $.ajax({
        url:'/api/damai/artist_list',
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}
//  url: '/lagou/listmore.json?pageNo='+ pageNo +'&pageSize=15'
const more_list = ()=>{
    return $.ajax({
        url:'/api/damai/concert_list',
        success:(res)=>{
            return res;  //请求到的数据
        }
    })
}

export default {
    configure_msite_list,
    artist_list,
    more_list
}