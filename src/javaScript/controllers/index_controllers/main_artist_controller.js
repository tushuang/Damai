

import main_artist_template from '../../views/index_view/main_artist_view.html';
import main_artist_model from '../../models/index_models/main_model'; 

const render = async ()=>{
    const _template = Handlebars.compile( main_artist_template);
    const main_artist_data = await main_artist_model.artist_list();
    let artist_list = main_artist_data.data.artistProjectList;
    let artist_site_list = [];
    console.log(main_artist_data,$.each);
    $.each(artist_list,function(index,item){
        var _site_list = item.citySet;
        $.each(_site_list,function(i,n){
            if(i !== _site_list.length-1){
                _site_list[i] = n + "/"
            }
            if(i > 3){
                _site_list[2] = _site_list[2]
                _site_list[3] = "..."
                _site_list[i] = ""
                return
            }
        })
        artist_site_list.push(_site_list);
    })
    let _html = _template({
        list:artist_list
    });
    await $('.artist-list').html(_html);
    var mySwiper = new Swiper ('.artist-list .swiper-container', {
        direction: 'horizontal', 
        freeMode:true,
        slidesPerView :'auto',
        spaceBetween:10,
    });      
}

export default {
    render
}  