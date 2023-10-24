<?php

    $nome = $_POST['Nome'];

    $senha = $_POST['Senha'];

    $email = $_POST['Email'];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "INSERT INTO registro (nome, senha, email) VALUES ('$nome','$senha','$email')";
    
    mysqli_query($con, $query);
    
?>