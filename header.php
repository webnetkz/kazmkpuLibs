<?php

require_once 'config.php'

?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title><?=$title?></title>

        <meta charset="UTF-8">
        <meta name="theme-color" content="rgb(0, 0, 0)">
        <meta name="author" content="TOO WebNet">
        <meta name="description" content="Made in WebNet">
        <meta name="keywords" content="WebNet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="robots" content="index, follow">

        <!-- <link rel="shortcut icon" href="/public/img/miniLogo.png" type="image/png">
        <link rel="apple-touch-icon" href="/public/img/logo.png"> -->
        <link rel="stylesheet" type="text/css" href="/public/styles/frontHelper.css">
        <link rel="manifest" href="/public/json/manifest.json">
        
        <style>
            ::-webkit-scrollbar { /* 1 - скроллбар */
                width: 8px;
                height: 32px;
                background-color: #33353a;
            }
            ::-webkit-scrollbar-button { /* 2 - кнопка */
                background-color: #33353a;
                height: 8px;
                border-radius: 7px;
            }
            ::-webkit-scrollbar-track { /* 3 - трек */
                background-color: #1b1c1f;
                height: 8px;
                border-radius: 7px;
            }
            ::-webkit-scrollbar-track-piece { /* 4 - видимая часть трека */
                background-color: #1b1c1f;
                height: 8px;
            }
            ::-webkit-scrollbar-thumb { /* 5 - ползунок */
                border-radius: 7px;
                background-color: #d1d1d1;
            }
            ::-webkit-scrollbar-corner { /* 6 - уголок */
                background: red;
            }
            ::-webkit-resizer { /* 7 - изменение размеров */
                width: 100px;
            }
        </style>

    </head>

    <body>

    <div>
        <ul class="HorizontalMenu" id="menu">
            <li><a href="<?=$protocol?>://<?=$domain?>/index" class="activeItem">Home</a></li>
            <li><a href="<?=$protocol?>://<?=$domain?>/pages/componentsCss">Components only CSS</a></li>
            <li><a href="<?=$protocol?>://<?=$domain?>/pages/elementsCss">Elements CSS</a></li>
        </ul>
    </div>