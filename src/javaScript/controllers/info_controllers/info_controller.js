//引入数据，ajax获取数据
import info_list_model from '../../models/info_models/info_model';
//引入模板引擎
import info_main_template from '../../views/info_view/info_main_view.html';
//各种点击事件
import info_tapEvents from './info_tapEvents';

const render = async ()=>{
    let info_index;
    let pid;
    let info_id = localStorage.getItem('info_id');
    if (info_id) {
        
        pid = parseInt(info_id);
    }else{
        info_index = 0;
    }
    //将模板引擎转化为字符串
    let info_template = Handlebars.compile(info_main_template);
    //请求数据
    let info_list_data =await  info_list_model.infoshow();
    //取数据的下标
    info_list_data.data.projectInfo.forEach((item,index) =>{
        if(item.id == pid){
            info_index = index;
            return info_index;
        }
    });
    let _info_list = info_list_data.data.projectInfo[info_index];
    //在模板引擎中填写数据
    let info_html = info_template({ _info_list});
    //填入数据
    $('.root').html(info_html);
    //各种点击事件
    info_tapEvents.render();
    
    //存储localstory
    $('.buy-button').on('tap',function(){

        if(localStorage.getItem("loginuser")){
            let ddid = $(this).find('h2').attr('ddid');
            let ddpId = $('.pro-item_img img').attr('pid');
            let ddNum = $('.buy-card_num input').attr('value');
            let ddMonney = $('.buy-card_allprice h3').html();
    
            let ddImg = $('.pro-item_img img').attr('src');
            let ddCity= $('.pro-item_city').html() ;
            let ddshowTime = $('.show-time').html();
            let ddName = $('.pro-item_detail').html();
    
    
            let ddObj = {
                "dd_id":ddid,
                "dd_pid":ddpId,
                "dd_num":ddNum,
                "dd_money":ddMonney,
                "dd_img":ddImg,
                "dd_city":ddCity,
                "dd_showtime":ddshowTime,
                "dd_name":ddName
            };
            let getlocal_dd = localStorage.getItem('dd_str');
            if (!getlocal_dd) {
                let ddArr = [];
                ddArr.push(ddObj);
                let ddStr = JSON.stringify(ddArr);
                localStorage.setItem('dd_str',ddStr);
            }
            else{
                let arr = JSON.parse(getlocal_dd);
                arr.unshift(ddObj);
                let ddStr = JSON.stringify(arr);
                localStorage.setItem('dd_str',ddStr);         
            }
            router.switch("#/order");
        }else{
            router.switch("#/login");
        }
       
    })      

}

export default {
    render
}