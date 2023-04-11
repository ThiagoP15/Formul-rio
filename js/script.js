
const perfil = document.getElementById("perfil");
const form = document.getElementById("update-form");
const btn = document.getElementById("update-btn");
    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        const formulario = {
         "nome": evento.target.elements['nome'].value,
         "idade": evento.target.elements['idade'].value,
         "local": evento.target.elements['localiza'].value,
         "bio": evento.target.elements['bio'].value,
         "email": evento.target.elements['email'].value
        }
                
        localStorage.setItem("dados", JSON.stringify(formulario))

        const dados = JSON.parse(localStorage.getItem("dados"));

        const nomeElemento = document.getElementById("nomeP");
        const idadeElemento = document.getElementById("idadeP");
        const localElemento = document.getElementById("localizacaoP");
        const bioElemento = document.getElementById("biografiaP");
        const emailElemento = document.getElementById("emailP");
        nomeElemento.textContent = " " + dados.nome;
        idadeElemento.textContent = " " + dados.idade;
        localElemento.textContent = " " + dados.local;
        bioElemento.textContent = dados.bio;
        emailElemento.textContent = " " + dados.email;

            })
