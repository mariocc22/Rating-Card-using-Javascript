'use strict';
// Initial values
let btnClicked = 0;
let crrntBtn = '0';
let isRated = false;

let btnParent = document.getElementById('btn--group');
let btnSubmit = document.getElementById('btn--submit');
let btnEdit = document.getElementById('btn--edit');

const content1 = document.querySelector('.content--1');
const content2 = document.querySelector('.content--2');
const mssgRtng = document.getElementById('stars--slctd');

// Rating buttons functionality
btnParent.addEventListener('click', rating, false);
function rating(e) {
  if (e.target !== e.currentTarget) {
    if (e.target === crrntBtn) {
      e.target.classList.toggle('active-rating');
      isRated = false;
    } else {
      btnClicked = document.getElementById(`${e.target.id}`);
      btnClicked.classList.toggle('active-rating');
      crrntBtn = e.target;
      isRated = true;
    }
  }
  e.stopPropagation();
}

// Submit button functionality
btnSubmit.addEventListener('click', function () {
  if (isRated) {
    content1.classList.toggle('hidden');
    content2.classList.toggle('hidden');
    mssgRtng.textContent = `You have selected ${btnClicked.textContent} out of 5`;
  } else {
    alert('You have not rated yet');
  }
});

// Edit button functionality
btnEdit.addEventListener('click', function () {
  btnClicked = 0;
  crrntBtn = '0';
  isRated = false;
  content2.classList.add('hidden');
  content1.classList.remove('hidden');
  for (let i = 0; i < 5; i++) {
    if (
      document
        .getElementById(`btn--${i + 1}`)
        .classList.contains('active-rating')
    ) {
      document
        .getElementById(`btn--${i + 1}`)
        .classList.remove('active-rating');
      break;
    }
  }
});
