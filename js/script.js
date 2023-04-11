
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
        
        }
                
        localStorage.setItem("dados", JSON.stringify(formulario))
            })