/* 
* @Author: Marte
* @Date:   2017-11-17 18:53:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-18 18:55:50
*/


require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
});

require(['common','ajax','jquery'],function(com,oAjax,$){
    var res = location.search.slice(1).split('=');
    var id = res[1];

    ajax({
        type:'get',
        url:'http://localhost:1111/api/goods.php',
        data:{id:id},
        async:true,
        success:function(data){
            var crumb = $('.crumb').get(0);
            crumb.innerHTML = `
                <span>&lt;&lt;</span>
                <strong><a href="#">美容护理</a></strong>
                <span class="mbNav">
                    <em>|</em>
                    <a href="#">魅力香氛</a>
                    <em>|</em>
                    <a href="#">${data[5]}</a>
                </span>
                <a class="mbNav-last brandJump">${data[11]}</a>
            `;
            
            // 放大镜那块图片
            var product_intro = $('.product-intro').get(0);
            product_intro.innerHTML = `

                <div class="intro-left">
                    <div class="center-prview">
                        <div id="preview" class="spec-preview">
                            <span class="jqzoom">
                                <div id="mainPic" class="jqzoom-body">
                                    <div class="zoomimg lazytag">
                                        <img src="${data[1]}" alt="" data-big="../img/bigImg.jpg"/>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <div class="spec-scroll">
                            <a href="#" class="prev">&lt;</a>
                            <a href="#" class="next">&gt;</a>
                            <div class="items">
                                <ul id="picture">
                                    <li><img src="../img/xs01.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div class="intro-meno-left">
                            <div class="number">
                                商品编号
                                <span>${data[0]}</span>
                            </div>
                            <div class="collect">
                                <a href="#" id="j-sc" class="no-collect joinFavorites">收藏</a>
                            </div>
                            <div class="share-list">
                                <a href="#" class="shar-list-icon">分享</a>
                                <i class="up"></i>
                            </div>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="global-country">
                            <i><img src="../img/global_flag.png" alt="" /></i>
                            <span> | ${data[11]}</span>
                            <div>跨境</div>
                        </div>
                        <div class="global-title">Jo Malone/祖马龙香水 英国梨与小苍兰 30ml</div>
                        <div class="global-title-info"></div>
                        <div class="global-attribute-time" id="productFlash_html">
                            <em>闪购</em>闪购距离活动结束还有:&nbsp;
                            <span class="j-dd"></span>天&nbsp;
                            <span class="j-hh"></span>小时&nbsp;
                            <span class="j-mm"></span>分&nbsp;
                            <span class="j-ss"></span>秒&nbsp;
                        </div>
                        <div class="global-attribute-info  clearfix">
                            <div class="price-line">
                                <span class="black">  活  动  价 </span>
                                <span class="price">
                                    <strong id="FlashPrice">
                                        <i>￥</i>${data[2]}
                                    </strong>
                                </span>
                                <span class="span-tariff">
                                    税费：商品价格已含税
                                    <i></i>
                                </span>
                                <span class="c999 ml15" id="salePrice">参考价 ￥700.0</span>
                            </div>
                            <div class="view-line">
                                <span class="black"> 好  评  率 </span>
                                <span class="grey">
                                    <span class="view-point" id="commv_num"> ${data[7]}</span>
                                     （共 
                                     <a href="#">
                                         <span class="red" id="commt_num">  ${data[6]}  </span>
                                     </a>
                                      条评价）
                                </span>
                            </div>
                        </div>
                        <div class="min-hight" id="goods-details">
                            <div class="promotion" id="promotion-detail">
                                <dl id="promotion-dl">
                                    <dt id="cx-Promotion">促销活动</dt>
                                    <dd>
                                        <ul id="PromotionV">
                                            <li>
                                                <i>满减</i> 满300减100，可累计10次
                                                <a href="#">立即参与</a>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                            <div class="send-service">
                                <dl>
                                    <dt>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送</dt>
                                    <dd>
                                        <div class="fl-distribution">由 |<i>${data[8]}</i>| 发货</div>
                                        <div class="fl-distribution-1">保税区发货5-10个工作日，直邮5-20个工作日</div>
                                    </dd>
                                </dl>
                            </div>
                            <div class="pay-sevice">
                                <dl>
                                    <dt>服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</dt>
                                    <dd>
                                        <div class="message-line">由"百联海外专营" 提供发货和售后服务 </div>
                                        <div class="pay-way"></div>
                                    </dd>
                                </dl>
                            </div>
                            <div id="error-tip" class="choose-type">
                                <div class="error-table">
                                </div>
                            </div>
                            <dl>
                                <dt class="item-number">购买数量</dt>
                                <dd>
                                    <div class="item-quantity">
                                        <div class="wrap-input">
                                            <button class="btn-reduce" id="reduce"></button>
                                            <button class="btn-add" id="addnum"></button>
                                            <input type="text" id="itemnumber" value="1"/>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="buy-cart">
                                <dt></dt>
                                <dd>
                                    <div class="btn-line" id="but_tiem">
                                        <button class="buy-now" id="addpurchase">立即购买</button>
                                        <button id="addCart" class="btn-buy">
                                            <i></i>
                                            <span>加入购物车</span>
                                        </button>
                                    </div>
                                    <div class="store-guide">
                                        <div class="store"></div>
                                        <p class="pay-code">手机掌上购买<i class="promotion-on"></i></p>
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示</dt>
                                <dd class="p-top height-18">
                                    <p>1.本商品下单后无法取消<em>展开</em></p>
                                    <p>2.此商品不提供国内购物发票</p>
                                    <p>3.根据中国海关总署要求，您所购买的商品清关入境需要提供身份证信息进行入境申报，请您配合。我们不会向第三方泄露您的资料，请您放心 </p>
                                    <p>4.本商品不支持货到付款</p>
                                    <p>5.本商品不支持7天无理由退货</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="intro-right">
                    <div class="brand-list brandJump" id="brand">
                        <a href="#">
                            <div class="pic"><img src="../img/goods01.jpg" alt="" /></div>
                            <div class="txt"><span class="red">祖马龙</span></div>
                        </a>
                    </div> 
                    <div class="list-title clearfix">
                        <span>大家都在买</span>
                    </div> 
                    <ul class="seeclip-list clearfix" id="cms_1">
                        <li>
                            <a href="#" class="list-img">
                                <img src="../img/goddsr01.jpg" alt="" class="lazytag" />
                                <span class="prbg"></span>
                                <span class="see-pr">
                                    <strong>¥600.0</strong>
                                </span>
                            </a>
                            <div class="name">Jo Malone/祖马龙香水 鼠尾草与海盐 30ml</div>
                        </li>
                        <li>
                            <a href="#" class="list-img">
                                <img src="../img/goddsr01.jpg" alt="" class="lazytag" />
                                <span class="prbg"></span>
                                <span class="see-pr">
                                    <strong>¥600.0</strong>
                                </span>
                            </a>
                            <div class="name">Jo Malone/祖马龙香水 鼠尾草与海盐 30ml</div>
                        </li>
                    </ul>  
                    <div class="changed">
                        <a href="#" id="clickCms">换一换</a>
                    </div>  
                </div>

            `;    

            
            // 放大镜
            function Arzoom(options){
                var defaults = {
                    position:'right',
                    width:380,
                    height:410
                }

                // 覆盖默认参数
                var opt = Object.assign({},defaults,options);
                this.init(opt);
            }
            Arzoom.prototype = {       
                init(opt){
                    // 创建节点
                    // 绑定事件
                    // 大图一般为当前元素内图片的data-big属性，如果没有则直接使用该图片的src属性
                    this.$small = $('.zoomimg');
                    
                    this.width = opt.width;
                    this.height = opt.height;
                    

                    this.$small.get(0).onmouseenter = function(){
                        this.show();
                    }.bind(this);

                    this.$small.get(0).onmouseleave = function(){
                        this.hide();
                    }.bind(this);

                    this.$small.get(0).onmousemove = function(e){
                        this.move(e.clientX,e.clientY);
                    }.bind(this);
                    
                },

                show(){
                    // hover上去图形
                    this.$minzoom = $('<span/>').addClass('minzoom');
                    this.$smallImg = $('.zoomimg').find('img');
                    this.$small.append(this.$minzoom);

                    this.$zoomdiv = $('<div/>').addClass('zoomdiv');
                    this.$bigImg = $('<img/>');
                    var bigsrc = this.$small.find('img').get(0).getAttribute('data-big');
                    this.$bigImg.attr({src:bigsrc});
                    this.$zoomdiv.append(this.$bigImg);
                    $('#preview').append(this.$zoomdiv);

                    this.$bigImg[0].onload = function(){
                        // 计算大图与小图比率
                        this.ratio = this.$bigImg.outerWidth()/this.$smallImg.outerWidth();
                        
                        // 设置放大镜的尺寸
                        // 与大图显示区域等比例
                        this.$minzoom.css({
                            width:this.width/this.ratio,
                            height:this.height/this.ratio
                        });

                    }.bind(this);
                },
                hide(){
                    this.$minzoom.remove();
                    this.$zoomdiv.remove();
                },
                move(x,y){
                    // 计算放大镜移动过的距离
                    var left = x - $('.zoomimg').offset().left -  this.$minzoom.outerWidth()/2 +window.scrollX;
                    var top = y - $('.zoomimg').offset().top -  this.$minzoom.outerHeight()/2 +window.scrollY;

                    // 限定left,top值
                    if(left<0){
                        left = 0;
                    }else if(left > this.$smallImg.outerWidth()-this.$minzoom.outerWidth()){
                        left = this.$smallImg.outerWidth()-this.$minzoom.outerWidth()
                    }

                    if(top<0){
                        top = 0;
                    }else if(top > this.$smallImg.outerHeight()-this.$minzoom.outerHeight()){
                        top = this.$smallImg.outerHeight()-this.$minzoom.outerHeight()
                    }

                    this.$minzoom.css({
                        left:left,
                        top:top
                    });

                    // 大图移动
                    this.$bigImg.css({
                        left:-left*this.ratio,
                        top:-top*this.ratio
                    })

                }
            }
            // // 重新设置constructor属性
            Object.defineProperty(Arzoom.prototype,'constructor',{value:Arzoom});
            new Arzoom();

            // 飞入购物车
            $('#addCart').on('click',function(){
                var $img = $('.zoomimg').children('img');

                var $cartNum = $('#cartNum');
                // 1>复制当前商品图片(用于实现动画效果)
                var $cloneImg = $img.clone();

                // 给复制图片设置样式
                $cloneImg.css({
                    position:'absolute',
                    top:$img.offset().top,
                    left:$img.offset().left,
                    width:$img.width()
                });
                // 把图片写入页面
                $cloneImg.appendTo('body');

                // 动画效果:必须写入页面才会显示动画效果
                $cloneImg.animate({left:$cartNum.offset().left,top:$cartNum.offset().top,width:100},function(){
                    //删除复制的图片
                    $cloneImg.remove();
                });

                var datalist =Cookie.get('goodslist');
                if(!datalist){
                    datalist = [];
                }else{
                    datalist = JSON.parse(datalist);
                }

                // 判断当前商品是否已经存在cookie里面了
                var currentIdx;
                var res = datalist.some(function(goods,idx){
                    currentIdx = idx;
                    return goods.id == id;
                });

                // 如果商品已经存在，则商品数量加1，否则添加商品
                    if(res){
                        datalist[currentIdx].qty = datalist[currentIdx].qty*1 + $('#itemnumber').get(0).value*1;
                    }else{
                        // 获取此点击商品信息(对象方式存储)
                        var goods = {
                            id:id,
                            qty:$('#itemnumber').get(0).value,
                        };
                        // 把当前商品添加到数组中
                        datalist.push(goods);
                    }

                    Cookie.set('goodslist',JSON.stringify(datalist));

            });


            // 购买数量增加减少
            var buy_num = $('#itemnumber').get(0).value;
            $('#reduce').on('click',function(){
                if(buy_num == 1){
                    $(this).get(0).className = 'btn-down-disable';
                    return;
                }else{
                    $(this).get(0).className = 'btn-reduce';
                    buy_num--;
                    $('#itemnumber').get(0).value = buy_num;
                }
                
            });

            $('#addnum').on('click',function(){
                buy_num++;
                $('#itemnumber').get(0).value = buy_num;
                if(buy_num>1){
                    $('#reduce').get(0).className = 'btn-reduce';
                }               
            });



        }
    });



    
});