$(document).ready(function() {
    $('#icon_show').click(function() {
       $('#show').slideToggle();
    });
    $('.section__category-accordion-toggle').on('click', function() {
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
          $(this).parent().next().slideDown();
        } else {
          $(this).parent().next().slideUp();
        }
      })
});