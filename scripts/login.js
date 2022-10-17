// Variáveis fora de Função

const mensagem_de_erro = document.querySelector('.mensagem-de-erro');
const borda_amarela_usuario = document.querySelector('.borda__usuario');
const borda_amarela_senha = document.querySelector('.borda__senha');
const usuario_dentro = document.querySelector('.icone__usuario');
const senha_dentro = document.querySelector('.icone__cadeado');

// Função que valida os Inputs ao clicar em "Continuar"

function login() {

    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    var dados_salvos = {
        
        usuario: "admin", 
        senha: "admin"
    
    }

    if (dados_salvos.usuario==usuario && dados_salvos.senha==senha) {

        localStorage.setItem('logado', JSON.stringify(dados_salvos));
        window.location="home.html";

    }

    else if (dados_salvos.usuario!==usuario || dados_salvos.senha!==senha){ 
        
    
        mensagem_de_erro.innerHTML = `<div class="mensagem-de-erro">Ops, usuário ou senha inválidos. Tente novamente!</div>`; //Adiciona mensagem de erro
        borda_amarela_usuario.classList.add("borda__erro"); //Adiciona borda amarela no campo do usuário
        borda_amarela_senha.classList.add("borda__erro"); //Adiciona borda amarela no campo da senha

    }

}

// Função que insere icone do Usuario ao digitar dentro do input

function usuarioDentro() {

    usuario_dentro.classList.add('icone__usuario-dentro');

}

// Função que insere icone do Cadeado ao digitar dentro do input

function senhaDentro() {

    senha_dentro.classList.add('icone__senha-dentro');

}