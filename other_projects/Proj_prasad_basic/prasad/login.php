<?php include('register.php') ?>

<html>
<head>
  <title>Login form</title>
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src='js/jqueryVal.js'></script>

</head>
<body>
  <div class="header">
  	<h2>Login</h2>
  </div>
	 
  <form method="post" action="login.php">
  	<div class="input-group">
  		<label>Username</label>
  		<input type="text" name="username" >
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password_actual">
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_button_clicked">Login</button>
  	</div>
  	<p>
  		Create an account? <a href="index.php">Sign up</a>
    </p>
    <?php include('errors.php'); ?>
  </form>
</body>
</html>