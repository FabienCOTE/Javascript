submit.addEventListener('click', validation);

function validation(event) {
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regexName = /^[0-9]+[,.][0-9]+$/;

  if(firstNumber.length == 0 || secondNumber.length == 0) {
    alert("Veuillez recommencer, un ou plusieurs champs son vide");
  }
  else if (regexName.test(firstNumber) == true && regexName.test(secondNumber) == true) {
    alert(parseInt(firstNumber) * parseInt(secondNumber));
  }
  else {
    alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
  }
}
