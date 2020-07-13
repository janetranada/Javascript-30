function playSound (eventKey) {
    const audio = document.querySelector(`audio[data-key="${eventKey}"]`);
    const key = document.querySelector(`.key[data-key="${eventKey}"]`);

    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function playSoundFromKeypress(e) {
    playSound(e.keyCode);
}

function playSoundFromClick(e) {
    const key = this.dataset['key'];
    playSound(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
keys.forEach(key => key.addEventListener('click', playSoundFromClick));

window.addEventListener('keydown', playSoundFromKeypress);