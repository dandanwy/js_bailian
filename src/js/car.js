/* 
* @Author: Marte
* @Date:   2017-11-18 18:56:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-19 13:33:48
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
});

require(['common','ajax','jquery'],function(com,oAjax,$){
    // 获取cookie
    var datalist = Cookie.get('goodslist');

    if(datalist){
        datalist = JSON.parse(datalist);
    }

    // 购物车商品总价初始化
    var totle = 0;

    // 将商品写入页面
    var ul = document.createElement('ul');
    ul.className = 'cart-table-list';

    ul.innerHTML = datalist.map(function(goods){
        totle = goods.qty*goods.price;
        return `       
                <li class="select border-first clearfix" data-id="${goods.id}">
                    <div class="active-line">
                        <div class="point">•</div>
                        <div class="message">
                            【参与满减】满300减100，可累计10次 已优惠600.00元 
                            <a href="#" class="link">查看活动 ></a>
                        </div>
                        <div class="item-price"></div>
                        <div class="else-message">
                            ￥1800.00元 减：
                            <span class="red">￥600.00</span>
                        </div>
                    </div>
                    <div class="border-last select item">
                        <div class="cart-table-line">
                            <div class="chk-line">
                                <input type="checkbox" class="chk" checked/>
                            </div>
                            <div class="item-box">
                                <a href="#"><img src="${goods.imgurl}" alt="" /></a>
                                <div class="name">
                                    <a href="#">${goods.details}</a>
                                </div>
                                <div class="message-line"></div>
                            </div>
                            <div class="type-box"></div>
                            <div class="item-price-box">
                                <del>¥700.00</del>
                                <div class="price">¥<span>${goods.price}</span></div>
                                <div class="icon">
                                    <i class="orange">闪购</i>
                                </div>
                            </div>
                            <div class="number-box">
                                <div class="input-line">
                                    <em class="reduce">-</em>
                                    <input type="text" class="text" value="${goods.qty}"/>
                                    <em class="add">+</em>
                                </div>
                            </div>
                            <div class="price-box">
                                <div class="price_totle">¥<span class="totle_sel">${totle.toFixed(2)}</span></div>
                            </div>
                            <div class="action-box">
                                <a href="" class="add-favourite">移入收藏夹</a>
                                <br />
                                <a class="delete">删除</a>
                            </div>
                        </div>
                    </div>
                </li>

        `;
    }).join('');

    $('.cart-table').append(ul);


    // 减少商品数量
    $('em.reduce').on('click',function(){
        var text = $(this).next('input').get(0);
        var num = text.value;

        // 点击的商品的id
        var id = $(this).closest('li').get(0).getAttribute('data-id');
        if(num <= 1){
            return;
        }else if(num>1){
            var totle = 0;
            num--;
            $(this).next('input').get(0).value = num;
            totle = num * $(this).closest('li').find('.price').find('span').text();
            // 单个商品的总价格
            $(this).closest('li').find('.price_totle').find('span').text(totle.toFixed(2));
            getTotal();
             
        }
    });

    // 增加商品数量
    $('em.add').on('click',function(){
        var text = $(this).prev('input').get(0);
        var num = text.value;
        var totle = 0;
        // 点击的商品的id
        var id = $(this).closest('li').get(0).getAttribute('data-id');
       
            num++;
            $(this).prev('input').get(0).value = num;
            totle = num * $(this).closest('li').find('.price').find('span').text();
            // 单个商品的总价格
            $(this).closest('li').find('.price_totle').find('span').text(totle.toFixed(2));
            getTotal();
             
    });
    
    

    // ul对象
    var $cart_table_list = $('.cart-table-list');
    // 勾选框对象
    var $input_chk = $cart_table_list.find('.chk');
    
    // 购物车里面的商品总数
    var len = $cart_table_list.get(0).children.length;
    $('.totle_num').text(len);
  
    
    // 单个商品数量
    var $num_sel = $cart_table_list.find('.text');
    var $totle_sel = $cart_table_list.find('.totle_sel');

    // 封装计算勾选商品总价的函数
    function getTotal(){
        var selected = 0;
        var totle_sel = 0;
        for(var i=0;i<len;i++){
            if($input_chk.get(i).checked){
                selected += $num_sel.get(i).value*1;
                totle_sel += $totle_sel.get(i).innerText*1;
            }else{
                // 有一个不选全选不选
                $('.qx').get(0).checked = false;
            }
        }
        $('.gx_totle_price').text(totle_sel.toFixed(2));
        $('.zx_num').text(selected);
    }
    getTotal();

    // 每个选择框绑定点击事件
    $input_chk.on('click',function(){
        // 如果全部勾选，全选就勾选
        for(var i=0;i<len;i++){
            if($input_chk.get(i).checked){
                $('.qx').get(0).checked = true;
            }
        }
        
        getTotal();
    });
    

    // 全选按钮
    $('.qx').on('click',function(){
        // 控制全选
        for(var i=0;i<len;i++){
            $input_chk.get(i).checked = this.checked;
        }
        getTotal();
    });

    // 删除单个商品
    $cart_table_list.on('click','.delete',function(){
        $(this).closest('li').remove();
        // 删除cookie
        var id = $(this).closest('li').get(0).getAttribute('data-id');

        var res = datalist.filter(function(goods,idx){
            if(goods.id != id){
                return goods;
            }                    
        });

        // 写入cookie
        Cookie.set('goodslist',JSON.stringify(res));
        location.reload();       

    });

    // 多个商品的删除
    $('#payForm').on('click','.delete_mul',function(){
        var res = [];
        var len = $cart_table_list.get(0).children.length;
        for(var i=0;i<len;i++){

            if($input_chk.get(i).checked){ 
                $($input_chk.get(i)).closest('li').remove();              
                var id = $($input_chk.get(i)).closest('li').get(0).getAttribute('data-id');
                // datalist = JSON.parse(Cookie.get('datalist'));
                
                // 获取cookie
                var datalist = Cookie.get('goodslist');

                if(datalist){
                    datalist = JSON.parse(datalist);
                }
                res = datalist.filter(function(goods,idx){
                    if(goods.id != id){
                        return goods;
                    }    
                });
                // 写入cookie
                Cookie.set('goodslist',JSON.stringify(res)); 
                
            }

        }
        location.reload();  
    });





});