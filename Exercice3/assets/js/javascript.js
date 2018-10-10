//Création d'une variable
var valid = 0;

//Création d'une condition, tant que la variable 'valid' n'est pas égal à 1 on repéte l'opération
while(valid != 1) {
  //Création d'une variable Regex
  var regexName = /^[a-zA-ZÀ-ÿ]+([-'\s][a-zA-ZÀ-ÿ]+)?$/;
  //Création d'une variable qui correspond à la valeur saisie dans la zone de texte
  var insertName = prompt("Saisir votre prénom");
  //Si on clique sur 'annuler' ou 'ok' sans rien inscrire dans la zone de texte, on applique cette condition
  if(insertName == null || insertName.length == 0) {
    alert("Erreur, veuillez recommencer");
  }
  //Sinon si les caractères correspondent au Regex, une fenêtre dit bonjour à la personne et on change la valeur de la variable 'valid' pour cloturer la boucle
  else if (regexName.test(insertName)) {
    alert("Bonjour " + insertName);
    valid = 1;
  }
  //Sinon on applique cette condition
  else {
    alert("Veuillez recommencer. " + insertName + " n'est pas un prénom valide");
  }
}
