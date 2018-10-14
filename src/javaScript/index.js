
//主要入口文件

// import Router from './router/index';
import  main_controller from './controllers/index_controllers/main_controller';
import BScroll from 'better-scroll'

//调用render的渲染函数 
const render = async ()=>{
    await main_controller.render();
    //不能用$选择器
    const _scroll = new BScroll('.main',{
        probeType:2
    });
    _scroll.on('scroll',({x,y})=>{
        console.log(y<-1277);
        if(y<-1277){
          $('.more-nav_top').css({
              'display':'block'
          })
          $('.more-nav').css({
              'display':'none'
          })
        }else{
            $('.more-nav_top').css({
                'display':'none'
            })
            $('.more-nav').css({
                'display':'block'
            })
        }
    })
    _scroll.on('scrollEnd',({x,y})=>{
        if(y<-1277){
            $('.more-nav_top').css({
                'display':'block'
            })
            $('.more-nav').css({
                'display':'none'
            })
          }
    })
    document.body.onmousewheel = function (e) {
       //阻止默认的鼠标滚轮事件
        e.preventDefault?e.preventDefault():e.returnValue=false;
    }
}
render();
 
//开启陆由工具
// const router = new Router('#/content');
// window.router = router;    //将router设为全局变量 方便在其他文件里使用
// router.init(); 