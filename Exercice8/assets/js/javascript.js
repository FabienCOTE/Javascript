submit.addEventListener('click', validation);

function validation(event) {
  var age = document.getElementById('age').value;
  var regexName = /^[0-9]+$/;

  if(age < 1 || age > 150) {
    alert("Veuillez recommencer, votre âge n'est pas valide (1-150)");
  }
  else if (regexName.test(age) == true) {
    if (age >= 18) {
      alert("Vous êtes majeur");
    }
    else {
      alert("Vous êtes mineur");
    }
  }
  else {
    alert("Veuillez recommencer, votre âge n'est pas valide");
  }
}
