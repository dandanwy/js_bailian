/* 
* @Author: Marte
* @Date:   2017-11-18 18:56:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-18 18:58:51
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
    // 将商品写入页面



});