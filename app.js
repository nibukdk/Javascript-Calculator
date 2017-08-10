$(document).ready(function() {

  var result, strings;
  var inp1, inp2;
  var operator;
  $('.btn').on('click', function() {

    var digit = $(this).html();

    if (digit === "AC") {
      $('.work').empty();
      $('.work').html(0);
      $('.result').html(0);
    } else if (digit === "DEL") {

      if ($('.work').html().length === 1 || $('.work').html().length < 1) {
        $('.work').html(0);
      } else {
        var newString = $('.work').html().slice(1, $('.work').html().length - 1);
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
          console.log('Error');
          var evaluated = "Error";
          $('.result').html(evaluated);
        }

      }

      function resultCalculation() {
        operator = strings[operatorPosition];
        var str1 = strings.slice(0, operatorPosition);
        var str2 = strings.slice(operatorPosition + 1, strings.length);
        inp1 = parseInt(str1);
        inp2 = parseInt(str2)
        $('.result').html(calculator());
      }

    } else {
      $('.work').append(digit);
      strings = $('.work').html();

    }

    /**
      }**/

    function calculator() {
      if (operator === "+") {
        //result=add();
        return add();
      } else if (operator === "-") {
        //result=add();
        return sub();
      } else if (operator === "/") {
        //result=add();
        return div();
      } else if (operator === "*") {
        //result=add();
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
