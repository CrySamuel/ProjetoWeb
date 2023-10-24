
var radio = document.querySelector('.nav-auto')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg() {
    cont++

    if(cont > 3) {
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

var dados = [{nome:"Twitter"}, {nome:"Instagram"},{nome:"YouTube"}];

for(var i = 0; i < dados.length; i++ ) {

    var conteudo = `
    <div class="cards">
    <div class="card">
      <div class="image-section">
        <a href="../FrontEnd/Pages/produto1.html"><img src="../FrontEnd/Images/create an image 0.png" alt="" class="image-sec"></a>
      </div>
      <div class="text-section">
        <h1>Titulo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, maiores quisquam esse ipsum qui eveniet
          praesentium sunt</p>

        <div class="price" style="margin-top: 20px;">
          <p>$50,00</p>
          <button class="but">Compre aqui</button>
        </div>
      </div>
    </div>
  </div>`;

    document.getElementById('cards').innerHTML += conteudo;
}