
document.addEventListener("DOMContentLoaded", function() {
  var radio = document.querySelector('.nav-auto');
  var cont = 1;
  document.getElementById('radio1').checked = true;

  setInterval(function() {
    proximaImg();
  }, 5000);

  function proximaImg() {
    cont++;

    if (cont > 3) {
      cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
  }
});

window.onload = async function carrega(){

    var resultado = await fetch("../BackEnd/getProduct.php", {
        method: "GET"
    });

    var dados = await resultado.json();


    for(var i = 0; i < dados.length; i++){
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
              <p>${dados[i].preco}</p>
              <button onclick="adicionar(${dados[i].id_produtos})">Compre aqui</button>
            </div>
      </div>`;

      document.getElementById('produtos').innerHTML += template;
    }
}

function adicionar(id){

  var dados = new FormData();
  dados.append("id", id)

  fetch ("../../BackEnd/carrinhoAdd.php", {
    method: "POST",
    body: dados
  });
}