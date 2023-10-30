<?php

    $id = $_POST ["id"];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "DELETE FROM carrinho WHERE id_produtos = '$id'";

    mysqli_query($con, $query);

?> 