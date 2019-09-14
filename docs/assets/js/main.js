WebFont.load({
  google: {
    families: ['Montserrat:400,500,700,900']
  }
});

$(function() {
  $('.scroll-down-target').click (function() {
    $('html, body').animate({scrollTop: $('section.next-section').offset().top }, 'slow');
    return false;
  });
});