// 1. Crée un tableau nommé `baseDeDonnees` qui contiendra des objets représentant des utilisateurs.
//    Chaque utilisateur doit avoir les propriétés suivantes :
//    - id: number (identifiant unique)
//    - nom: string
//    - email: string
//    - password: string
//    - estConnecte: boolean (indique si l'utilisateur est connecté)
//    - estBloque: boolean (indique si l'utilisateur est bloqué)

// 2. Écris une fonction `signUp(nom, email, password, confirmPassword)` qui :
//    - Vérifie si l'email existe déjà dans `baseDeDonnees`. Si oui, retourne un message d'erreur.
//    - Vérifie si `password` et `confirmPassword` sont identiques. Si non, retourne un message d'erreur.
//    - Sinon, ajoute le nouvel utilisateur à `baseDeDonnees` (avec un id unique, estConnecte à false, estBloque à false) et retourne l'objet utilisateur créé.

// 3. Écris une fonction `login(email, password)` qui :
//    - Recherche l'utilisateur correspondant à l'email dans `baseDeDonnees`.
//    - Si l'utilisateur n'existe pas ou si le mot de passe est incorrect, retourne un message d'erreur.
//    - Si l'utilisateur est bloqué (`estBloque` à true), retourne un message d'erreur spécifique.
//    - Sinon, met à jour `estConnecte` à true pour cet utilisateur et retourne l'objet utilisateur connecté.


// 1. Base de données initiale avec des utilisateurs existants
const baseDeDonnees = [
    { id: 1, nom: "Alice Dupont", email: "alice@example.com", password: "pwdAlice1", estConnecte: false, estBloque: false },
    { id: 2, nom: "Bob Martin",    email: "bob@example.com",   password: "pwdBob2",   estConnecte: false, estBloque: false },
    { id: 3, nom: "Carla Robert",  email: "carla@example.com", password: "pwdCarla3", estConnecte: false, estBloque: true  } // exemple bloqué
];
// utilitaire pour obtenir un id unique (max existant + 1)
function genererIdUnique() {
  if (baseDeDonnees.length === 0) return 1;
  return Math.max(...baseDeDonnees.map(u => u.id)) + 1;
}
// 2. Fonction signUp unifiée avec conditions
function signUp(nom, email, password, confirmPassword) {
  const utilisateurExistant = baseDeDonnees.find(user => user.email === email);

  if (utilisateurExistant) {
    return { success: false, message: "Erreur : cet email est déjà utilisé." };
  } 
  else if (password !== confirmPassword) {
    return { success: false, message: "Erreur : les mots de passe ne correspondent pas." };
  } 
  else {
    const nouvelUtilisateur = {
      id: genererIdUnique(),
      nom,
      email,
      password,
      estConnecte: false,
      estBloque: false
    };

    baseDeDonnees.push(nouvelUtilisateur);
    return { success: true, utilisateur: nouvelUtilisateur };
  }
}
// 3. Fonction login
function login(email, password) {
  const utilisateur = baseDeDonnees.find(user => user.email === email);

  if (!utilisateur) {
    return { success: false, message: "Erreur : utilisateur non trouvé." };
  } 
  else if (utilisateur.password !== password) {
    return { success: false, message: "Erreur : mot de passe incorrect." };
  } 
  else if (utilisateur.estBloque) {
    return { success: false, message: "Erreur : cet utilisateur est bloqué." };
  } 
  else {
    utilisateur.estConnecte = true;
    return { success: true, utilisateur };
  }
}
// --- Exemples d'utilisation ---
//console.log("Base initiale :", baseDeDonnees);
//console.log(signUp("David", "david@example.com", "pwdDavid4", "pwdDavid4")); // succès
//console.log(signUp("Eve", "alice@example.com", "pwd", "pwd")); // email déjà utilisé
//console.log(login("carla@example.com", "pwdCarla3")); // utilisateur bloqué
console.log(login("bob@example.com", "pwdBob2")); // succès
//console.log("Base finale :", baseDeDonnees);

module.exports = { baseDeDonnees, signUp, login };
