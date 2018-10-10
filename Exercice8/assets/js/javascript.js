//Création d'un événement sur le bouton submit du formulaire.
//On lui applique la fonction validation
submit.addEventListener('click', validation);

//Fonction validation
function validation(event) {
  //Création des variables
  var age = document.getElementById('age').value;
  var regexName = /^[\d]+$/;

  //Si la variable age est en dessous de 1 et au dessus de 150, on indique à l'utilisateur de recommencer
  if(age < 1 || age > 150) {
    alert("Veuillez recommencer, votre âge n'est pas valide (1-150)");
  }
  //Sinon si la regex est valide on indique à l'utilisateur si il est mineur ou majeur
  else if (regexName.test(age)) {
    //Si age est supérieur ou égal à 18, on indique à l'utilisateur qu'il est majeur
    if (age >= 18) {
      alert("Vous êtes majeur");
    }
    //sinon il est mineur
    else {
      alert("Vous êtes mineur");
    }
  }
  //Sinon on lui demande de recommencer car les champs ne sont pas valides
  else {
    alert("Veuillez recommencer, votre âge n'est pas valide");
  }
}
