
// A little jQuery to handle the toggling of the curtains
$(document).ready(function() {
 
  
  $('.open').click(function () {
    if ($('body').hasClass('open-curtains')) {
      $('body').removeClass('open-curtains');
    } else {
      $('body').addClass('open-curtains');
    }
  });
 
});