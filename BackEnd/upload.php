<?php

    $produto = $_POST['Produto'];
    $preco = $_POST['Preço'];
    $descricao = $_POST['Descrição'];


    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');
    $query = "INSERT INTO produtos (nome, preco, descricao) VALUES ('$produto', '$preco', '$descricao')";

    mysqli_query($con, $query);

    $arquivo = $_FILES["arquivo"];

    if ($arquivo["type"] == "image/png")
    {
        $novo_endereco = "../upload/" . $arquivo["name"];
        move_uploaded_file($arquivo["tmp_name"], $novo_endereco);
        $mensagem = "Uploadd Realizado com sucesso";
    }
    else
    {
        $mensagem = "Somente é permitido imagem em png";
    }   

    $json = json_encode($mensagem);
    echo $json;

?> 