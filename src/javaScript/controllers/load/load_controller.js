import load_template from '../../views/load/load.html'

const render = ()=>{
    $('.root').hide()
    console.log('1');
    var _template = Handlebars.compile(load_template)
    var _html = _template() 
    $('.load').html(_html)
} 

export default {
    render
}   