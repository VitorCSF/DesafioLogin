function login() {

    var done=0;
    var usuario = document.getElementsById('usuario')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsByName('senha')[0].value;
    seha=senha.toLowerCase();
    if (usuario=="admin" && senha=="admin") {
        window.location="home.html";
        done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }

}