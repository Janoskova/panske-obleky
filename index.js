'use strict';

const changeColor = (event) => {
  for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].classList.remove('product__chosen');
  }
  event.target.classList.add('product__chosen');

  const product = document.querySelector('.product__image');
  const color = window
    .getComputedStyle(event.target, null)
    .getPropertyValue('background-color');
  product.style.fill = color;
  if (color === 'rgb(0, 0, 0)') {
    product.style.stroke = 'white';
  } else {
    product.style.stroke = 'black';
  }
};

const colorButtons = document.querySelectorAll('.color__box');
for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener('click', changeColor);
}
