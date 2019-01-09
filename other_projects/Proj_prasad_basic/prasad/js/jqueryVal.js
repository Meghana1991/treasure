$(document).ready(function () {
    $("button.ok").click(function () {
        $("#login-popup").css('display', 'none');
    });
});


function ok(from) {
    if (from == 'login') {
        window.location.href = 'welcome.php';
    } else {
        window.location.href = 'login.php';
    }
}