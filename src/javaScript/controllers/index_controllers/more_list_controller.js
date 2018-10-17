

import more_list_template from '../../views/index_view/more_list_view.html';
import more_list_model from '../../models/index_models/main_model'

const render = async ()=>{
    const _template = Handlebars.compile(more_list_template);
    const more_list_data = await more_list_model.more_list();
    let _html = _template({
        list:more_list_data.data.projectInfo
    });
    await $('.more-list ul').html($('.more-list ul').html() + _html);
}

export default {
    render
}