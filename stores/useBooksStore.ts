// stores/useBooksStore.ts
import { create } from "zustand";
import { Book } from "@/types/book";
import { mockBooks } from "@/data/mockBooks";

interface BooksStore {
  books: Book[];
  addBook: (book: Book) => void;
  updateBook: (id: string, book: Book) => void;
  removeBook: (id: string) => void;
}

export const useBooksStore = create<BooksStore>((set) => ({
  books: mockBooks,

  addBook: (book) =>
    set((state) => ({
      books: [...state.books, { ...book, id: crypto.randomUUID() }],
    })),

  updateBook: (id, updated) =>
    set((state) => ({
      books: state.books.map((b) => (b.id === id ? updated : b)),
    })),

  removeBook: (id) =>
    set((state) => ({
      books: state.books.filter((b) => b.id !== id),
    })),
}));
