var video = document.querySelector('#Video-Cielo')
var boton = document.querySelector('#Reproducir')

function reproducir(){
    if(video.paused) {
        video.play()
        boton.innerHTML="<i class='bx bx-pause' ></i>"
    } else {
        video.pause()
        boton.innerHTML="<i class='bx bx-play' ></i>"
    }
}

function detener() {
    video.pause()
    video.currentTime=0
    boton.innerHTML="<i class='bx bx-play' ></i>"
}

function saltar(valor) {
    video.currentTime += valor
}