<?php

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $resultado = mysqli_query($con, "SELECT * FROM  carrinho JOIN produtos ON carrinho.id_produtos = produtos.id_produtos");

    $dados = array();

    while($registro = mysqli_fetch_assoc($resultado)){
        array_push($dados, $registro);
    }

    $json = json_encode($dados);
    echo $json;
?>  