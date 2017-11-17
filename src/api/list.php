<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 15:05:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-17 15:06:22
 */
    include 'connect.php';

    $sql = "select * from goods";

    // 获取结果集
    $result = $conn->query($sql);

    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    // 把数组转换成json字符串
    $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    echo "$res";

?>