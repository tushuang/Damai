
const render = ()=>{

    $('.root').on('tap','#info .project-desc',function(){
        buy_tap();
    })
    
    $('.root').on('tap','#info .button-group .pre-buy',function(){
        buy_tap();
    })
    
    $('.guanzhu').on('tap',function(){
        if($(this).attr('class')==='button-item button-small guanzhu'){
            $(this).addClass('pink')
        }
        else{
            $(this).removeClass('pink')
        }
    })
    let price = parseInt($('.buy-card_allprice h3').html());
    let num = 1;
    let money = 0;
    $('.root').on('tap','#info .buy-card_content .buy-card-price',function(){
        if ($(this).attr('class') === 'buy-card_content-button buy-card-price  checked') {
            $(this).removeClass('checked');
        }
        else{
            $(this).addClass('checked').siblings().removeClass('checked');
            price = parseInt($(this).find('span').html());            
            $('.buy-card_allprice h3').html(price);
            $('.buy-card_num input').attr('value',1);
            $('.reduce').addClass('disabled');
            num = 1
        }
    })
  
    //加
    $('.root').on('tap','#info .buy-card_num .add',function(){
        //let num = parseInt($('.buy-card_num').find('input').attr('value'));
        num+=1;
        money = price * num;
        $('.buy-card_num input').attr('value',num);
        $('.buy-card_allprice h3').html(money);
        if ($('.buy-card_num input').attr('value') > 1) {
            $('.reduce').removeClass('disabled')
        }       
    })

    //减
    $('.root').on('tap','#info .buy-card_num .reduce',function(){
        //let num = parseInt($('.buy-card_num').find('input').attr('value'));        
        num-=1;
        console.log(num,price);
        money = price * num;
        $('.buy-card_num input').attr('value',num);
        $('.buy-card_allprice h3').html(money);
        if ($('.buy-card_num input').attr('value') == 1) {
            $(this).addClass('disabled');
        }
    })

    function buy_tap(){
        let flag = true;
        
        $('#buy').css({'display':'flex'});
        $('#buy').animate({height:'11.333333rem'},500);
        $('.v-modal').css('display','block');
        $('#buy').tap(function(){flag=false});
        $('.v-modal').tap(function(){
            flag = true;
            if ( flag) {
                $('.v-modal').css('display','none');
                $('#buy').css({'display':'none','height':'0'});
            }
        })
        
    }
}

export default {
    render
}