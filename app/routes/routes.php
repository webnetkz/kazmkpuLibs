<?php

$routes = [
    'index' => '/index.php',
    'components' => '/pages/componentsCss.php',
    'elements' => '/pages/elementsCss.php',
];

$url = $_SERVER['REQUEST_URI'];
foreach($routes as $k => $v){
    if($url == $v) {
        echo $v.'<br>';
        //var_dump($routes);

    } else {
        //header('Location: https://google.com');
    }

}

