<?php

    $id = $_POST ["id"];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "INSERT INTO carrinho (id_produtos) VALUES ('$id')";

    mysqli_query($con, $query);
    
?>