/* 
* @Author: Marte
* @Date:   2017-11-15 20:05:37
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 19:47:15
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
});

require(['common','ajax','jquery'],function(com,oAjax,$){
    var ml_img = $('.ml-img').get(0);
    ml_img.innerText = rand();

    var loginId = $('#loginId').get(0);
    var password = $('#password').get(0);

    var $loginsubmit = $('#loginsubmit');
    $loginsubmit.on('click',function(){
        var username = loginId.value;
        var psd = password.value;

        // 发起请求
        ajax({
            type:'get',
            url:`http://localhost:1111/api/login.php?username=${username}&password=${psd}`,
            async:true,
            success:function(data){
                console.log(data);
                if(data === 'ok'){
                    // alert('登录成功');
                    location.href="../index.html";
                }else if(data === 'fail'){
                    alert('输入信息有误！');
                }
            }
        });
    });
})