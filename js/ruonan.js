const bgm = document.getElementById('bgm');
const startText = document.querySelector('.start-text');
const txt = '若楠20岁,生日快乐捏,新的一岁里,好好学习,拒绝摆烂,最重要的是,天天开心噻!';

function bodyClick() {
  bgm.play();
  document.body.removeEventListener('click', bodyClick);
  startText.remove();
  document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../img/ruonan.jpg)';
  const board = document.createElement('div');
  board.classList.add('board');
  document.body.appendChild(board);
  const typedContent = document.querySelector('.board');
  typeText(txt, typedContent);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function typeText(text, typedContent) {
  const splittedText = text.split(',');
  splittedText.forEach(() => {
    const p = document.createElement('p');
    typedContent.appendChild(p);
  });

  const allParas = typedContent.querySelectorAll('p');
  let i = 0;
  let currentPara = 0;
  const intervalId = setInterval(() => {
    // typingSound.play();
    allParas[currentPara].textContent += splittedText[currentPara].charAt(i);
    i++;
    if (i === splittedText[currentPara].length) {
      currentPara++;
      i = 0;
    }
    if (currentPara === splittedText.length) {
      clearInterval(intervalId);
    }
  }, 250);
}

document.body.addEventListener('click', bodyClick);

