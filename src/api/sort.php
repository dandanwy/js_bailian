<?php
/**
 * @Author: Marte
 * @Date:   2017-11-19 17:42:20
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-11-19 17:49:50
 */
    include "connect.php";
    $sort = isset($_GET['sort']) ? $_GET['sort'] : 0;

    if($sort == 0){
        $sql = "select * from goods order by price asc";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $res = json_encode($row,JSON_UNESCAPED_UNICODE);
        echo "$res";
    }else if($sort == 1){
        $sql = "select * from goods order by price desc";
        $result = $conn->query($sql);
        $row = $result->fetch_all(MYSQLI_ASSOC);
        $res = json_encode($row,JSON_UNESCAPED_UNICODE);
        echo "$res";
    }

?>