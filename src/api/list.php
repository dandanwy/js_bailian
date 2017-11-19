<?php
/**
 * @Author: Marte
 * @Date:   2017-11-17 15:05:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-19 16:01:23
 */
    include 'connect.php';

    $pageNo = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 50;


    $sql = "select * from goods limit ".(($pageNo-1)*$qty).",".$qty;

    // 获取结果集
    $result = $conn->query($sql);

    // 使用查询结果集
    // 返回数组
    $row = $result->fetch_all(MYSQLI_ASSOC);
    
    // 把数组转换成json字符串
    // $res = json_encode($row,JSON_UNESCAPED_UNICODE);

    // echo "$res";

    // 获取总数据
    $total_sql = "select count(*) from goods";
    // 获取数据总条数
    $total_result = $conn->query($total_sql);
    $total_res = $total_result->fetch_row();
    // 生成总页数
    $total_page = ceil($total_res[0]/50);
    // echo "$total_page";

    $total_data = array(
        'data' => $row,
        'total_page'=>$total_page
        );
    echo json_encode($total_data,JSON_UNESCAPED_UNICODE);

?>