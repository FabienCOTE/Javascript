//Création d'un événement sur le bouton submit du formulaire.
//On lui applique la fonction validation
submit.addEventListener('click', validation);

//Fonction validation
function validation(event) {
  //Création des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var regexName = /^[0-9]+$/;

  //Si la variable shoeSize n'a pas deux caractères ou si la variable yearOfBirth n'a pas quatre caractères, on demande à l'utilisateur de recommencer
  if(shoeSize.length != 2 || yearOfBirth.length != 4) {
    alert("Veuillez recommencer, un ou plusieurs champs son vide ou incorrect");
  }
  //Sinon si la regex est valide pour les deux variables, on effectue les différentes opérations pour afficher le résultat
  else if (regexName.test(shoeSize) == true && regexName.test(yearOfBirth) == true) {
    var result = shoeSize * 2;
    var result = result + 5;
    var result = result * 50;
    var result = result - yearOfBirth;
    var result = result + 1766;
    alert(result);
  }
  //Sinon on lui demande de recommencer car les champs ne sont pas valides
  else {
    alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
  }
}
