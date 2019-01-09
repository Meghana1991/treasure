<!--
1)check if the username not present in the db
2)check for this username, the password entered is correct
3)login successfully
-->
<html>

    <form method="post" action="login.php">
        <div>
            Email ID :
            <input type="text" name="email"/>
            Password :
            <input type="text" name="passkey"/>
            <input type="submit" value="Login" />
        </div>
        <div>
            <br />
            <span>Register</span>
        </div>
    </form>

    <form method="post" action="register.php">
        <div>
        <br />
            Last Name :
            <input type="text" name="last_name" />
            Email ID :
            <input type="text" name="email" />
            Password :
            <input type="text" name="passkey" />
            <input type="submit" value="Register" />
        </div>
    </form>

    <!-- <div>
        <button onclick ="callPhpFunc()">Try Joins</button>
    </div> -->
</html>