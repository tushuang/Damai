
//主要入口文件

import Router from './router';
import  head_controller from './controllers/index_controllers/header_controller';
import info_changePage from './controllers/info_controllers/info_changePage';
// import Router from './router/index';

//调用render的渲染函数 
head_controller.render();
info_changePage.render();
//开启陆由工具
const router = new Router('#/index');
window.router = router;    //将router设为全局变量 方便在其他文件里使用
router.init(); 