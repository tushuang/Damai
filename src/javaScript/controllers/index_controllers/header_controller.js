import  main_controller from './main_controller'
import  header_template from '../../views/index_view/header_view.html'
import BScroll from 'better-scroll'
import more_list_template from './more_list_controller'

const render = async ()=>{
   
    await $('.root').html(header_template);
    await main_controller.render();
    
    //不能用$选择器 
    const _scroll = new BScroll('.main',{
        probeType:2,
        pullUpLoad: {
            threshold: -50,
            stop: 30
        }
    });

    //下拉刷新数据 finishPullDown()
    // _scroll.on('pullingUp',async (e)=>{
    //     $('.pullReflash').removeClass('animate');
    //     _scroll.refresh();
    //     _scroll.finishPullUp(); //没有的话 只会刷新一次
    // })



    //通过判断屏幕的dpr来确定nav的位置
    if($('html').attr('data-dpr')==3){
        var target_num = -2077
    }else if( $('html').attr('data-dpr')==2 ){
        var target_num = -1256
    } 

    //让导航固定在顶部
    var reflash = false;
    _scroll.on('scroll',async({x,y})=>{
        if(y <=_scroll.maxScrollY-250){
            $('.pullReflash span').html('放手刷新');
            $('.pullReflash i').css({
                'display':'none'
            })
            reflash = true;
        }
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
    //滚动结束时 计算位置后判断导航条是否显示
    _scroll.on('scrollEnd',async({x,y})=>{
         if(y==_scroll.maxScrollY && reflash ){
            $('.pullReflash span').html('');
            $('.pullReflash i').css({
                'display':'block'
            })
            $('.pullReflash i').addClass('animate');
            reflash = false;
            await more_list_template.render();
           
            $('.pullReflash span').html('上拉刷新');
            $('.pullReflash i').css({
                'display':'none'
            })
            $('.pullReflash i').removeClass('animate');
            
        }
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
    //回到顶部
    $('.to-top').on('tap',async function(){
        $('.more-nav_top').css({
            'display':'none'
        })
        _scroll.scrollTo(0, 0, 300)
    })
    //初始化导航条里的滚动效果
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
    //点击导航条弹出选项
    $('.more-nav_top').on('tap','li.more-nav_item',function(e){
        let _target = this.children[2];
        let _target_i = this.children[1];
        if($(_target).css('display') === 'none'){
            $(_target).css({
                'display':'block',
                "color":"#222"
            })
            $(this).css({
                "color":"#ff1268"
            })
            // $(this).siblings().css({
            //     "color":"#222"
            // })
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
        $(this).css({
            "color":"#ff1268" 
        })
        $('.more-nav_top .more-nav_ul .more-nav_item').eq(2).css({
            "color":"#ff1268" 
        })
        
        //元素显隐也会影响scroll的执行
        _scroll_nav.refresh(); 
        _scroll.refresh();
    })

    $('.list_container div ul li').on('tap',function(){
        const _target_li = $(this).parent().parent().parent().parent();
        $(this).css({
            "color":"#ff1268"
        })
        $(this).siblings().css({
            "color":"#222"
        })
        //替换li的名字
        var classity = $(this).children().html();
        _target_li.children().eq(0).text(classity);
        $('.more-nav ul li').eq(_target_li.index()).children().eq(0).text(classity);
        $('.more-nav ul li').eq(_target_li.index()).css({
            "color":"#ff1268"
        })
        
        $('.more-nav ul li').eq(_target_li.index()).siblings().css({
            "color":"#222"
        })
        $('.more-nav ul li').eq(2).css({
            "color":"#ff1268"
        })
        //显示和隐藏i
        $(this).children().eq(1).css({
            'display':'block'
        })
        for(var i=1;i<16;i+=2){
            $(this).siblings().children().eq(i).css({
                'display':'none'
            }) 
        }
    })
    $('.more-nav').on('tap','li',function(){
        if($(this).index() == 0 || $(this).index() == 1 ){
            _scroll.scrollTo(0, target_num-1, 300)
            var _target =  $('.more-nav_top .more-nav_item').eq($(this).index()).children().eq(2);
            _target.css({
                'display':'block',
            })
        }
    })

    document.body.onmousewheel = function (e) {
       //阻止默认的鼠标滚轮事件
        e.preventDefault?e.preventDefault():e.returnValue=false;
    }
    console.log($('.header-icon__site').children().eq(0).children().eq(1))
    $('.header-icon__site').children().eq(0).children().eq(1).text(localStorage.getItem('site'))

}
  
export default {
    render
}  