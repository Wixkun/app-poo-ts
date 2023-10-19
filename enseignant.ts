import { Personne } from "./personne";
import { Adresse } from "./adresse";

export class Enseignant extends Personne {
  private specialité: string;
  private statut: string;

  constructor(nom: string, prenom: string, adresse: Adresse, specialité: string, statut: string) {
    super(nom, prenom, adresse);
    this.specialité = specialité;
    this.statut = statut;
  }

  getSpecialite(): string {
    return this.specialité;
  }

  getStatut(): string {
    return this.statut;
  }

  public setSpec(specialité: string): any{
    this.specialité = this.specialité;
  }

  public setStatut(statut: string): any{
    this.statut = statut;
  }

public getFullInfos(): string{
  return super.getFullInfos() + this.specialité + this.statut
}
}