
const configure_msite_list = () => {  //导航条
    return $.ajax({
        url:'/api/damai/configure_mite_list', //http:localhost:3000/damai
        success:(res)=>{
            return res;  
        }
    })
}

const artist_list = ()=>{  //艺人信息列表 
    return $.ajax({
        url:'/api/damai/artist_list',
        success:(res)=>{
            return res;  
        }
    })
}

const more_list = ()=>{  
    return $.ajax({
        url:'/api/damai/concert_list',
        // url:'/server/show/list',
        success:(res)=>{
            return res;  
        }
    })
}

export default {
    configure_msite_list,
    artist_list,
    more_list
}