export interface User {
  utilisateurId?: number; // Rend cette propriété optionnelle
  nom: string;
  prenom: string;
  motDePasse: string;
  email: string;
  adresse: string;
  ville: string;
  codePostal: string;
  nbEmprunts: number;
  nbRetard: number;

}
