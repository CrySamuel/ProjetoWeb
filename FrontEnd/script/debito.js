function debito() {

    var arquivo = document.getElementById('debito');
    var dados = new FormData(arquivo);

    fetch('../../BackEnd/debito.php', {
        method: "POST",
        body: dados
    });
}