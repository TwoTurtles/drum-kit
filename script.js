function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
  if (!audio) return; // stop function running if key is pressed that is not included
  audio.currentTime = 0; // rewind to beginning
  audio.play();
  key.classList.add('playing'); // add transition
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));