const mensagem_de_erro = document.querySelector('.mensagem-de-erro');

function login() {

    var usuario = document.getElementById('usuario').value;
    var senha= document.getElementById('senha').value;

    if (usuario=="admin" && senha=="admin") {

        window.location="home.html";

    }

    else { 
        
        mensagem_de_erro.innerHTML = `<div class="mensagem-de-erro">Ops, usuário ou senha inválidos. Tente novamente!</div>`;
    
    }

    console.log(login);

}

function alerta() {

    alert("teste");

}