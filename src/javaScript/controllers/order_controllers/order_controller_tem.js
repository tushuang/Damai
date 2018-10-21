import order_main_tem from '../../views/order_view/order_tem.html';
//引入点击事件模块
import order_taps from './order_tapEvents'

const render =async ()=>{
   //JSON.parse(order_ddStr)返回的也是一个promise对象
   let order_ddStr = localStorage.getItem('dd_str');
   let order_data =await JSON.parse(order_ddStr);
   let order_arr = Array.from(order_data);
   if (order_arr.length!=0) {
       let order_tem_str = Handlebars.compile(order_main_tem);             
        let orfer_html = order_tem_str({list:order_arr});            
        $('.orderlist').html(orfer_html);
        order_taps.render();
   }else{
        $('.orderlist').html('<h2>您还没有订单吆！</h2>');
   }   
}


export default {
    render
}