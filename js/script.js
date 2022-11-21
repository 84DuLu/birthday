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
  let name = userName.value;
  switch (name) {
    case '牛靖尧': location.href = "./friends/niu.html";
                  break;
    case '郭辉': location.href = "./friends/gh.html";
                  break;
    case '张若楠': location.href = "./friends/ruonan.html";
                  break;
    case '乔雪飞': location.href = "./friends/qiao.html";
                  break;
  }
});

typeText(txt);
