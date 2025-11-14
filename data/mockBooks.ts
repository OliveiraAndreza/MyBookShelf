// data/mockBooks.ts
import { Book } from "@/types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "Emma",
    author: "Jane Austen",
    genre: "Romance",
    year: 1815,
    pages: 544,
    currentPage: 100,
    rating: 5,
    synopsis:
      "Emma Woodhouse, jovem inteligente e rica, acredita saber o que é melhor para os outros e decide se tornar uma casamenteira, mas suas tentativas de unir corações acabam causando confusões — inclusive em seu próprio amor.",
    cover:
      "https://m.media-amazon.com/images/I/81hYz9PZb6L._AC_UF1000,1000_QL80_.jpg",
    status: "LIDO",
  },
  {
    id: "2",
    title: "Gente Pobre",
    author: "Fiódor Dostoiévski",
    genre: "Literatura Russa",
    year: 1846,
    pages: 208,
    currentPage: 0,
    rating: 4,
    synopsis:
      "Primeiro romance de Dostoiévski, apresenta a troca de cartas entre um modesto funcionário e uma jovem órfã, revelando a dura realidade da pobreza e da sensibilidade humana na São Petersburgo do século XIX.",
    cover:
      "https://m.media-amazon.com/images/I/61U5wVlCwrL._AC_UF1000,1000_QL80_.jpg",
    status: "LIDO",
  },
  {
    id: "3",
    title: "Aristóteles e Dante Descobrem os Segredos do Universo",
    author: "Benjamin Alire Sáenz",
    genre: "Romance",
    year: 2012,
    pages: 392,
    currentPage: 392,
    rating: 5,
    synopsis:
      "Aristóteles é um adolescente quieto e introspectivo; Dante é expressivo e sensível. Ao se conhecerem, formam uma amizade profunda que os levará a questionar a família, a identidade e o amor.",
    cover:
      "https://m.media-amazon.com/images/I/71f1fMF+QfL._AC_UF1000,1000_QL80_.jpg",
    status: "LIDO",
  },
  {
    id: "4",
    title: "Um Estranho Sonhador",
    author: "Laini Taylor",
    genre: "Fantasia",
    year: 2017,
    pages: 544,
    currentPage: 320,
    rating: 5,
    synopsis:
      "Lazlo Strange, um órfão e bibliotecário, sempre sonhou com a mítica cidade de Weep. Quando uma expedição parte para desvendar seus mistérios, Lazlo é levado a descobrir que sonhos e realidades podem se misturar.",
    cover:
      "https://m.media-amazon.com/images/I/81s8wvdObGL._AC_UF1000,1000_QL80_.jpg",
    status: "LIDO",
  },
  {
    id: "5",
    title: "Mansfield Park",
    author: "Jane Austen",
    genre: "Romance",
    year: 1814,
    pages: 432,
    currentPage: 0,
    rating: 4,
    synopsis:
      "Fanny Price, criada pelos tios ricos em Mansfield Park, cresce sentindo-se deslocada. Quando novos hóspedes chegam, paixões e dilemas morais se entrelaçam, revelando as sutilezas do caráter e das convenções sociais.",
    cover:
      "https://m.media-amazon.com/images/I/81awQhTgVBL._AC_UF1000,1000_QL80_.jpg",
    status: "LENDO",
  },
];
