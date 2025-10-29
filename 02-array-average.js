// Crée un tableau `notes` contenant 5 nombres
// Écrire une fonction averageNote avec `notes` comme parametre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

let notes = [5, 8, 6, 7, 9];

function averageNote(notes) {
    // Étape 1 : calculer la somme de toutes les notes
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    // Étape 2 : calculer la moyenne
    const moyenne = somme / notes.length;
    // Étape 3 : vérifier la moyenne et retourner le résultat
    if (moyenne >= 10) {
        return "Réussi";
    } else {
        return "Échoué";
    }
}
// Appel de la fonction avec le tableau `notes`
const resultat = averageNote(notes);
// Affichage du résultat
console.log("Résultat :", resultat);

module.exports = {
	averageNote,
};



