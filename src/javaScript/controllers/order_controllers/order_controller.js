//引入模板引擎
import order_main from '../../views/order_view/order.html';
//引入处理模板的模块
import order_main_tem from './order_controller_tem'

const render = ()=>{
    order_main_tem.render();
    $('.root').html(order_main);
}

export default {
    render
}