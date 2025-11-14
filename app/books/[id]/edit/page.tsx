// app/books/[id]/edit/page.tsx
"use client";

import { useBooksStore } from "@/stores/useBooksStore";
import { useRouter, useParams } from "next/navigation";
import BookForm from "@/components/BookForm";
import Navbar from "@/components/Navbar";

export default function EditBookPage() {
  const { id } = useParams(); // pega o id da URL
  const router = useRouter();

  const books = useBooksStore((s) => s.books);
  const updateBook = useBooksStore((s) => s.updateBook);

  // encontra o livro
  const book = books.find((b) => b.id === id);

  // caso o livro não exista
  if (!book) {
    return (
      <div className="p-6">
        <Navbar />
        <p className="mt-4 text-red-600">Livro não encontrado.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-6">Editar Livro</h1>

        <BookForm
          initialData={book}
          onSubmit={(updated) => {
            updateBook(book.id, updated);
            router.push("/library"); // volta para a listagem
          }}
        />
      </main>
    </div>
  );
}
