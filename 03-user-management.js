// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin qui prends en paramètre un tableau d'objet d'utilisateurs .
// Chaque objet utilisateur a les propriétés suivantes :
// - nom (string)
// - age (number)
// - estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(utilisateurs) {
	  // Étape 1 : Filtrer les utilisateurs qui ont la propriété estAdmin = true
  const admins = utilisateurs
    .filter(utilisateur => utilisateur.estAdmin) // garde seulement les admins
    .map(utilisateur => utilisateur.nom);        // extrait uniquement leur nom

  // Étape 2 : Retourner le tableau des noms des administrateurs
  return admins;
}
// Exemple d'utilisation de la fonction
const users = [
  { nom: "Abel", age: 11, estAdmin: true },
  { nom: "Bob", age: 30, estAdmin: false },
  { nom: "Charlie", age: 22, estAdmin: true },
  { nom: "David", age: 28, estAdmin: false }
];
// Appel de la fonction avec le tableau d'utilisateurs
const resultat = whoIsAdmin(users);

// Affichage du résultat dans la console
console.log("Les administrateurs sont :", resultat);

module.exports = {
	whoIsAdmin,
};


