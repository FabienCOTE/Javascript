//Création d'un événement sur le bouton submit du formulaire.
//On lui applique la fonction validation
submit.addEventListener('click', validation);

//Fonction validation
function validation(event) {
  //Création de plusieurs variables qui correspondent au valeur du formaulaire
  var lastName = document.getElementById('lastname').value;
  var firstName = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var submit = document.getElementById('submit');
  var regexValid = /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ]+([-'\s][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸ]+)?$/;

  //Si une des trois variables a zéro caractère, on applique une alerte pour indiquer à l'utilisateur de recommencer
  if(lastName.length == 0 || firstName.length == 0 || city.length == 0) {
    alert("Veuillez recommencer, un ou plusieurs champs sont vides");
  }
  //Sinon si la regex est valide pour les trois variables, on affiche la fenêtre avec ses informations
  else if (regexValid.test(lastName) == true && regexValid.test(firstName) == true && regexValid.test(city) == true) {
    alert("Nom : " + lastName + "\nPrénom : " + firstName + "\nVille : " + city);
  }
  //Sinon on lui demande de recommencer car les champs ne sont pas valides
  else {
      alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valides");
  }
}
