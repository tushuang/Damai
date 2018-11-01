import citySite_template from '../../views/citySite/citySite.html'
import BScroll from 'better-scroll'
import header_controller from '../index_controllers/header_controller'
const render = async ()=>{
    const _template = Handlebars.compile(citySite_template);
     const _html = _template();
    await $('.root').html(_html);
    const _scroll = new BScroll('.city-wrapper',{
        probeType:2
    })
    
    $('li').on('tap',async function (){
        let _site = $(this).text();
        console.log($(this).text())
        localStorage.setItem('site',_site);
        location.hash = '#/index';
    })
}

export default { 
    render
}