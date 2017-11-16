/* 
* @Author: Marte
* @Date:   2017-11-13 14:30:33
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-16 09:23:50
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
})
require(['common','jquery'],function(com,$){
    // header
    // 头部搜索
    var $search_txt = $('.search_txt');
    // 历史搜索框
    var $foucs_show = $('.foucs_show');
    // 显示/隐藏
    $search_txt.find('input').focus(function(){
        $foucs_show.show();
    });
    $search_txt.find('input').blur(function(){
        $foucs_show.hide();
    });

    // 吸顶
    var $fileheader = $('#fileheader');
    document.onscroll = function(){
        if(window.scrollY>120){
            $fileheader.stop().animate({top:0}, 50);
        }else{
            $fileheader.stop().animate({top:-76}, 50);
            $header_input_show.hide();
        }
    }
    // 吸顶显示/隐藏
    var $indiv = $('.indiv');
    var $header_input_show = $('.header-input-show');
    $indiv.find('input').focus(function(){
        $header_input_show.show();
    });
    $indiv.find('input').blur(function(){
        $header_input_show.hide();
    });

    // nav
    // 右边导航部分
    var $nav_right = $('.nav_right'); 
    // hover动画
    $nav_right.on('mouseenter','a',function(){
        $(this).stop().find('span').animate({top:31}, 50);
        $(this).stop().next('.doudou').animate({top:-12}, 300);
    });
    $nav_right.on('mouseleave','a',function(){
        $(this).stop().find('span').animate({top:35}, 50);
        $(this).stop().next('.doudou').animate({top:0}, 300);
    });

    // banner  淡入淡出 
    function Fade(options){
        // 默认属性
        var defaults = {
            width:785,
            height:425,
            imgs:[],
            ele:'.scrollBox',
            // 图片间隔时间
            duration:3000,
            // 自动淡入淡出
            autoPlay:true,
            // 默认索引值
            index:0,
            // 上一张索引
            lastIndex:0,
            // 是否显示前后按钮
            buttons:true,
            // 是否显示页码
            page:true
        }
        // 覆盖默认参数
        var opt = Object.assign({},defaults,options);

        this.init(opt);
    }

    // 方法
    Fade.prototype = {
        //创建节点
        //绑定事件
        init(opt){
            this.len = opt.imgs.length;
            this.ele = document.querySelector(opt.ele);
            this.ele.classList.add('scrollBox');
            this.index = opt.index;
            this.lastIndex = opt.lastIndex;
            this.opt = opt;
            
            // 图片
            var ul = document.createElement('ul');
            ul.className = 'clearfix';
            ul.innerHTML = opt.imgs.map(item=>{
                return `<li><img src="${item}"></li>`;
            }).join('');

            // 按钮
            var divBtn = document.createElement('div');
            divBtn.className = 'direction clearfix';
            // 上一张
            var prev = document.createElement('span');
            prev.className = 'prev fl';
            // 下一张
            var next = document.createElement('span');
            next.className = 'next fr';

            divBtn.appendChild(prev);
            divBtn.appendChild(next);

            // 点
            var dot = document.createElement('ol');
            dot.className = 'dot clearfix';
            dot.innerHTML = opt.imgs.map((item,idx)=>{
                return `<li><a href="#" class="li-a-circle-black">${idx}</a></li>`;
            }).join('');

            this.ele.appendChild(ul);
            this.ele.appendChild(divBtn);
            this.ele.appendChild(dot);
            this.prev = prev;
            this.next = next;
            this.dot = dot;
            this.start();
            // 鼠标移入移除
            this.ele.onmouseenter = function(){
                this.stop();
            }.bind(this);
            this.ele.onmouseleave = function(){
                this.start();
            }.bind(this);
            this.prev.onclick = function(){
                this.prevImg();
            }.bind(this);
            this.next.onclick = function(){
                this.nextImg();
            }.bind(this);
            this.dot.onclick = function(e){
                if(e.target.tagName.toLowerCase() == 'a'){
                    this.dotPlay(e.target.innerText*1);
                }
            }.bind(this);
        },
        fade(){
            if(this.index >= this.len){
                this.index = 0;
            }else if(this.index < 0){
                this.index = this.len - 1;
            }
            animate_lx(this.ele.children[0].children[this.index],'opacity',1);
            animate_lx(this.ele.children[0].children[this.lastIndex],'opacity',0);
            for(var i=0;i<this.len;i++){
                this.ele.children[2].children[i].children[0].className = 'li-a-circle-black';
            }
           this.ele.children[2].children[this.index].children[0].className = 'li-a-circle-red';
            // 更新lastIndex
            this.lastIndex = this.index;
        },
        stop(){
            clearInterval(this.timer);
        },
        start(){
            for(var i=0;i<this.len;i++){
                if(i!==this.index){
                    animate_lx(this.ele.children[0].children[i],'opacity',0);
                }else{
                    this.ele.children[2].children[this.index].children[0].className = 'li-a-circle-red';
                }
            }
            this.timer = setInterval(()=>{
                
                this.index++;
                this.fade();
                this.ele.children[2].children[this.index].children[0].className = 'li-a-circle-red';
            },this.opt.duration);
        },
        prevImg(){
            this.index--;
            this.fade();
        },
        nextImg(){
            this.index++;
            this.fade();
        },
        dotPlay(idx){
            this.index = idx;
            if(this.index == this.lastIndex){
                return;
            }
            this.fade();
        }
    }    
    Object.defineProperty(Fade.prototype,'constructor',{
        value:Fade,
    });

    var lbt = new Fade({
        imgs:["img/banner01.jpg","img/banner02.jpg","img/banner03.jpg","img/banner04.jpg","img/banner05.jpg","img/banner06.jpg","img/banner07.jpg","img/banner08.jpg","img/banner09.jpg","img/banner10.jpg"]
    });

    // 楼梯图片左移动画
    var $floor_main = $('.floor_main');
    $floor_main.on('mouseenter','img',function(){
        $(this).stop().animate({left:-10}, 300);
    });

    $floor_main.on('mouseleave','img',function(){
        $(this).stop().animate({left:0}, 300);
    });

    // 楼梯图片淡入淡出动画
    // 在这里遇到一个问题，如果委托写img会出不来效果
    var $floor_mainb_b = $('.floor_mainb_b');
    $floor_mainb_b.on('mouseenter','a',function(){
        $(this).fadeTo(300,0.5);
        console.log(444);
    });
    $floor_mainb_b.on('mouseleave','a',function(){
        $(this).fadeTo(300,1);
        console.log(444);
    });
});

