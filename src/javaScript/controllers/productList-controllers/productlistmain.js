

import listmain_template from "../../views/productList_view/listmain.html";
import listmain_models from "../../models/productList_models/listheader";
import BScroll from "better-scroll";
const render = ()=>{
    getlist();
}

let data = [];
let sta = false;
const getlist = async ()=>{
    await getdata();
    let _list = Handlebars.compile(listmain_template);
    // console.log(data,9099999);
    let tmp = _list({list : data});
    console.log(data);
    $(".product-main").html(tmp);
    hander();
}
const getdata = async()=>{
    let listdata = await listmain_models.listmain();
    data = listdata.data.currentCity;
}

const refrendata = async()=>{
    console.log(data,11111111);
    let listdata = await listmain_models.listmain();
    let lists = listdata.data.currentCity;
    data = [  ...data,...lists ] // 刷新，新数据放在前面
    let _list = Handlebars.compile(listmain_template);
    
    let tmp = _list({list : data});
    $(".product-main").html(tmp);
}
const hander = ()=>{
    let bscroll = new BScroll(".better-scroll",{
        scrollY:true,
        click:true,
        probeType:2
    });
    // bscroll.refresh();
   bscroll.on("scroll", ({  y }) => {
        // console.log(y,bscroll.maxScrollY);
        if(bscroll.maxScrollY - y > 0 && sta==false){
            // console.log("正在加载");
            $(".scroll-info__title").html("放手去加载");
           
            sta = true;
        }
    })

   bscroll.on('scrollEnd', async ({ x, y }) => {
        if ( bscroll.maxScrollY - y === 0 && sta ) {
            $(".scroll-info__title").html('正在加载')
            $(".scroll-info-bottom").addClass('loading')
           
            await  refrendata();;
            $(".scroll-info__title").html('上拉去加载')
            $(".scroll-info-bottom").removeClass('loading')
            bscroll.refresh();
        }
    })
}

export default {
    render
}