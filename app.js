$(document).ready(function() {
  var strings;
  $('.btn').on('click', function() {
    var digit = $(this).html();


    if (digit === "AC") {
      $('.work').empty();
      $('.work').html(0);
      $('.result').empty();
    } else if (digit === "DEL") {
      if ($('.work').html().length === 1) {
        $('.work').html(0);
      } else {
        var newString = $('.work').html().slice(0, $('.work').html().length - 1);
        $('.work').html(newString);
      }
    } else if (digit === "=") {

      var evaluated = eval(strings);
      $('.result').html(evaluated);
    } else {
      $('.work').append(digit);
      strings = $('.work').html();
    }

  });


});
