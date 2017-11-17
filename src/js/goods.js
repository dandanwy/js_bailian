/* 
* @Author: Marte
* @Date:   2017-11-17 18:53:55
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 19:27:57
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
            
        }
    })
    
    
});