// Tu disposes d'un tableau nommé `eleves` dont chaque élément est un objet ayant la structure suivante :
// {
//   nom: string,      // Le nom de l'élève
//   notes: number[]   // Un tableau de notes (nombres) obtenues par l'élève
// }
//
// Écris une fonction `showStudentBulletin(eleves)` qui, pour chaque élève du tableau, retourne un bulletin scolaire contenant :
// - Son nom
// - Sa moyenne (calculée à partir de ses notes, arrondie à deux décimales)
// - Un commentaire basé sur la moyenne obtenue :
//     - Moyenne >= 16 : "Excellent"
//     - Moyenne >= 14 : "Très Bien"
//     - Moyenne >= 12 : "Bien"
//     - Moyenne >= 10 : "Passable"
//     - Moyenne < 10  : "À revoir"
// Dans le cas où l'élève n'a pas de notes, la moyenne doit être considérée comme 0 et le commentaire "À revoir".
const eleves = [
	{ nom: "Héritier", notes: [14, 11, 15, 6, 13] },
	{ nom: "Ruth", notes: [9, 10, 12, 10, 14] },
	{ nom: "Joseph", notes: [15, 17, 14, 18, 20] },
	{ nom: "Diane", notes: [] }
];

function showStudentBulletin(eleves) {
	return eleves.map(eleves => {
		// Calcul de la moyenne
		const notes = eleves.notes || [];
		const moyenne = notes.length > 0
		? (notes.reduce((sum, n) => sum + n, 0) / notes.length) : 0;

		// Arrondir à deux décimales
		const moyenneArrondie = Number(moyenne.toFixed(2));

		// Déterminer le commentaire
		let commentaire;
		if (moyenneArrondie >= 16) commentaire = "Excellent";
		else if (moyenneArrondie >= 14) commentaire = "Très Bien";
		else if (moyenneArrondie >= 12) commentaire = "Bien";
		else if (moyenneArrondie >= 10) commentaire = "Passable";
		else commentaire = "A revoir";

		//Retourner le bulletin de l'élève
		return {
			nom: eleves.nom,
			moyenne: moyenneArrondie,
			commentaire: commentaire
		};
	});
}

const bulletin = showStudentBulletin(eleves);

console.log("=== Bulletin scolaires ===");
bulletin.forEach(bulletin => {
	console.log(`
		Nom : ${bulletin.nom}
		Moyenne : ${bulletin.moyenne}
		Appréciation : ${bulletin.commentaire}
		--------------------------------`);
});

module.exports = {
	showStudentBulletin,
};