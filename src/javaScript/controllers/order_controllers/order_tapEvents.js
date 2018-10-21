const render =()=>{

    let sum=0;
    let a=0;
    let input_arr = $(".orderlist .singly-check");
    let order_str = localStorage.getItem('dd_str');
    let order_arr =JSON.parse(order_str);

    //单选
    $('.orderlist ').on('click','.singly-check',function(){
        a=parseInt($(this).parent().parent().parent().find('.order_item__price').html());
        if( $(this).is(':checked')){
            sum+=a;
            $(this).parent().parent().find('.order_item_title_right').removeClass('disabled')
        }else{
            sum-=a;
            $(this).parent().parent().find('.order_item_title_right').addClass('disabled')
        }

        //zeptro中each，如果函数返回false，则遍历结束
        input_arr.each(function(index,item){  
            if($(item).is(':checked')==false){
                $('.whole-check').prop('checked',false);
                return false;
            }else{
                $('.whole-check').prop('checked',true);
            }
        });
        setTimeout(()=>{
            $('.order_footer_c span').html(sum);
        },0)
    })
   
    //全选
    $('.whole-check').on('click',function(){
        if( $(this).is(':checked')){
            input_arr.forEach(function(item){
                $(item).prop('checked',true);
                a=parseInt($(item).parent().parent().parent().find('.order_item__price').html());
                sum+=a;
                $('.order_footer_c span').html(sum);
            })
        }else{
            input_arr.forEach(function(item){
                $(item).prop('checked',false);
                sum=0;
                $('.order_footer_c span').html(sum);
            })
        }
    })
    
    //删除订单
    $('.orderlist').on('click','.order_item_title_right',function(){
        $(this).parent().parent().remove();
       
        //删localstrage里的数据
        let ddId = $(this).parent().find('p span').html();
        order_arr.forEach(function(item,index){
            if(item.dd_id == ddId){
                order_arr.splice(index,1);
                let str = JSON.stringify(order_arr);
                localStorage.setItem('dd_str',str);
                return false;
            }
        })      
        setTimeout(()=>{
            sum-=a;

            if (sum===0) {
                $('.whole-check').prop('checked',false);
            }
            $('.order_footer_c span').html(sum);
        },0);
        if (order_arr.length===0) {
            $('.orderlist').html('<h2>您还没有订单吆！</h2>');
        }     
    })    
}

export default {
    render  
}