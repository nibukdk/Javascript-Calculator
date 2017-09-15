$(document).ready(function() {
  var result, strings;
  var inp1, inp2;
  var operator;
  var counter = 0;
  $('.btn').on('click', function() {
    /*counter=counter+1;
    console.log(counter);*/
    var digit = $(this).html();

    if (digit === "AC") {
      $('.work').empty();
      $('.work').html(0);
      $('.result').html(0);

    } else if (digit === "DEL") {
      //Incase of del key press
      if ($('.work').html().length <= 1) {
        $('.work').html(0);
      } else {
        var newString = $('.work').html().slice(0, $('.work').html().length - 1);
        $('.work').html(newString);
      }
    } else if (digit === "=") {
      strings = $('.work').html();
      var operatorPosition = strings.search('[+\*/-]');

      if (operatorPosition < 0) {
        $('.result').html(strings);
      } else {
        try {

          eval(strings);
          return resultCalculation();
        } catch (e) {

          var evaluated = "Error";
          $('.result').html(evaluated);
        }

      }
      //Function to calculate and display final result
      function resultCalculation() {
        operator = strings[operatorPosition];
        var str1 = strings.slice(0, operatorPosition);
        var str2 = strings.slice(operatorPosition + 1, strings.length);
        inp1 = parseFloat(str1);
        inp2 = parseFloat(str2)

        $('.result').html(calculator());

      }

    } else {
      $('.work').append(digit);
      strings = $('.work').html();

    }

    // define  initial mode of operation

    function calculator() {
      if (operator === "+") {
        return add();
      } else if (operator === "-") {
        return sub();
      } else if (operator === "/") {
        return div();
      } else if (operator === "*") {
      
        return multiply();

      } else {
        console.log(error);
      }
    }

    function add() {
      return inp1 + inp2;
    }

    function sub() {
      return inp1 - inp2;
    }

    function multiply() {

      return inp1 * inp2;
    }

    function div() {

      return inp1 / inp2;
    }
  });
});
