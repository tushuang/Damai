
import main_slideshow_view from '../../views/index_view/main_slideshow_view.html'
import main_slideshow_model from '../../models/index_models/main_model'

const render = async ()=>{
    let _template = Handlebars.compile(main_slideshow_view);
    const main_slideshow_data = await main_slideshow_model.configure_msite_list();
     let _html = _template({
         list:main_slideshow_data.data.focusPicList
     });
    await $('.main-slideshow').html(_html);
    var mySwiper = new Swiper ('.main-slideshow .swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay : {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        } 
      });   
}

export default {
    render
}