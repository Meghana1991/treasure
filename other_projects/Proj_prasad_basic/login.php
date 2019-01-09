<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

$email = $_POST['email'];
$passkey = $_POST['passkey'];
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM `credentials` WHERE email = '$email' AND passkey = '$passkey'";
$result = $conn->query($sql);

$fetch_name = "SELECT last_name FROM `credentials` WHERE email = '$email'";
if($result1 = $conn->query($fetch_name)){
    while($row = $result1->fetch_assoc()){
        echo $row['last_name'];
    }
}
$conn->close();
?>