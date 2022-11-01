const typedContent = document.getElementById('niu-content');
const typingSound = document.querySelector('#typing-sound');
const txt = '牛靖尧先生,祝你 20 岁生日快乐,这是为你准备的礼物😊';

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
  }, 75);
}

typeText(txt);