function upload() {

    var arquivo = document.getElementById('arquivo').files[0];
    var dados = new FormData();
    dados.append('arquivo', arquivo);

    fetch('../../BackEnd/upload.php', {
        method: "POST",
        body: dados
    });
}

function uploadFormData() {
    var form = document.getElementById('formulario');
    var formData = new FormData(form);

    fetch("../../BackEnd/upload.php", {
        method: "POST",
        body: formData
    });
}
