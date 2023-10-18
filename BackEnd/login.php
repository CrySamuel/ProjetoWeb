<?php

    $email = $_POST['Email'];

    $senha = $_POST['Senha'];

    $con = mysqli_connect('localhost:3306', 'root', '2810leticia', 'lojaweb');

    $query = "SELECT email, senha FROM registro WHERE email='$email' AND senha='$senha'";
    
    $result = mysqli_query($con, $query);

    if(mysqli_num_rows($result) <= 0){
        http_response_code(401);
    } else {
        http_response_code(200);
    }

?>