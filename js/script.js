const perfil = document.querySelector("perfil")
const form = document.getElementById('update-form');
const updateBtn = document.getElementById('update-btn');

function alteraDados () {
    var nome = document.getElementById('nome').value
    var idade = document.getElementById('idade').value
    var bio = document.getElementById('biografia').value
    var local = document.getElementById('localiza').value
}
function atualiza(perfil) {
    perfil.innerHTML = `<div id="nomeP">${nome}</div>`
    perfil.innerHTML = `<div id="idadeP">${idade}</div>`
    perfil.innerHTML = `<div id="biografiaP">${bio}</div>`
    perfil.innerHTML = `<div id="localizacaoP">${local}</div>`

    return atualiza;
}
