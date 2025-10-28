/*
Écrire une fonction "createUser" qui permet de créer un utilisateur.

La fonction doit accepter trois paramètres :
    - nom (string) : le nom de l'utilisateur
    - age (number) : l'âge de l'utilisateur
    - estConnecte (boolean) : indique si l'utilisateur est connecté

La fonction doit retourner un objet contenant ces trois propriétés :
    - nom (string)
    - age (number)
    - estConnecte (boolean)
*/

function createUser(nom, age, estConnecte) {
   // On retourne un objet avec les trois propriétés
    return {
        nom: nom,           // Le nom de l'utilisateur
        age: age,           // L'âge de l'utilisateur
        estConnecte: estConnecte // L'état de connexion
    };
}

// --- Exemple d'utilisation --- //

// Création d'un utilisateur
let utilisateur = createUser("Alice", 25, true);

// Affichage dans la console
console.log(utilisateur);

module.exports = {
    createUser,
};

