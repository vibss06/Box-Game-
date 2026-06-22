const main = document.querySelector('main');
const btn = document.querySelector('button');
const overlay = document.querySelector('#overlay');
const timer = document.querySelector('#timer');
const scoree = document.querySelector('#score');
const againBtn = document.querySelector('.again');
const closeBtn = document.querySelector('.close');

const box = document.createElement('div');
box.classList.add('box');

let time = 0;
let score = 0;
let interval;
let timeout;

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

function randomBox() {
    if (!main.contains(box)) {
        main.append(box);
    }

    box.style.backgroundColor = randomColor();

    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;

    const rY = Math.random() * mainH;
    const rX = Math.random() * mainW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
}

function startGame() {
    clearInterval(interval);
    clearTimeout(timeout);

    time = 0;
    score = 0;

    timer.textContent = time;
    scoree.textContent = score;

    overlay.style.display = 'none';

    randomBox(); // first box immediately show

    interval = setInterval(() => {
        randomBox();
        time++;
        timer.textContent = time;
    }, 1000);

    timeout = setTimeout(() => {
        clearInterval(interval);
        box.remove();
        overlay.style.display = 'flex';
    }, 20000);
}

box.addEventListener('click', () => {
    score++;
    scoree.textContent = score;
});

btn.addEventListener('click', startGame);

againBtn.addEventListener('click', startGame);

closeBtn.addEventListener('click', () => {
    location.reload();
});