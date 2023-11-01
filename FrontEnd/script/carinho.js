var dados; // Declare a variável dados aqui.

window.onload = async function () {

  var resultado = await fetch("../../BackEnd/carrinho.php", {
      method: "GET"
  });

  var dados = await resultado.json();
  var total = 0; 

  for (var i = 0; i < dados.length; i++) {
      var template =
          `<div class="card">
              <div class="image-section">
                  <img src="../../upload/${dados[i].id_produtos}.png" class="image-sec" />
              </div>
              <div class="text-section">
                  <h1>${dados[i].nome}</h1>
                  <p>${dados[i].descricao}</p>
              </div>
              <div class="but">
                  <p>R$ ${dados[i].preco}</p>
                  <button onclick="excluir(${dados[i].id_produtos})" class="excluir">Excluir</button>
              </div>
          </div>
      `;
    
      document.getElementById('produtos').innerHTML += template;

      total += parseFloat(dados[i].preco);
  }


  var totalElement = document.createElement('p');
  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;

  document.getElementById('total').appendChild(totalElement);


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

function excluir(id){

  var dados = new FormData();
  dados.append("id", id)

  fetch ("../../BackEnd/carrinhoDelet.php", {
    method: "POST",
    body: dados
  })
  .then(function(response) {
    if (response.ok) {
      window.location.reload(true);
    } else {
      console.error("Erro ao excluir o item");
    }
  });
}