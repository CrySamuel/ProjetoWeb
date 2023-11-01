<?php

    $nome = $_POST["nome"];
    $numero_cartao = $_POST["numero_cartao"];
    $CVV = $_POST["CVV"];
    $endereco = $_POST["endereco"];
    $info_add = $_POST["info_addi"];
    $data = $_POST["data"];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "INSERT INTO cartao_debito (nome, numero_cartao, CVV, endereco, info_addi, data) VALUES ('$nome', '$numero_cartao', '$CVV', '$endereco', '$info_add', '$data')";
    mysqli_query($con, $query);
    
?>