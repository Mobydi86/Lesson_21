$(document).ready(function() {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  // console.log(modal);
  // console.log(modalBtn);
  // console.log(closeBtn);
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible')
  });
});