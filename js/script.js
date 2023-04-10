const form = document.getElementById('update-form');
const updateBtn = document.getElementById('update-btn');

form.addEventListener("submit", (campo) => {
    campo.preventDefault()
    const atualiza ={
     "nome": campo.target.elements['nome'].value,
     "idade": campo.target.elements['idade'].value,
     "biografia": campo.target.elements['biografia'].value,
     "localizacao": campo.target.elements['localiza'].value,
    }
    localStorage.setItem("atualizar", JSON.stringify(atualiza))
})
function atualizaElemento() {
    console.log(nome)
    console.log(idade)
    console.log(biografia)
    console.log(localiza)

    
}
    perfil.innerHtml = `
    <main class="perfil" id="perfil" data-perfil>
    <div id="imagem_de_perfil">
     <h1>Imagem de Perfil</h1>
     <p id="imagemP">
         <img src="./imagens/Profile-Avatar-PNG-Picture.png">
     </p>
    </div>
    <div id="nomeP">
     <h2>${}</h2>
    </div>
    <div id="idadeP">
     <h3>${}</h3>
    </div>
    <div id="localizacaoP">
     <h4>${}</h4>
    </div>
    <div id="biografiaP">
     <h5>Biografia</h5>
     <p id="bioP">
        ${}
     </p>
    </div>
 </main>
    `
