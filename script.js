function keyAction(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = document.querySelector(`div[data-key='${e.keyCode}']`)
    if (!audio) return; audio.currentTime = 0; audio.play();
    key.classList.add('playing')
    key.addEventListener('transitionend',()=>key.classList.remove('playing'))    
}
window.addEventListener('keydown', keyAction)
