function registrar(){

    var form = document.getElementById('cadastro')
    var dados = new FormData(form);

    fetch("../../BackEnd/cadastro.php", {
        method: "POST",
        body: dados
    });
}