
function playSoundFromKeypress(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    playSound(audio, key);
}

function playSoundFromClick(e) {    
    const attributeKey = e.currentTarget.getAttribute('data-key');
    const audio = document.querySelector(`audio[data-key="${attributeKey}"]`);
    const key = document.querySelector(`.key[data-key="${attributeKey}"]`);
    playSound(audio, key);
}

function playSound (audio, key) {
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSoundFromClick))

window.addEventListener('keydown', playSoundFromKeypress);