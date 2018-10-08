submit.addEventListener('click', validation);

function validation(event) {
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regexName = /^[0-9]+$/;

  if(shoeSize.length != 2 || yearOfBirth.length != 4) {
    alert("Veuillez recommencer, un ou plusieurs champs son vide ou incorrect");
  }
  else if (regexName.test(shoeSize) == true && regexName.test(yearOfBirth) == true) {
    var result = shoeSize * 2;
    var result = result + 5;
    var result = result * 50;
    var result = result - yearOfBirth;
    var result = result + 1766;
    alert(result);
  }
  else {
    alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
  }
}
