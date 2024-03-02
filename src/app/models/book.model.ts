export interface Book {
  [key: string]: any; // Ajoute cette ligne
  livreId: number;
  auteurId: number;
  categorieId: number;
  titre: string;
  emplacement: string;
  etatId: number;
  disponibleId: number;
}
