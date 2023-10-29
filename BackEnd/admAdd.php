<?php

    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $descricao = $_POST['descricao'];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "INSERT INTO produtos (nome, preco, descricao) VALUES ('$nome', '$preco', '$descricao')";

    mysqli_query($con, $query);

    $arquivo = $_FILES["arquivo"];

    if ($arquivo["type"] == "image/png")
    {
        $id = mysqli_insert_id($con);
        $novo_endereco = "../upload/" . $id.".png";
        move_uploaded_file($arquivo["tmp_name"], $novo_endereco);
        $mensagem = "Upload Realizado com sucesso";
    }
    else
    {
        $mensagem = "Somente é permitido imagem em png";
    }   

    $json = json_encode($mensagem);
    echo $json;

?> 