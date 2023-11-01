var dados; // Declare a variável dados aqui.

document.addEventListener("DOMContentLoaded", function() {
  var radio = document.querySelector('.nav-auto');
  var cont = 1;

  function checkRadio(id) {
    var radioElement = document.getElementById(id);
    if (radioElement) {
      radioElement.checked = true;
    }
  }

  checkRadio('radio1');

  setInterval(function() {
    proximaImg();
  }, 5000);

  function proximaImg() {
    cont++;

    if (cont > 3) {
      cont = 1;
    }

    checkRadio('radio' + cont);
  }
});

window.onload = async function carrega() {
  var resultado = await fetch("../BackEnd/getProduct.php", {
    method: "GET"
  });

  dados = await resultado.json(); // Removi a declaração "var" para atualizar a variável global.

  for (var i = 0; i < dados.length; i++) {
    var template =
      ` <div class="card">
        <div class="image-section">
          <img src="../upload/${dados[i].id_produtos}.png" class="image-sec" />
        </div>
        <div class="text-section">
          <h1>${dados[i].nome}</h1>
          <p>${dados[i].descricao}</p>
        </div>
        <div class="but">
          <p>R$ ${dados[i].preco}</p>
          <button onclick="adicionar(${dados[i].id_produtos})">Compre aqui</button>
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

function adicionar(id) {
  var data = new FormData();
  data.append("id", id);

  fetch("../BackEnd/carrinhoAdd.php", {
    method: "POST",
    body: data
  });
}
