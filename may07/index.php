<?php
    $first = 'matt';
    $last = 'higley';
    $a2 = 10;
    $b = 25;
    $c = $a2 + $b;
    $d = 'black';
?>

<?php
    $x = 5;
    function test($myVar){
        echo "The value of x is: " . $myVar;
    }

    test($x);

    function test2(){
        global $y;
        $y = 75;
        // $y = 6;
    }

    test2();

    echo $y;

?>


<!--
<p>Hello
<?php
/*
    $txt = $first . ' ' . $last;
    print $txt;
*/
?>, Welcome to my site</p>

<p>
My car is <?php // echo $d; ?>
</p>

<p>The answer is: <?php // echo $c; ?></p>
-->