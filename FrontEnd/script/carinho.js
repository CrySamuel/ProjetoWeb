window.onload = async function(){
    
    var resultado =await fetch ("../../BackEnd/carrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
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
              <p>${dados[i].preco}</p>
              <button onclick="adicionar(${dados[i].id_produtos})">Compre aqui</button>
            </div>
      </div>
        `;
      
      document.getElementById('produtos').innerHTML += template;
    }
}

