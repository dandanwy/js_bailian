<?php
/**
 * @Author: Marte
 * @Date:   2017-11-18 19:13:32
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-18 19:30:46
 */
    
    include 'connect.php';
    
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    
    
    // 编写sql语句
    $sql = "select * from goods where id='$id'";

    // 得到一个：查询结果集
    $result = $conn->query($sql);



    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_row();
    
    //释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据库，避免资源浪费
    $conn->close();

    // 把数组转换成json字符串
    $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    echo "$res";



?>