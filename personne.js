"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    Personne.prototype.getPrenom = function () {
        return this.prenom;
    };
    Personne.prototype.getAdresse = function () {
        return this.adresse;
    };
    Personne.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Personne.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    Personne.prototype.setAdresse = function (adresse) {
        this.adresse = adresse;
    };
    Personne.prototype.getFullInfos = function () {
        return this.nom + this.adresse.getFullAddress() + this.prenom;
    };
    return Personne;
}());
exports.Personne = Personne;
