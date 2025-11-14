// app/library/page.tsx
'use client';
import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import GenreFilter from '@/components/GenreFilter';
import BookCard from '@/components/BookCard';
import { mockBooks } from '@/data/mockBooks';

export default function LibraryPage() {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('');

  const genres = Array.from(
    new Set(mockBooks.map((b) => b.genre).filter(Boolean))
  ) as string[];

  const filteredBooks = useMemo(() => {
    return mockBooks.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());
      const matchesGenre = genre ? book.genre === genre : true;
      return matchesSearch && matchesGenre;
    });
  }, [search, genre]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold">Minha Biblioteca</h2>
          <div className="flex flex-col sm:flex-row gap-2">
            <SearchBar onSearch={setSearch} />
            <GenreFilter genres={genres} selected={genre} onSelect={setGenre} />
          </div>
        </div>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Nenhum livro encontrado 😕
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
