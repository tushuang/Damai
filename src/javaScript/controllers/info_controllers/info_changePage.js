// //引入数据，ajax获取数据
// import info_list_model from '../../models/info_models/info_model';
// //引入模板引擎
// import info_main_template from '../../views/info_view/info_main_view.html';

import info_controlle from './info_controller';

const render = ()=>{
     

    $('.root').on('tap','.more-list ul li',function(){
    
        let pid = $(this).attr('pid');
        router.switch("#/info_changePage");
        console.log(location.hash);
        info_controlle.render(pid);

    })

   
} 


export default {
    render
}