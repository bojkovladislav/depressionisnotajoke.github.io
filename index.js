const btn1 = document.getElementById('btn-hapiness');
const btn2 = document.getElementById('btn-sadness');
const image = document.querySelector('.img');

function checkHappyBtn() {
  image.style.display = 'inline';
  btn1.disabled = true;
  btn2.disabled = false;
  return checkHappyBtn;
}

function checkSadBtn() {
  image.style.display = 'none';
  btn1.disabled = false;
  btn2.disabled = true;
  return checkSadBtn;
}

btn1.addEventListener('click', checkHappyBtn());
btn2.addEventListener('click', checkSadBtn());
