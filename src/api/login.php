<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 13:47:48
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 13:51:25
 */

    include 'connect.php';
    
    $username = isset($_GET['username']) ? $_GET['username'] : '';
    $password = isset($_GET['password']) ? $_GET['password'] : '';

    // 密码md5加密
    $password = md5($password);

    $sql = "select * from user where (username='$username' or mobile='$username' or email = '$username') and password='$password'";

    // 获取查询结果
    $result = $conn->query($sql);
    $row = $result->fetch_row();

    if($row[0]){
        echo 'ok';
    }else{
        echo 'fail';
    }

    // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();

?>