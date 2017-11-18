/* 
* @Author: Marte
* @Date:   2017-11-17 15:05:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-18 14:55:57
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
});

require(['common','ajax','jquery'],function(com,oAjax,$){

    ajax({
            type:'get',
            url:'http://localhost:1111/api/list.php',
            async:true,
            success:function(data){

                var ul = document.createElement('ul');
                var prolist = $('.prolist').get(0);
                ul.className = 'pro-class';
                ul.innerHTML = data.map(function(item){                  

                    // 判断是不是热销
                    if(item.ishot == 0){
                        // 判断右上角小图标是哪个
                        if(item.pro_icon_while_one == 0){
                            return `
                                <li data-id="${item.id}">
                                    <div class="pro-show">
                                        <div class="pro-icon"><img src="../img/icon-bl-3.png" alt="" /></div>
                                        <div class="pro-img"><a href="http://localhost:1111/html/goods.html?id=${item.id}"><img src="${item.imgurl}" alt="" /></a></div>
                                        <div class="pro-money">
                                            <div class="money-fl">￥${item.price}</div>
                                        </div>
                                        <div class="product-comment">
                                            <div class="pro-name"><a></a></div>
                                            <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-left" style="cursor:pointer;">${item.pinjia_num}</div>
                                            <div class="pro-assess-new" style="cursor:pointer;">${item.dianzanlv}</div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-right">
                                                <a>${item.business_category}</a>
                                            </div>
                                        </div>
                                        <div class="pro-button">
                                            <button class="btn btn-primary addCard">加入购物车</button>
                                        </div>
                                    </div>
                                </li>
                            `;
                            
                        }else if(item.pro_icon_while_one == 1){
                            return `
                                <li data-id="${item.id}">
                                    <div class="pro-show">
                                        <div class="pro-icon"><img src="../img/icon-bl-2.png" alt="" /></div>
                                        <div class="pro-img"><a href="http://localhost:1111/html/goods.html?id=${item.id}"><img src="${item.imgurl}" alt="" /></a></div>
                                        <div class="pro-money">
                                            <div class="money-fl">￥${item.price}</div>
                                        </div>
                                        <div class="product-comment">
                                            <div class="pro-name"><a></a></div>
                                            <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-left" style="cursor:pointer;">${item.pinjia_num}</div>
                                            <div class="pro-assess-new" style="cursor:pointer;">${item.dianzanlv}</div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-right">
                                                <a>${item.business_category}</a>
                                            </div>
                                        </div>
                                        <div class="pro-button">
                                            <button class="btn btn-primary addCard">加入购物车</button>
                                        </div>
                                    </div>
                                </li>
                            `;
                        }
                    }else if(item.ishot == 1){
                        if(item.pro_icon_while_one == 0){
                            return `
                                <li data-id="${item.id}">
                                    <div class="pro-show">
                                        <div class="pro-icon"><img src="../img/icon-bl-3.png" alt="" /></div>
                                        <div class="pro-img"><a href="http://localhost:1111/html/goods.html?id=${item.id}"><img src="${item.imgurl}" alt="" /></a></div>
                                        <div class="pro-money">
                                            <div class="money-fl">￥${item.price}</div>
                                        </div>
                                        <div class="product-comment">
                                            <div class="pro-name"><a></a></div>
                                            <div class="pro-discount"><a>${item.details}</a></div>
                                        </div>
                                        <div class="pro-top">
                                            <div class="pro-top-left">
                                                <span>在</span>
                                                <a class="red">&nbsp;${item.category}&nbsp;</a>
                                                <span>中</span>
                                                <span class="red">畅销</span>
                                            </div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-right">
                                                <a>${item.business_category}</a>
                                            </div>
                                        </div>
                                        <div class="pro-button">
                                            <button class="btn btn-primary addCard">加入购物车</button>
                                        </div>
                                    </div>
                                </li>
                            `;
                        }else if(item.pro_icon_while_one == 1){
                            return `
                                <li data-id="${item.id}">
                                    <div class="pro-show">
                                        <div class="pro-icon"><img src="../img/icon-bl-2.png" alt="" /></div>
                                        <div class="pro-img"><a href="http://localhost:1111/html/goods.html?id=${item.id}"><img src="${item.imgurl}" alt="" /></a></div>
                                        <div class="pro-money">
                                            <div class="money-fl">￥${item.price}</div>
                                        </div>
                                        <div class="product-comment">
                                            <div class="pro-name"><a></a></div>
                                            <div class="pro-discount"><a>${item.details}</a></div>
                                        </div>
                                        <div class="pro-top">
                                            <div class="pro-top-left">
                                                <span>在</span>
                                                <a class="red">&nbsp;${item.category}&nbsp;</a>
                                                <span>中</span>
                                                <span class="red">畅销</span>
                                            </div>
                                        </div>
                                        <div class="pro-assess">
                                            <div class="pro-assess-right">
                                                <a>${item.business_category}</a>
                                            </div>
                                        </div>
                                        <div class="pro-button">
                                            <button class="btn btn-primary addCard">加入购物车</button>
                                        </div>
                                    </div>
                                </li>
                            `;
                        }
                        
                    }

                }).join('');
                prolist.appendChild(ul);

            }
        });
        
});