import  main_controller from './main_controller'
import  header_template from '../../views/index_view/header_view.html'
import BScroll from 'better-scroll'

const render = async ()=>{
    $('.root').html(header_template);
    await main_controller.render();
    //不能用$选择器 
    const _scroll = new BScroll('.main',{
        probeType:2
    });
    
    _scroll.on('scroll',({x,y})=>{
        if(y<-1100){
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
        if(y<-1100){
            $('.more-nav_top').css({
                'display':'block'
            })
            $('.more-nav').css({
                'display':'none'
            })
          }
    })

    const scroll_container = $('.better-scroll_container');
    //不能同时初始化两个元素
    const _scroll_nav = new BScroll(scroll_container.get(0),{
        click:true,
        bounce:false
    });
    new BScroll(scroll_container.get(1),{
        click:true,
        bounce:false
    });
    let display_contorller = true;
    $('.more-nav_top').on('tap','li',function(e){
        let _target = this.children[1];
        
            $(_target).css({
                'display':'block',
                "color":"#222"
            })
            display_contorller = false;
      
        
        $(this).siblings().children('.list_container').css({
            'display':'none'
        })
        $(this).css({
            "color":"#ff1268"
        })
        $(this).siblings().css({
            "color":"#222"
        })
        $('.more-nav_top .more-nav_ul .more-nav_item').eq(3).css({
            "color":"#ff1268" 
        })
        //元素显隐也会影响scroll的执行
        _scroll_nav.refresh(); 
    })
    document.body.onmousewheel = function (e) {
       //阻止默认的鼠标滚轮事件
        e.preventDefault?e.preventDefault():e.returnValue=false;
    }
}
  
export default {
    render
}  