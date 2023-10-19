export class Adresse {

    private rue: string;
    private ville: string;
    private codePostal: string;

    constructor(rue: string, codePostal: string, ville: string) {
        this.rue = rue;
        this.codePostal = codePostal;
        this.ville = ville
    }

    public getRue(): string{
        return this.rue
    }

    public getCodePostal(): string{
        return this.codePostal
    }

    public getVille(): string{
        return this.ville
    }

    public setRue(rue: string): any{
        this.rue = rue;
    }

    public setCodePostal(codePostal: string): any{
        this.codePostal = codePostal;
    }

    public setVille(ville: string): any{
        this.ville = ville;
    }

    public getFullAddress(): string{
        return this.rue + this.ville + this.codePostal
    }
  }
  