$(document).ready(function() {
  var result, strings;
  var inp1, inp2;
  var operator;
  var counter = 0;
  var digit;
  $('.work').empty();
  $('.work').html(0);
  $('.result').html(0);

  $('.btn').on('click', function() {

    digit = $(this).html();

  });
  //Button for Ac
  $('.turnOn').on('click', function() {
    $('.work').empty();
    $('.work').html(0);
    $('.result').html(0);
  });
  //Adding button cliked on screen if numbers or operators
  $('.num , .operators, .period').on('click', function() {
    $('.work').append(digit);
    strings = $('.work').html();

  });
  //Making del button work
  $('.del').on('click', function() {
    if ($('.work').html().length <= 1) {
      $('.work').html(0);
    } else {
      var newString = $('.work').html().slice(0, $('.work').html().length - 1);
      $('.work').html(newString);
    }
  });

  $('.equals').on('click', function(e) {
    e.stopPropagation();
    resultCalculation();
  });


  function resultCalculation() {
    strings = $('.work').html().slice(1, $('.work').html().length);
    try {
      counter = counter + 1;
      console.log(counter);
      var evaluation = eval(strings);
      var correctString = $('.work').html();
      $('.result').html(evaluation);


    } catch (e) {
      $('.result').html('Error');

    }
  }

});
