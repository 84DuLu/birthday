const bgm = document.getElementById('bgm');
const startText = document.querySelector('.start-text');
const typedContent = document.querySelector('.gh-content');
const txt = '辉宝,你已经在这个世界上,生活了228个月了,新的一岁里,要好好照顾自己,天天开心捏,😊';

function bodyClick() {
  bgm.play();
  document.body.removeEventListener('click', bodyClick);
  startText.remove();
  typeText(txt);
}

function typeText(text) {
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
  }, 200);
}

document.body.addEventListener('click', bodyClick);