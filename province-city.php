<?php 
//接受id的值
$pid = $_GET['pid'];

$dsn = 'mysql:dbname=city;host=127.0.0.1;port=3306;charset=utf8';
$user = 'root';
$password = 'mike';
$pdo = new PDO($dsn,$user,$password);
$sql = "select * from region where pid=".$pid;

$res = $pdo->query($sql);

//$result = $res->fetch(PDO::FETCH_ASSOC); // 一维关联数组
$result = $res->fetchAll(PDO::FETCH_ASSOC); // 二维关联数组 

//输出json格式的数据
echo json_encode($result);