

import main_artist_template from '../../views/index_view/main_artist_view.html';
import main_artist_model from '../../models/index_models/main_model'; 

const render = async ()=>{
    const _template = Handlebars.compile( main_artist_template);
    const main_artist_data = await main_artist_model.main_artist_list();
    let _html = _template();
    await $('.artist-list').html(_html);
    console.log(main_artist_data);
    var mySwiper = new Swiper ('.artist-list .swiper-container', {
        direction: 'horizontal', 
        freeMode:true,
        slidesPerView :'auto',
        spaceBetween:20,
    });      
}

export default {
    render
}  