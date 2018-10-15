

import main_nav_template from '../../views/index_view/main_nav_view.html'
import main_nav_model from '../../models/index_models/main_model'


const render = async ()=> {
    const _template = Handlebars.compile(main_nav_template);
    const main_nav_data = await main_nav_model.configure_msite_list();
    let _html = _template({
        list:main_nav_data.data.navigationList
    });
    await $('.main-nav').html(_html);
    console.log( main_nav_data);
}

export default {
    render
}