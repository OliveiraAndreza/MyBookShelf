// src/types/book.ts
export type ReadStatus = 'QUERO_LER' | 'LENDO' | 'LIDO' | 'PAUSADO' | 'ABANDONADO';

export interface Book {
  id: string;
  title: string;
  author: string;
  genre?: string;
  year?: number;
  pages?: number;      // total pages
  currentPage?: number;// current page
  rating?: number;     // 1-5
  synopsis?: string;
  cover?: string;      // URL
  status?: ReadStatus;
}
