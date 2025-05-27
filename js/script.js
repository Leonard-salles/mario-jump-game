
const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const clouds = document.querySelector(".clouds")

console.log(mario)

let time = 800

const jump = (event) => {
    if (event.keyCode === 32 || event.which === 32 || event.key === " ") {
        mario.classList.add("jump")
    }
}

const remove_jump = (event) => {
    // deixei como variavel para aumentar depois caso seja implementado o sistema de placar
    let mario_position = window.getComputedStyle(mario).bottom.replace("px", "")
    setTimeout(() => {
        if (mario_position = "0"){ 
            mario.classList.remove("jump")
        }
    }, time)
}

document.addEventListener("keydown", jump);
document.addEventListener("keyup", remove_jump)

const loop = setInterval(() => {
    const pipe_position = pipe.offsetLeft;
    const cloud_position = clouds.offsetLeft;
    let mario_position = +window.getComputedStyle(mario).bottom.replace("px", "")

    if (pipe_position <= 125 && pipe_position > 0 && mario_position < 100){
        pipe.style.animation = "none"
        clouds.style.animation = "none"
        pipe.style.left = `${pipe_position}px`
        clouds.style.left = `${cloud_position}px`

        mario.style.animation = "none"
        mario.style.bottom = `${mario_position}px`

        mario.src = "/assets/game-over.png"
        mario.style.width = "75px"
        mario.style.left = "40px"

        clearInterval(loop)
    }
}, 10)
