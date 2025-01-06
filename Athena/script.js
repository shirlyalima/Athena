const athena = document.querySelector('.athena');
const column = document.querySelector('.column');
const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");

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
    }
}, 10);

document.addEventListener('keydown', jump);


// //Initial Time
// let seconds = 0,
//   minutes = 0;
// //Initial moves and win count
// let movesCount = 0,
//   winCount = 0;
// //For timer
// const timeGenerator = () => {
//   seconds += 1;
//   //minutes logic
//   if (seconds >= 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   //format time before displaying
//   let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
//   let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
//   timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;
// };

// //For calculating moves
// const movesCounter = () => {
//   movesCount += 1;
//   moves.innerHTML = `<span>Movimentos:</span>${movesCount}`;
// };