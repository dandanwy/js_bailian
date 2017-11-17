/* 
* @Author: Marte
* @Date:   2017-11-15 20:05:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-17 10:29:21
*/

require.config({
    paths:{
        jquery:'../lib/jquery/jquery-3.2.1'
    }
})
require(['common','jquery'],function(com,$){
    var $prompt_text = $('.prompt-text');
    var $prompt_error = $('.prompt-error');
    var $prompt_correct = $('.prompt-correct');
    var $reg = $('#reg');

    var login_reurn = 0;
    var password_return = 0;
    var confirmPassword_retur = 0;
    var mobile_return = 0;
    var register_code_return = 0;
    var email_return = 0;

   
    // 用户名 正则
    var $loginId = $('#loginId');

    // 获取焦点
    $loginId.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"256px"});
        $prompt_text.eq(0).css({"display":"block"}).siblings('li').css({"display":"none"});
    });

    // 失去焦点
    $loginId.blur(function(){
        if(!/^[a-z0-9]{6,20}/i.test($loginId.get(0).value)){
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"256px"});
            $prompt_error.eq(0).css({"display":"block"}).siblings('li').css({"display":"none"});
            login_reurn = 0;
        }else{
            if(/^[0-9]{6,20}/.test($loginId.get(0).value)){
                $(this).css({"border":"2px solid #f77799","height":"32px","width":"256px"});
                $prompt_error.eq(0).css({"display":"block"}).siblings('li').css({"display":"none"});
                $prompt_error.eq(0).find('span').text('用户名只能由字母或字母和数字组合');
                login_reurn = 0;
            }else{
                $(this).css({"border":"1px solid #ccc","height":"34px","width":"258px"});
                $prompt_correct.eq(0).css({"display":"block"}).siblings('li').css({"display":"none"});
                login_reurn = 1;
            }
            
        }
    });


    // 密码 正则
    var $password = $('#password');
    var $strength_1 = $('.strength-1');
    var level = 0;

    $password.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"256px"});
        $prompt_text.eq(1).css({"display":"block"}).siblings('li').css({"display":"none"});
        // 键盘输入,判断密码强度
        $(this).on('keyup',function(){
            if($password.get(0).value.length<8){
                $strength_1.eq(0).css({"background":"#ff0000"});
                level = 0;
            }else{
                if(/^[0-9]{8,20}$/.test($password.get(0).value)){
                    $strength_1.eq(0).css({"background":"#ff0000"});
                    level = 0;
                }else if(/^[a-z]{8,20}$/.test($password.get(0).value)){
                    $strength_1.eq(0).css({"background":"#ff0000"});
                    level = 0;
                }else if(/^[a-z0-9]{8,20}$/.test($password.get(0).value)){
                    $strength_1.eq(0).css({"background":"#cccccc"});
                    $strength_1.eq(1).css({"background":"#ff9900"});
                    level = 1;
                }else if(/^[a-z0-9\@\#\$\%\*\^\?]{8,20}$/.test($password.get(0).value)){
                    $strength_1.eq(0).css({"background":"#ccc"});
                    $strength_1.eq(1).css({"background":"#ccc"});
                    $strength_1.eq(2).css({"background":"#58bc58"});
                    level = 2;
                }  
            }           
        });
    });

    $password.blur(function(){
        if(level === 0){
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"256px"});
            $prompt_error.eq(1).css({"display":"block"}).siblings('li').css({"display":"none"});
            $strength_1.eq(0).css({"background":"#ff0000"});
            password_return = 0;
        }else if(level === 1){
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"258px"});
            $prompt_correct.eq(1).css({"display":"block"}).siblings('li').css({"display":"none"});
            $strength_1.eq(0).css({"background":"#cccccc"});
            $strength_1.eq(1).css({"background":"#ff9900"});
            password_return = 1;
        }else if(level === 2){
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"258px"});
            $prompt_correct.eq(1).css({"display":"block"}).siblings('li').css({"display":"none"});
            $strength_1.eq(0).css({"background":"#ccc"});
            $strength_1.eq(1).css({"background":"#ccc"});
            $strength_1.eq(2).css({"background":"#58bc58"});
            password_return = 1;
        }
    });


    // 确认密码
    var $confirmPassword = $('#confirmPassword');
    $confirmPassword.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"256px"});
        $prompt_text.eq(2).css({"display":"block"}).siblings('li').css({"display":"none"});
    });

    $confirmPassword.blur(function(){
        if($confirmPassword.get(0).value === $password.get(0).value){
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"258px"});
            $prompt_correct.eq(2).css({"display":"block"}).siblings('li').css({"display":"none"});
            confirmPassword_retur = 1;
        }else{
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"256px"});
            $prompt_error.eq(2).css({"display":"block"}).siblings('li').css({"display":"none"});
            confirmPassword_retur = 0;
        }
    });


    // 手机号正则
    var $mobile = $('#mobile');
    $mobile.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"256px"});
        $prompt_text.eq(3).css({"display":"block"}).siblings('li').css({"display":"none"});
    });

    $mobile.blur(function(){
        if(!/^1[34578]\d{9}$/.test($mobile.get(0).value)){
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"256px"});
            $prompt_error.eq(3).css({"display":"block"}).siblings('li').css({"display":"none"});
            mobile_return = 0;
        }else{
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"258px"});
            $prompt_correct.eq(3).css({"display":"block"}).siblings('li').css({"display":"none"});
            mobile_return = 1;
        }
    });


    // 验证码
    var register_code = $('.register-code').get(0);
    var $verifyCode = $('#verifyCode');
    register_code.innerText = rand();

    $verifyCode.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"158px"});
        $prompt_text.eq(4).css({"display":"block"}).siblings('li').css({"display":"none"});
    });

    $verifyCode.blur(function(){
        if($verifyCode.get(0).value === register_code.innerText){
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"158px"});
            $prompt_correct.eq(4).css({"display":"block"}).siblings('li').css({"display":"none"});
            register_code_return = 1;
        }else{
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"156px"});
            $prompt_error.eq(4).css({"display":"block"}).siblings('li').css({"display":"none"});
            register_code_return = 0;
        }
    });


    // 电子邮箱正则
    var $email = $('#email');

    $email.focus(function(){
        $(this).css({"border":"2px solid #7fcbfe","height":"32px","width":"158px"});
        $prompt_text.eq(5).css({"display":"block"}).siblings('li').css({"display":"none"});
    });

    $email.blur(function(){
        if(!/^[a-z0-9][\w\-\.]{2,}@[a-z0-9\-]+(\.[a-z]{2,})+$/.test($email.get(0).value)){
            $(this).css({"border":"2px solid #f77799","height":"32px","width":"156px"});
            $prompt_error.eq(5).css({"display":"block"}).siblings('li').css({"display":"none"});
            email_return = 0;
        }else{
            $(this).css({"border":"1px solid #ccc","height":"34px","width":"158px"});
            $prompt_correct.eq(5).css({"display":"block"}).siblings('li').css({"display":"none"});
            email_return = 1;
        }
    });

    // var $clicked = $('.clicked');
    // if($clicked.get(0).checked === 'false'){
    //     return;
    // }


    var login_val = 0;
    var password_val = 0;
    var mobile_val = 0;
    var email_val = 0;
    // 点击注册
    $reg.on('click',function(){
        if(login_reurn && password_return && confirmPassword_retur && mobile_return && register_code_return && email_return){
            // 获取注册页面，用户输入的信息
            login_val = $loginId.get(0).value;
            password_val = $password.get(0).value;
            mobile_val = $mobile.get(0).value;
            email_val = $email.get(0).value;

            // 发起请求,添加到数据库
            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(xhr.status === 200 || xhr.status === 304){
                    var res = xhr.responseText;
                    console.log(res);
                    if(res=='ok'){
                        alert("注册成功！");
                    }else if(res=='fail'){
                        alert("用户名已经存在");
                    }
                }
            }
            xhr.open('get',`http://localhost:1111/api/reg.php?username=${login_val}&password=${password_val}&mobile=${mobile_val}&email=${email_val}`,true);
            xhr.send();
        }else{
            alert('信息填写不完全');
        }
    });


});