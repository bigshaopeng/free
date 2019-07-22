
<?php
$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "test";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
 
$sql = "SELECT id,name,password FROM user_center";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // var_dump($result);
    // echo $result;
    // 输出数据
    while($row = $result->fetch_assoc()) {
    echo urlencode(json_encode($row));
        
    }
} else {
    echo "0 结果";
}
$conn->close();
?>