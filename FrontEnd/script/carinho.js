window.onload = async function(){
    
    var resultado =await fetch ("../../BackEnd/carrinho.php", {
        method: "GET"
    });

    var dados = await resultado.json();

    for(var i = 0; i < dados.length; i++){
        var template = 
        ``;
      
      document.getElementById('produtos').innerHTML += template;
    }
}

