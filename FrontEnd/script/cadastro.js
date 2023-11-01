var dados; // Declare a variável dados aqui.

function registrar(){

    var form = document.getElementById('cadastro')
    var dados = new FormData(form);

    fetch("../../BackEnd/cadastro.php", {
        method: "POST",
        body: dados
    });
}

window.onload = async function carrega() {

for (var i = 0; i < filtrar.length; i++) {
    var conteudo = `
      <div class="card">
        <div class="image-section">
          <img src="../upload/${filtrar[i].id_produtos}.png" class="image-sec" />
        </div>
        <div class="text-section">
          <h1>${filtrar[i].nome}</h1>
          <p>${filtrar[i].descricao}</p>
        </div>
        <div class="but">
          <p>R$ ${filtrar[i].preco}</p>
          <button onclick="adicionar(${filtrar[i].id_produtos})">Compre aqui</button>
        </div>
      </div>`;

    if (produtosElement) {
      produtosElement.innerHTML += conteudo;
    }
  }
}