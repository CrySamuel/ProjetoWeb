var dados; // Declare a variável dados aqui.

function upload() {

    var arquivo = document.getElementById('upload');
    var dados = new FormData(arquivo);

    fetch('../../BackEnd/admAdd.php', {
        method: "POST",
        body: dados
    });
}

