const title = document.getElementById('title');
const messi = document.querySelectorAll('.messi');
const cluo = document.querySelector('.cluo');
const grid = document.getElementById('grid');
const siuSound = document.getElementById('siuSound');
const birthdaySong = document.getElementById('birthdaySong');

messi.forEach((messi) => messi.addEventListener('click', () => {
  alert('这也能选错？？？接受惩罚吧！！！');
  window.open('https://www.bilibili.com/video/BV1YP4y1o7Em', '_blank');
}));

cluo.addEventListener('click', () => {
  siuSound.play();
  grid.innerHTML = '';
  grid.classList.remove('grid');
  grid.classList.add('grid-plus');
  title.textContent = '生日快乐捏，乔纳森！';
  window.setTimeout(() => {
    birthdaySong.play();
  }, '2000');
});

window.onload = () => {
  if (document.documentElement.clientWidth < 450) {
    document.body.innerHTML = '';
    document.body.style.cssText = 'display: flex; justify-content: center; align-items: center';
    const text = document.createElement('h2');
    text.textContent = '没有做手机端！！用电脑看！！';
    document.body.appendChild(text);
  }
}


