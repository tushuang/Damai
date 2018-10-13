
//主要入口文件

// import Router from './router/index';
import  main_controller from './controllers/index_controllers/main_controller';
//调用render的渲染函数 
main_controller.render(); 

 
//开启陆由工具
// const router = new Router('#/content');
// window.router = router;    //将router设为全局变量 方便在其他文件里使用
// router.init(); 