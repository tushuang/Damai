

// 实现路由工具

import routes from './route';

class Router {

    constructor({initial}){
        this.routes = routes,
        this.initial = initial  || '#/content'
    }
    init(){
        this.initialHash();
        this.listenrHash();
    }

    initialHash(){
        if(!location.hash){
            location.hash = this.initial;
        }
    }

    refresh(){  //根据地址栏的hash值来渲染页面 
        let hash = location.hash;
        if(!this.routes[hash]){
            this.routes[this.initial].render();
        }
        this.routes[hash].render();
        this.switchStyle();
    }

    switchHash(hash){
        location.hash = hash;
    }
    //根据地址栏来渲染底部图标的颜色
    switchStyle(){
        $('#footer span').each(function(){
            let hash = $(this).attr('hash')
            if ( hash == location.hash){
                $(this).addClass('tap');
            }else{
                $(this).removeClass('tap');
            }

        })
    }

    // 监听hash的变化
    listenrHash () {
        window.addEventListener('load', this.refresh.bind(this));  //页面加载完时 渲染一次
        window.addEventListener('hashchange',this.refresh.bind(this));
    }
}

export default Router;