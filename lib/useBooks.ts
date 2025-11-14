// src/lib/useBooks.ts
import { useMemo } from 'react';
import { Book } from '@/types/book';

export function useBooksStats(books: Book[]) {
  return useMemo(() => {
    const totalBooks = books.length;
    const reading = books.filter(b => b.status === 'LENDO').length;
    const finished = books.filter(b => b.status === 'LIDO').length;
    // total pages read: sum of currentPage (if provided) or pages if finished
    const totalPagesRead = books.reduce((acc, b) => {
      if (typeof b.currentPage === 'number') return acc + b.currentPage;
      if (b.status === 'LIDO' && typeof b.pages === 'number') return acc + b.pages;
      return acc;
    }, 0);

    // percent of books finished
    const percentFinished = totalBooks === 0 ? 0 : Math.round((finished / totalBooks) * 100);

    // recent books (sorted by year desc as quick heuristic)
    const recent = [...books].sort((a, b) => (b.year ?? 0) - (a.year ?? 0)).slice(0, 4);

    return {
      totalBooks,
      reading,
      finished,
      totalPagesRead,
      percentFinished,
      recent,
    };
  }, [books]);
}
