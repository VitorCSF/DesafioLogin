// Variáveis fora de Função

const api = {

    key: "d4e0cf6f6b30830f37ee58a2a22eac18",
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric"

}

const cidade = document.querySelector('.cidade')
const container_img = document.querySelector('.container-img');
const container_temp = document.querySelector('.container-temp');
const temp_number = document.querySelector('.container-temp div');
const temp_unit = document.querySelector('.container-temp span');
const weather_t = document.querySelector('.weather');

var contador = 600 + 1;

// Função para mostrar a hora(s) e minuto(s) na tela 

function mostraHora() {

    var data = new Date(); // Obtém a hora atual

    // Guarda cada pedaço em uma variável

    var hora = data.getHours(); // 00-23
    var min = data.getMinutes(); // 00-59

    // Adiciona um '0' à esquerda para horas de 0 a 10

    if (hora < 10) {

        hora = '0' + hora;  

    }

    // Adiciona um '0' à esquerda para minutos de 0 a 10

    if (min < 10) {

        min = '0' + min;  

    }

    // Formata a hora

    var str_hora = hora + ':' + min;

    // Mostra o resultado de str_hora

    document.getElementById("hora").value=str_hora;

}

// Intervalo para a função mostraHora     

    var timer=setInterval(mostraHora,1000);

//Função para mostrar o dia da semana, dia, mês e ano

    function mostraDia(){

    var data = new Date();  // Obtém a data

    // Guarda cada pedaço em uma variável

    var semana = new Array('domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sábado');

    var dia = data.getDate(); // Guarda o dia 

    var mes = new Array('janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto','setembro','outubro','novembro','dezembro'); // Converte o valor do mês em String

    var ano = data.getFullYear(); // Guarda o ano

    // Formata o dia da semana, dia, mês e ano 

    var str_data = semana[data.getDay()] + ', ' + dia + ' de ' + mes[data.getMonth()] + ' de ' + ano;

    // Mostra o resultado de str_data

    document.getElementById("data").value=str_data;

}

//
  
 function mostraContador(){

    contador--;

    if (contador == 0) {

        clearInterval(timerContador);

        if (window.confirm("Tempo limite excedido! Clique OK para voltar ao Login ou Cancelar para recarregar a página") == true) {

            window.location ="index.html";

        } else {

            location.reload();

        }

    }

    document.getElementById("contando").value=contador;

}

//

var timerContador = setInterval(mostraContador, 1000);

window.addEventListener('load', () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(configuraPosicao, mostraErro);

    }

    else {

        alert('Navegador não suporta Geolocalização');

    }

    function configuraPosicao(position) {

        console.log(position)
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        resultadosCoordenadas(lat, long);

    }

    function mostraErro(error) {

        alert(`erro: ${error.message}`);

    }
})

function resultadosCoordenadas(lat, long) {

    fetch(`${api.base}weather?lat=${lat}&lon=${long}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {

            if (!response.ok) {
                throw new Error(`http error: status ${response.status}`)

            }

            return response.json();

        })

        .catch(error => {

            alert(error.message)

        })

        .then(response => {

            mostraTempo(response)

        });
}

function procuraCidade(city) {

    fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {

            if (!response.ok) {

                throw new Error(`http error: status ${response.status}`)

            }

            return response.json();

        })

        .catch(error => {

            alert(error.message)

        })

        .then(response => {

            mostraTempo(response)

        });
}

function mostraTempo(weather) {

    console.log(weather)

    cidade.innerText = `${weather.name} - ${weather.sys.country}`;

    let nomeIcone = weather.weather[0].icon;
    container_img.innerHTML = `<img src="./icones/${nomeIcone}.png" class="imagem-tempo">`;

    let temperatura = `${Math.round(weather.main.temp)}`
    temp_number.innerHTML = temperatura;
    temp_unit.innerHTML = `°`;

}

function continueNavegando() {

    window.open ("https://noticias.uol.com.br/");

}

function logout() {

    if (window.confirm("Você deseja realmente sair? Clique OK para sair ou Cancelar para permanecer na página") == true) {

        window.location ="index.html";

    } 

}

function carregaFuncao() {

    mostraDia();
    mostraHora();
    mostraContador();

}