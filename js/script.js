const typedContent = document.getElementById('typed-content');
const submitButton = document.getElementById('submit-btn');
const userName = document.getElementById('name');
const buttonClickSound = document.getElementById('button-click');
const txt = '请输入你的名字，我的朋友';

function typeText(text) {
  let i = 0;
  const intervalId = setInterval(() => {
    typedContent.textContent += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(intervalId);
    }
  }, 75);
}

submitButton.addEventListener('click', () => {
  buttonClickSound.play();
  if (userName.value === '牛靖尧') {
    window.setTimeout(() => {
      location.href = "./friends/niu.html";
    }, 750);
  } else if (userName.value === '郭辉') {
    window.setTimeout(() => {
      location.href = "./friends/gh.html";
    }, 750);
  } else if (userName.value === '张若楠') {
    window.setTimeout(() => {
      location.href = "./friends/ruonan.html";
    }, 750);
  }
});

typeText(txt);
