const main = document.querySelector('main')
const btn = document.querySelector('button')
const overlay = document.querySelector('#overlay')
const timer = document.querySelector('#timer')
const scoree = document.querySelector('#score')
const box = document.createElement('div')
box.classList.add ("box")

let time = 0;
let score = 0;
let interval;
let timeout;

const randomColor = () => {
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);

    return `rgb(${r} , ${g} ,${b})`
}

function randomBox(){
    box.style.backgroundColor = randomColor() 
    main.append(box);
   
    let mainH = main.clientHeight - box.offsetHeight;
    let mainW = main.clientWidth - box.offsetWidth;
    
    const rY = Math.random() * mainH;
    const rX = Math.random() * mainW;

    box.style.top = `${rY}px`;
    box.style.left = `${rX}px`;
    
}
btn.addEventListener('click',()=>{
    clearInterval(interval);
    clearTimeout(timeout)
    interval = setInterval (() => {
    randomBox()
     time += 1
    timer.textContent = time
    },1000)

    timeout = setTimeout(()=>{
        clearInterval(interval)
        overlay.style.display ="flex"
    },20000)
})

box.addEventListener('click',()=>{
    score += 1;
    scoree.textContent = score;
})