import main_template from '../../views/index_view/main_view.html';
import  main_slideshow_controller from './main_slideshow_controller';
import main_nav_controller from './main_nav_controller'
import main_artist_controller from './main_artist_controller'
import more_list_controller from './more_list_controller'
import header_controller from './header_controller'

const render = async ()=> {
    $('main .content').html(main_template);
    //调用render的渲染函数 
    await main_slideshow_controller.render(); 
    await main_nav_controller.render();
    await main_artist_controller.render();
    await more_list_controller.render();
}

export default {
    render
} 