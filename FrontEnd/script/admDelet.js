window.onload = async function carrega(){

  var resultado = await fetch("../../BackEnd/getProduct.php", {
    method: "GET"
  });

  dados = await resultado.json(); 

  for (var i = 0; i < dados.length; i++) {
    var template =
      ` <div class="card">
        <div class="image-section">
          <img src="../../upload/${dados[i].id_produtos}.png" class="image-sec" />
        </div>
        <div class="text-section">
          <h1>${dados[i].nome}</h1>
          <p>${dados[i].descricao}</p>
        </div>
        <div class="but">
          <p>R$ ${dados[i].preco}</p>
          <button onclick="deletar(${dados[i].id_produtos})">Deletar Item</button>
        </div>
      </div>`;

    var produtosElement = document.getElementById('produtos');
    if (produtosElement) {
      produtosElement.innerHTML += template;
    }
  }
}

function handleSearch() {
  var searchItem = document.getElementById("search-box").value.toLowerCase();
  var filtrar = dados.filter(function(produto) {
    return (
      produto.nome.toLowerCase().includes(searchItem) ||
      produto.descricao.toLowerCase().includes(searchItem) ||
      produto.preco.toString().toLowerCase().includes(searchItem)
    );
  });

  var produtosElement = document.getElementById('produtos');
  if (produtosElement) {
    produtosElement.innerHTML = '';
  }

  for (var i = 0; i < filtrar.length; i++) {
    var conteudo = `
      <div class="card">
        <div class="image-section">
          <img src="../../upload/${filtrar[i].id_produtos}.png" class="image-sec" />
        </div>
        <div class="text-section">
          <h1>${filtrar[i].nome}</h1>
          <p>${filtrar[i].descricao}</p>
        </div>
        <div class="but">
          <p>R$ ${filtrar[i].preco}</p>
          <button onclick="deletar(${filtrar[i].id_produtos})">Deletar Item</button>
        </div>
      </div>`;

    if (produtosElement) {
      produtosElement.innerHTML += conteudo;
    }
  }
}

function deletar(id) {
  var dados = new FormData();
  dados.append("id", id);

  fetch("../../BackEnd/admDelet.php", {
    method: "POST",
    body: dados
  }).then(function(response) {
    if (response.ok) {
      window.location.reload(true);
    } else {
      console.error("Erro ao deletar o item");
    }
  });
}