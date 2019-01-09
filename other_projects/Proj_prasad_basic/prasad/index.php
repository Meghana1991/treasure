<?php include('register.php') ?>
<html>
    <head>
    <title>Registration form</title>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src='js/jqueryVal.js'></script>

    </head>
    <body>
        <div class="header">
            <h2>Register</h2>
        </div>
        <form method="post" action="index.php">
            <div class="input-group">
                <label>Username</label>
                <input type="text" name="username">
            </div>
            <div class="input-group">
                <label>Email</label>
                <input type="email" name="email">
            </div>
            <div class="input-group">
                <label>Password</label>
                <input type="password" name="password_actual">
            </div>
            <div class="input-group">
                <label>Confirm password</label>
                <input type="password" name="password_confirm">
            </div>
            <div class="input-group">
                <button type="submit" class="btn" name="reg_button_clicked">Register</button>
            </div>
            <p>
                Already a member? <a href="login.php">Sign in</a>
            </p>
            <?php include('errors.php'); ?>
        </form>
    </body>
</html>