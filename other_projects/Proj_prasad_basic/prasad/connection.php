<?php
//server connect params
$servername = "localhost";
$login = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = mysqli_connect($servername, $login, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>