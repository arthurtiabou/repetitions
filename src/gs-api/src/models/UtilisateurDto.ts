import { EntrepriseDto } from "./EntrepriseDto";

export class UtilisateurDto {
    id?: number;
    nom?: string;
    prenom?: string;
    email?: string;
    role?: string;
    photo?:string
    motPasse?: string;
    telephone?: string;
    entrepriseDto?:EntrepriseDto;
}