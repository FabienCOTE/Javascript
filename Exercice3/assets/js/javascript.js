var valid = 0;

while(valid != 1) {
  var regexName = /^[a-zA-Z-]/;
  var insertName = prompt("Saisir votre prénom");
  if(insertName == null || insertName.length == 0) {
    alert("Erreur, veuillez recommencer")
  }
  else if (regexName.test(insertName)) {
    alert("Bonjour " + insertName);
    var valid = 1;
  }
  else {
    alert("Veuillez recommencer. " + insertName + " n'est pas un prénom valide");
  }
}
