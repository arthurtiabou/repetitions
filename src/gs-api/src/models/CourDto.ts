import { EnseignantDto } from "./EnseignantDto";

export class CourDto {
    id?: number;
    matiere?: string;
    periode?: string;
    niveau?: string;
    filiere?:string;
    enseignantDto?:EnseignantDto;
}