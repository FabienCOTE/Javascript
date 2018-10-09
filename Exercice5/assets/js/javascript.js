//Création d'un événement sur le bouton submit du formulaire.
//On lui applique la fonction validation
submit.addEventListener('click', validation);

//Fonction validation
function validation(event) {
  //Création des variables
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  var regexName = /^[0-9]+[,.][0-9]+$/;

  //Si une des deux variables a zéro caractère, on applique une alerte pour indiquer à l'utilisateur de recommencer
  if(firstNumber.length == 0 || secondNumber.length == 0) {
    alert("Veuillez recommencer, un ou plusieurs champs son vide");
  }
  //Sinon si la regex est valide pour les deux variables, on affiche la fenêtre avec ses informations
  else if (regexName.test(firstNumber) == true && regexName.test(secondNumber) == true) {
    //On remplace la virgule par un point pour effectuer l'opération
    secondNumber = secondNumber.replace(",",".");
    //On multiplie la partie entière du premier avec le deuxième nombre
    //parseInt transforme la chaine de caractère en un nombre entier
    //parseFloat transforme la chaine de caractère en un nombre
    alert(parseInt(firstNumber) * parseFloat(secondNumber));
  }
  else {
    //Sinon on lui demande de recommencer car les champs ne sont pas valides
    alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
  }
}
