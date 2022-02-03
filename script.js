const $card_item = document.querySelectorAll('.card-item');
const $modal = document.querySelectorAll('.modal');
const $body = document.querySelector('body');


for (let i = 0; i < $card_item.length; i++) {
  $card_item[i].addEventListener('click', () => {
    $modal[i].classList.toggle('modal');
    $modal[i].classList.toggle('popup');
    $body.classList.toggle('body_scroll');
  });
};