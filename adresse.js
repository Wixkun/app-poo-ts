"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
var Adresse = /** @class */ (function () {
    function Adresse(rue, codePostal, ville) {
        this.rue = rue;
        this.codePostal = codePostal;
        this.ville = ville;
    }
    Adresse.prototype.getRue = function () {
        return this.rue;
    };
    Adresse.prototype.getCodePostal = function () {
        return this.codePostal;
    };
    Adresse.prototype.getVille = function () {
        return this.ville;
    };
    Adresse.prototype.setRue = function (rue) {
        this.rue = rue;
    };
    Adresse.prototype.setCodePostal = function (codePostal) {
        this.codePostal = codePostal;
    };
    Adresse.prototype.setVille = function (ville) {
        this.ville = ville;
    };
    Adresse.prototype.getFullAddress = function () {
        return this.rue + this.ville + this.codePostal;
    };
    return Adresse;
}());
exports.Adresse = Adresse;
