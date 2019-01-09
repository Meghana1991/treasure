<?php

$last_name = $_POST['last_name'];
$email = $_POST['email'];
$passkey = $_POST['passkey'];

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO credentials (last_name, email, passkey)
VALUES ('$last_name','$email','$passkey')";

if ($conn->query($sql) === TRUE) {
    echo "Successful Registeration";
} else {
    echo "Error in Registeration: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>