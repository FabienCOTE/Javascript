submit.addEventListener('click', validation);

function validation(event) {
  var lastName = document.getElementById('lastname').value;
  var firstName = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var submit = document.getElementById('submit');
  var regexName = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ][a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ]+([-'\s][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ][a-záàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ]+)?$/;

  if(lastName.length == 0 || firstName.length == 0 || city.length == 0) {
    alert('Veuillez recommencer, un ou plusieurs champs son vide');
  }
  else if (regexName.test(lastName) == true && regexName.test(firstName) == true && regexName.test(city) == true) {
    alert("Nom : " + lastName + "\nPrénom : " + firstName + "\nVille : " + city);
  }
  else {
      alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
  }
}
