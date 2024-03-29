export interface Book {
  [key: string]: any;
  livreId: number;
  auteurId: number;
  categorieId: number;
  titre: string;
  emplacement: string;
  etatId: number;
  disponibleId: number;
}
