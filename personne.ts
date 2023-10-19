import { Adresse } from "./adresse";

export class Personne {

    private nom: string;
    private prenom: string;
    private adresse: Adresse;

    constructor(nom: string, prenom: string, adresse: Adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse
    }

    public getNom(): string{
        return this.nom
    }

    public getPrenom(): string{
        return this.prenom
    }

    public getAdresse(): Adresse{
        return this.adresse
    }

    public setNom(nom: string): any{
        this.nom = nom;
    }

    public setPrenom(prenom: string): any{
        this.prenom = prenom;
    }

    public setAdresse(adresse: Adresse): any{
        this.adresse = adresse;
    }

    public getFullInfos(): string{
        return this.nom + this.adresse.getFullAddress() + this.prenom
    }
  }
  