<?php
echo '1';
echo '2';
echo '3';
function sleeping()
{
    sleep(10);
    echo '4';
}
sleeping();
echo '5';
echo '6';

//ouput - 123456
// run it in http://www.writephponline.com/
?>