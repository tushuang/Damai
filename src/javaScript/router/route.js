//通过控制控制器的渲染函数 来控制页面的渲染

//先引进不同的页面控制器
// import find_controller from '../controllers/find_controller';
// import mine_controller from '../controllers/mine_controller';
// import content_controller from '../controllers/home_content_controller';

// export default {    //每个文件只能有一个默认导出 
//     '#/find':find_controller,
//     '#/mine':mine_controller,
//     '#/content':content_controller
// }


import login_controller from "../controllers/login_controllers/login_controller";
import register_controller from "../controllers/register_controllers/register_controller";
import index_controller from "../controllers/index_controllers/header_controller";
import profile_controller from "../controllers/profile_controllers/profile_controllers";
import prodcut_controller from "../controllers/productList-controllers/productheader";
const routes = {
    "#/index" : index_controller,
    "#/login" : login_controller,
    "#/reg" : register_controller,
    "#/profile" : profile_controller,
    "#/product" : prodcut_controller
}

export  {
    routes
}
