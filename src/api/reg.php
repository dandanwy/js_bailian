<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 09:01:49
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 09:57:03
 */

    // 引入其他php文件
    include 'connect.php';

    // 接受前端数据
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';
    $mobile = isset($_GET['mobile']) ? $_GET['mobile'] : '';
    $email = isset($_GET['email']) ? $_GET['email'] : '';

    //查看用户名是否已经存在
    $sql = "select username from user where username='$username'";
    $result = $conn->query($sql);

    if($result->num_rows>0){
        // 释放查询内存(销毁)
        $result->free();

        // 用户名已经被占用
        echo "fail";
    }else{
        // 释放查询内存(销毁)
        $result->free();

        // 密码md5加密
        $password = md5($password);

        $sql = "insert into user(username,password,mobile,email) values('$username','$password','$mobile','$email')";
        $result = $conn->query($sql);


        if ($result) {
            // 写入成功
            echo "ok";
        } else {
            // 写入失败
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }



    //关闭连接
    $conn->close();
?>