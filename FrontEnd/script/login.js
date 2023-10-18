function login(){

    console.log('awd');
    var form = document.getElementById('login')
    var dados = new FormData(form);

    fetch("../../BackEnd/login.php", {
        method: "POST",
        body: dados
    }).then(response => {
        if(response.status == 200){
            document.cookie = "user=" + dados.get('Email');
            window.location.href = '../index.html';
        } else{
            alert('Login e/ou senha incorretos');
        }
        })
        .catch(err => {
            console.log(err);
        });
}
