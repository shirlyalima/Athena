const athena = document.querySelector('.athena');
const column = document.querySelector('.column');
const time = document.getElementById("time");
const botaoReiniciar = document.getElementById("reiniciar");


let tempoAtual = 100;
let checarClock;

const jump = () => {
    athena.classList.add('jump');

    setTimeout(() => {
        athena.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    
    const columnPosition = column.offsetLeft;
    const athenaPosition = +window.getComputedStyle(athena).bottom.replace('px', '');

    if (columnPosition <= 60 && columnPosition > 0 && athenaPosition < 100) {
        column.style.animation = 'none';
        column.style.left = `${columnPosition}px`; 

        athena.style.animation = 'none';
        athena.style.bottom = `${athenaPosition}px`; 

        athena.src = './imgs/game-over.gif';
        athena.style.width = '150px';
        athena.style.marginLeft = '200px';

        clearInterval(loop);
        clearInterval(checarClock);
    }
}, 10);


function clock() {
    tempoAtual--;
    time.textContent = tempoAtual;
    if (tempoAtual === 0) {
        alert("Time is over!")
        removerTeclas();
        clearInterval(checarClock);

    }

}

function removerTeclas() {
    document.removeEventListener("keydown", jump);
}


botaoReiniciar.addEventListener('click', function () {
  location.reload(); 
    
})



document.addEventListener('keydown', jump);
checarClock = setInterval(clock, 1000);