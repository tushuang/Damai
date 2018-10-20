//引入数据，ajax获取数据
import info_list_model from '../../models/info_models/info_model';
//引入模板引擎
import info_main_template from '../../views/info_view/info_main_view.html';
//各种点击事件
import info_tapEvents from './info_tapEvents';

const render = async (pid)=>{
    let pindex = 0;
    if (!pid){
        pindex = 0;
    }
    //将模板引擎转化为字符串
    let info_template = Handlebars.compile(info_main_template);
    //请求数据
    let info_list_data =await  info_list_model.infoshow();
    //具体的某个数据
    info_list_data.data.projectInfo.forEach((item,index) =>{
        if(item.id == pid){
            pindex = index;
            return pindex;
        }
    });
    let _info_list = info_list_data.data.projectInfo[pindex];
    //在模板引擎中填写数据
    let info_html = info_template({ _info_list});
    //填入数据
    $('.root').html(info_html);

    info_tapEvents.render();
    
    //存储localstory
    
    $('.buy-button').on('tap',function(){
        let ddid = $(this).find('h2').attr('ddid');
        let ddpId = $('.pro-item_img').find('img').attr('pid');
        let ddNum = $('.buy-card_num').find('input').attr('value');
        let ddMonney = $('.buy-card_allprice h3').html();
        let ddObj = {dd_id:ddid,dd_pid:ddpId,dd_num:ddNum,dd_money:ddMonney};

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

            // arr.forEach(item=>{
            //     if (item.dd_pid === ddpId) {
            //         console.log('yes')
            //         console.log(item.dd_pid+'&&&&&&'+ddpId);
            //         item.dd_num+=parseInt(ddNum);
            //         let ddStr = JSON.stringify(arr);
            //         localStorage.setItem('dd_str',ddStr);
            //         return;
            //     }
            //     else{
            //         console.log('no');
                   
            //     }
            // })           
        }
    })      
}

export default {
    render
}