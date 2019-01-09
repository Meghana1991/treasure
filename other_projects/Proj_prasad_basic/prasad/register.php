<?php
//initialize variables
$username = "";
$email = "";
$errors = array();

require 'connection.php';

//REGISTERATION PART
if (isset($_POST['reg_button_clicked'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password_actual = mysqli_real_escape_string($conn, $_POST['password_actual']);
    $password_confirm = mysqli_real_escape_string($conn, $_POST['password_confirm']);

    if (empty($username)) {
        array_push($errors, "Username is required");
    }
    if (empty($email)) {
        array_push($errors, "Email is required");
    }
    if (empty($password_actual)) {
        array_push($errors, "Password is required");
    }
    if ($password_actual != $password_confirm) {
        array_push($errors, "The two passwords do not match");
    }

    $user_check_query = "SELECT * FROM printslot.users WHERE username='$username' OR email='$email' LIMIT 1";
    $result = mysqli_query($conn, $user_check_query);
    $user = mysqli_fetch_assoc($result);
    if ($user) {
        if ($user['username'] === $username && !empty($username)) {
            array_push($errors, "Username already exists");
        }

        if ($user['email'] === $email && !empty($email)) {
            array_push($errors, "email already exists");
        }
    }
    if (count($errors) == 0) {
        $password = md5($password_actual);
        $query = "INSERT INTO printslot.users (username, email, password) 
  			  VALUES('$username', '$email', '$password')";

        if (mysqli_query($conn, $query) === true) {
            // echo "Successful Registeration";
            echo <<<EOL
                <div class="popup" id="login-popup">
                    <p>Registeration successful</p>
                    <button class="ok" onclick = "ok('reg')">Go to Login Page</button>
                </div>
EOL;
        } else {
            echo "Error in Registeration: ";
        }
    }
}

// LOGIN PART
if (isset($_POST['login_button_clicked'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password_actual = mysqli_real_escape_string($conn, $_POST['password_actual']);

    if (empty($username)) {
        array_push($errors, "Username is required");
    }
    if (empty($password_actual)) {
        array_push($errors, "Password is required");
    }

    if (count($errors) == 0) {
        $password_actual = md5($password_actual);
        $query1 = "SELECT * FROM printslot.users WHERE username='$username' AND password='$password_actual'";
        $results = mysqli_query($conn, $query1);

        if ($results) {
            if (mysqli_num_rows($results) == 1) {
                // echo 'Login successful';
                echo <<<EOL
                <div class="popup" id="login-popup">
                    <p>Login successful</p>
                    <button class="ok" onclick="ok('login')">OK</button>
                </div>
EOL;
                // header('location: welcome.php');
            } else {
                array_push($errors, "Incorrect username/password");
            }
        } else {
            array_push($errors, "Incorrect username / password");
        }
    }
}
$conn->close();
?>
