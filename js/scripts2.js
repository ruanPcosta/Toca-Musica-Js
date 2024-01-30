const botaoPlayPause = document.getElementById('play-pause');

const audioMusica = document.getElementById('audio-numero');

const botaoAvancar  = document.getElementById('proximo');

const botaoAnterior = document.getElementById('anterior');

const nomeMusica = document.getElementById('musica');

const numeroMusicas = 16;


let taTocando = 0;


let musicaAtual = 1;

function tocarFaixa(){
    audioMusica.play();
    botaoPlayPause.classList.remove('bi-play-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');


}

function pausarFaixa(){

    audioMusica.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-fill');
}



        
function playOuPause(){
 if(taTocando === 0){
    tocarFaixa();
    taTocando = 1;
    }else{
    pausarFaixa();
    taTocando = 0;
    }


    }
    
function trocarFaixa(){
        nomeMusica.innerText = 'Musica ' + musicaAtual;
    }


function proximaFaixa(){

    if(musicaAtual  === numeroMusicas){
        musicaAtual = 1;
    }else{

    musicaAtual = musicaAtual + 1;
    }

    audioMusica.src = '/musicas/'+ musicaAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarFaixa();
}

function faixaAnterior(){

    if(musicaAtual === numeroMusicas){
        musicaAtual = 1;
    }else{

        musicaAtual = musicaAtual - 1;
    }

    audioMusica.src = 'musicas/'+musicaAtual+ '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarFaixa();
}




    botaoPlayPause.addEventListener('click', playOuPause);
    botaoAvancar.addEventListener('click', proximaFaixa);
    botaoAnterior.addEventListener('click', faixaAnterior);