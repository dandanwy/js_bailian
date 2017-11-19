/* 
* @Author: Marte
* @Date:   2017-11-17 15:05:24
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-19 18:34:41
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
});

require(['common','ajax','jquery'],function(com,oAjax,$){

    var pageNo = 1;
    var qty = 50;

   // 链接右边栏
    $('.right_lan').load('../html/goods.html .right-slidebar');

    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status == 304 || xhr.status == 200){
            var data = JSON.parse(xhr.responseText);
            // 生成页面数据
            var ul = document.createElement('ul');
            var prolist = $('.prolist').get(0);
            ul.className = 'pro-class clearfix';
            ul.innerHTML = data.data.map(function(item){                  

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
                                        <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
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
                                        <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
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
            prolist.innerHTML = '';
            prolist.appendChild(ul);

            // 生成页码
            var ul = $('<ul/>').addClass('page').get(0);
            ul.innerHTML = '';
            for(var i=0;i<data.total_page;i++){
                var li = document.createElement('li');
                var a = document.createElement('a');
                a.innerText = i+1;
                if(i+1 == pageNo){
                    li.className = 'on';
                }
                li.appendChild(a);
                ul.appendChild(li);
            }
            $('.page-show').get(0).innerHTML = '';
            $('.page-show').get(0).appendChild(ul);
        }

    }


    xhr.open('get',`http://localhost:1111/api/list.php?pageNo=${pageNo}&qty=${qty}`,true);
    xhr.send();

    // 分页切换
    $('.page-show').on('click','a',function(){
        pageNo = $(this).text();
        xhr.open('get',`http://localhost:1111/api/list.php?pageNo=${pageNo}&qty=${qty}`,true);
        xhr.send();
    });



        function data_sort(data){
            // 生成页面数据
            var ul = document.createElement('ul');
            var prolist = $('.prolist').get(0);
            ul.className = 'pro-class clearfix';
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
                                        <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
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
                                        <div class="pro-discount"><a href="http://localhost:1111/html/goods.html?id=${item.id}">${item.details}</a></div>
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
            prolist.innerHTML = '';
            prolist.appendChild(ul);
        }

    // 用于价格排序标识
    var sort = 0;
    $('.sort').on('click',function(){
        if(sort == 0){//升序
            $(this).removeClass('on');
            $(this).addClass('down');
            ajax({
                type:'get',
                url:'http://localhost:1111/api/sort.php',
                data:{sort:sort},
                async:true,
                success:function(data){
                    data_sort(data);

                }
        
            });
            sort = 1;
        }else if(sort == 1){//降序
            $(this).removeClass('down');
            $(this).addClass('on');
            ajax({
                type:'get',
                url:'http://localhost:1111/api/sort.php',
                data:{sort:sort},
                async:true,
                success:function(data){
                    data_sort(data);

                }
            });
            
            sort = 0;
        }
    });
    

        
});