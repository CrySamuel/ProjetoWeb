function upload() {

    var arquivo = document.getElementById('upload');
    var dados = new FormData(arquivo);

    fetch('../../BackEnd/upload.php', {
        method: "POST",
        body: dados
    });
}