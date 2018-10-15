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
     
    if($('html').attr('data-dpr')==3){
        var target_num = -2077
    }else if( $('html').attr('data-dpr')==2 ){
        var target_num = -1256
    }
    _scroll.on('scroll',({x,y})=>{
        
        if(y<target_num){
          $('.more-nav_top').css({
              'display':'block'
          })
        }else{
            $('.more-nav_top').css({
                'display':'none'
            })
        }

        if(y<-3000){
            $('.to-top').css({
                'display':'block'
            })
        }else{
            $('.to-top').css({
                'display':'none'
            })
        }
    })
    _scroll.on('scrollEnd',({x,y})=>{
        if(y<target_num){
            $('.more-nav_top').css({
                'display':'block'
            })
          }else{
            $('.more-nav_top').css({
                'display':'none'
            })
          }
          if(y<-3000){
            $('.to-top').css({
                'display':'block'
            })
        }else{
            $('.to-top').css({
                'display':'none'
            })
        }
    })
    $('.to-top').on('tap',function(){
        console.log(0);
        $('body,html').scrollTop(0);
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
    $('.more-nav_top').on('tap','li',function(e){
        let _target = this.children[1];
        let _target_i = this.children[0];
        let _index = $(this).index();
        if($(_target).css('display') === 'none'){
            $(_target).css({
                'display':'block',
                "color":"#222"
            })
            $(this).css({
                "color":"#ff1268"
            })
            $(this).siblings().css({
                "color":"#222"
            })
            $(_target_i).removeClass('icon-jiantouxia').addClass('icon-jiantoushang');
            _scroll.disable();
        }else{
            $(_target).css({
                'display':'none',
                "color":"#222"
            })
            $(this).css({
                "color":"#222"
            })
            $(this).siblings().css({
                "color":"#222"
            })
            $('.more-nav_item i').removeClass('icon-jiantoushang').addClass('icon-jiantouxia');
            $(_target_i).removeClass('icon-jiantoushang').addClass('icon-jiantouxia');
            _scroll.enable();
        }
        $(this).siblings().children('.list_container').css({
            'display':'none'
        })
        $('.more-nav_top .more-nav_ul .more-nav_item').eq(2).css({
            "color":"#ff1268" 
        })
        
        //元素显隐也会影响scroll的执行
        _scroll_nav.refresh(); 
    })
    $('.list_container ul li').on('tap',function(){
        console.log(this);
        $(this).css({
            "color":"#ff1268"
        })
    })
    // $('.more-nav').on('tap','li',function(){
    //     $('.more-nav').css({
    //         'display':'none'
    //     })
    //     if($(this).index() == 0 || $(this).index() == 1 ){
    //         $('.more-nav_top').css({
    //             'display':'block'
    //         })
    //         var _target =  $('.more-nav_top .more-nav_item').get($(this).index()).children[1];
    //        $(_target).css({
    //         'display':'block',
    //         'color':"#222"
    //        })
    //        $('.more-nav_top .more-nav_item').eq($(this).index()).css({
    //         "color":"#ff1268" 
    //        })
    //     }
    //     if($(_target).css('display')=='none'){
    //         $('.more-nav_top').css({
    //             'display':'none'
    //         })
    //     }
    //     _scroll_nav.refresh(); 
    // })
    document.body.onmousewheel = function (e) {
       //阻止默认的鼠标滚轮事件
        e.preventDefault?e.preventDefault():e.returnValue=false;
    }
}
  
export default {
    render
}  