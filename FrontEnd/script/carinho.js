window.onload = async function(){
    
    var resultado =await fetch ("../../BackEnd/carinho.php", {
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
          <div class="price" style="margin-top: 20px;">
            <p>${dados[i].preco}</p>
          </div>
        </div>
      </div>`;

        document.getElementById('produtos').innerHTML += template;
    }
}