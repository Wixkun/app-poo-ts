import { Personne } from "./personne";
import { Adresse } from "./adresse";
import { Enseignant } from "./enseignant";

const adresse = new Adresse('123 Rue de Meaux', '75000', 'Paris');
const personne = new Personne('PRZYBYSZEWSKI', 'Chrome', adresse);
const enseignant = new Enseignant('MONTOYA', 'Alexis', adresse, 'Mathrématiques', 'Actif');

console.log("Nom: " + personne.getNom());
console.log("Prénom: " + personne.getPrenom());
console.log("Adresse: " + personne.getAdresse());
console.log('Informations Complètes:', personne.getFullInfos());

console.log('Rue:', adresse.getRue());
console.log('Code Postal:', adresse.getCodePostal());
console.log('Ville:', adresse.getVille());
console.log('Adresse Complète:', adresse.getFullAddress());

console.log('Test Enseignant:');
console.log('Nom de l enseignant:', enseignant.getNom());
console.log('Prénom de l enseignant:', enseignant.getPrenom());
console.log('Adresse de l enseignant:', enseignant.getAdresse());
console.log('Matière enseignée:', enseignant.getSpecialite());
console.log('Matière enseignée:', enseignant.getStatut());
console.log('Informations Complètes de l enseignant:', enseignant.getFullInfos());
