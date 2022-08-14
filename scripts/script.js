function limparTabuleiro() {
    erros = 0;
    tentativas = [];
    pTentativas.innerHTML = tentativas.toString();
    qtdVidas.innerHTML = "******";
    for (let i = 1; i <= 6; i++) {
        document.getElementById("boneco-" + i).style.display = 'none';
    }

    [].forEach.call(btns, function(btn) {
        btn.disabled = false;
        btn.className = 'tecla';
    });
}

function gameOver() {
    alert("Ah... você perdeu! A palavra era: " + palavraDaVez);
    limparTabuleiro();
    novaPalavra();
}

function verificarJogo() {
    if (erros >= 6) {
        gameOver();
    }

    let ganhou = true;

    for (let i = 0; i < pEspacos.innerHTML.length; i++) {
        if (pEspacos.innerHTML[i] == '_') {
            ganhou = false;
        }
    }

    if (ganhou) {
        alert("Parabéns! Você ganhou essa partida ;D");
        vitorias++;
        document.getElementById("qtd-pontos").innerHTML = vitorias;
        limparTabuleiro();
        novaPalavra();
    }
}

function contarErro() {
    erros++;

    if (erros >= 6) {
        gameOver();
        return;
    }

    // console.log(("boneco-" + erros));
    document.getElementById("boneco-" + erros).style.display = 'inline-block';

    let texto = '';
    for (let i = 0; i < 6 - erros; i++) {
        texto += "*";
    }
    qtdVidas.innerHTML = texto;

    //console.log(erros);
}

function escreverPalavra(palavra) {
    pEspacos.innerHTML = '';
    const regex = /\W|_/;
    for (let index = 0; index < palavra.length; index++) {
        if (!(regex.test(palavra[index]))) {
            pEspacos.innerHTML += '_';
        } else {
            pEspacos.innerHTML += palavra[index];
        }
    }
    // console.log(palavra);
}

function novaPalavra() {
    limparTabuleiro();

    fetch("https://api.dicionario-aberto.net/random")
        .then((data) => data.json())
        .then((data) => data.word)
        .then((data) => {
            palavraDaVez = data.toUpperCase();
            //document.getElementById('palavra').style.display = 'none';
            //console.log(palavraDaVez);
            escreverPalavra(palavraDaVez);
        });
}

function cadastroTentativa(entrada) {
    tentativas.push(entrada);
    pTentativas.innerHTML = tentativas.toString();
}

function toggleActiveState() {
    this.classList.toggle('active');
}

function chutar(e, alternativa) {
    if (erros >= 6) {
        verificarJogo();
        return;
    }

    cadastroTentativa(alternativa);

    let errou = true;
    let novoEspacos = '';
    for (let i = 0; i < palavraDaVez.length; i++) {
        if (pEspacos.innerHTML[i] == '_' && palavraDaVez[i] == alternativa) {
            novoEspacos += alternativa;
            errou = false;
        } else {
            novoEspacos += pEspacos.innerHTML[i];
        }
    }

    e.target.disabled = true;

    if (errou) {
        contarErro();
        e.target.className += ' errou';
    } else {
        pEspacos.innerHTML = novoEspacos;
        verificarJogo();
    }
}

var tentativas = [];
var erros = 0;
var vitorias = 0;
var palavraDaVez = "";

var pEspacos = document.getElementById('palavra');
var btnNovoJogo = document.getElementById("btnNewGame");
var qtdVidas = document.getElementById("qtd-vidas");
var pTentativas = document.getElementById("tentativas");
var btns = document.querySelectorAll('.tecla');

btnNovoJogo.onclick = novaPalavra;

[].forEach.call(btns, function(btn) {
    btn.addEventListener('click', toggleActiveState, false);
});

novaPalavra();