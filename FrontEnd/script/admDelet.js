window.onload = async function carrega(){

    var resultado = await fetch("../../BackEnd/getProduct.php", {
        method: "GET"
    });

    var dados = await resultado.json();


    for(var i = 0; i < dados.length; i++){
        var template = 
        `  
        <div class="card">
        <div class="image-section">
          <img src="../../upload/${dados[i].id_produtos}.png" class="image-sec" />
        </div>
        <div class="text-section">
          <h1>${dados[i].nome}</h1>
          <p>${dados[i].descricao}</p>
        </div>
            <div class="but">
              <p>${dados[i].preco}</p>
              <button onclick="deletar(${dados[i].id_produtos})">Excluir</button>
            </div>
      </div>
      `;

        document.getElementById('produtos').innerHTML += template;
    }
}

function deletar(id){

  var dados = new FormData();
  dados.append("id", id)

  fetch ("../../BackEnd/admDelet.php", {
    method: "POST",
    body: dados
  });
}