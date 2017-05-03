$(document).ready(function() {
  var add = $('add').val(),
      sub = $('sub').val(),
      divide = $('divide').val(),
      multiply= $('multiply').val();

    function add(var input1, var input2){
      return input1+input2;
    }
    function sub(var input1, var input2){
      return input1+input2;
    }
    function multiply(var input1, var input2){
      return input1+input2;
    }
    function divide(var input1, var input2){
      return input1+input2;
    }

  $('.btn').on('click',function(){
    var digit=$(this).html();
    $('.work').append(digit);
  });
});
