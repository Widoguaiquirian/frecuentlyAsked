'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    button.parentNode.classList.toggle('active');
    console.log(button.parentNode);
  });
});
