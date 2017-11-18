/* 
* @Author: Marte
* @Date:   2017-11-18 18:56:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-18 20:30:23
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
        console.log(goods);
        totle = goods.qty*goods.price;
        return `
       
                <li class="select border-first clearfix">
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
                                <div class="price">¥<span>${totle}</span></div>
                            </div>
                            <div class="action-box">
                                <a href="" class="add-favourite">移入收藏夹</a>
                                <br />
                                <a href="" class="delete">删除</a>
                            </div>
                        </div>
                    </div>
                </li>

        `;
    }).join('');
console.log(ul);

    $('.cart-table').append(ul);

    var text = $('.text').get(0);
    var num = text.value;

    // 减少商品数量
    $('.reduce').on('click',function(){
        if(text1== 1){
            return;
        }else{
            num--;
            text.value = num;
            totle = 
        }
    });


});