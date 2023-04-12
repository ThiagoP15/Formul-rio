
const perfil = document.getElementById("perfil");
const form = document.getElementById("update-form");
const btn = document.getElementById("update-btn");

const nomeElemento = document.getElementById("nomeP");
const idadeElemento = document.getElementById("idadeP");
const localElemento = document.getElementById("localizacaoP");
const bioElemento = document.getElementById("biografiaP");
const emailElemento = document.getElementById("emailP");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formulario = {
    "nome": evento.target.elements['nome'].value,
    "idade": evento.target.elements['idade'].value,
    "local": evento.target.elements['localiza'].value,
    "bio": evento.target.elements['bio'].value,
    "email": evento.target.elements['email'].value
  };
  
  localStorage.setItem("dados", JSON.stringify(formulario));
  
  const dados = JSON.parse(localStorage.getItem("dados"));

  // atualiza os elementos HTML com os valores armazenados
  nomeElemento.textContent = "Nome: " + dados.nome;
  idadeElemento.textContent = "Idade: " + dados.idade;
  localElemento.textContent = "Localização: " + dados.local;
  bioElemento.textContent = dados.bio;
  emailElemento.textContent = "Email: " + dados.email;

  // limpa os campos do formulário
  evento.target.reset();
});

// verifica se há dados armazenados e preenche os elementos HTML com os valores
const dados = JSON.parse(localStorage.getItem("dados"));

if (dados) {
  nomeElemento.textContent = "Nome: " + dados.nome;
  idadeElemento.textContent = "Idade: " + dados.idade;
  localElemento.textContent = "Localização: " + dados.local;
  bioElemento.textContent = dados.bio;
  emailElemento.textContent = "Email: " + dados.email;
}

