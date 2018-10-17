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
import index_contrller from "../controllers/index_controllers/header_controller";
import info_controller from "../controllers/info_controllers/info_controller";
import info_changePage from "../controllers/info_controllers/info_changePage";
const routes = {
    "#/index" : index_contrller,
    "#/login" : login_controller,
    "#/reg" : register_controller,
    "#/info" : info_controller,
    "#/info_changePage" : info_changePage
}

export  {
    routes
}
