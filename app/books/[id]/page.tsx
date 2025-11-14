// app/books/[id]/page.tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useBooksStore } from "@/stores/useBooksStore";

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const books = useBooksStore((s) => s.books);
  const removeBook = useBooksStore((s) => s.removeBook);

  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="p-6">
        <Navbar />
        <p className="mt-6 text-center text-gray-500">Livro não encontrado.</p>
      </div>
    );
  }

  // progress (para exibir barra)
  const progress =
    book.pages && book.currentPage
      ? Math.round((book.currentPage / book.pages) * 100)
      : book.status === "LIDO"
      ? 100
      : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">

          {/* Capa */}
          <div className="max-w-xs mx-auto md:mx-0">
            <img
              src={book.cover ?? "/covers/placeholder.png"}
              alt={book.title}
              className="w-full h-auto rounded-xl border shadow-sm object-cover"
              onError={(e) => (e.currentTarget.src = "/covers/placeholder.png")}
            />
          </div>

          {/* Informações */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>

            <p className="text-lg text-gray-700">{book.author}</p>

            <div className="flex flex-wrap gap-3 text-sm">
              {book.genre && (
                <span className="px-2 py-1 rounded bg-gray-200">{book.genre}</span>
              )}
              <span className="text-yellow-600">⭐ {book.rating}</span>
              <span className="text-gray-500">{book.year}</span>
            </div>

            {/* Status */}
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Status: </span>
              {book.status}
            </p>

            {/* progresso */}
            {book.status === "LENDO" && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-1">
                  Progresso: {progress}%
                </p>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-pink-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Botões */}
            <div className="flex gap-4 mt-6">
              <button
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => router.push(`/books/${book.id}/edit`)}
              >
                Editar
              </button>

              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                onClick={() => {
                  if (confirm("Deseja mesmo excluir este livro?")) {
                    removeBook(book.id);
                    router.push("/library");
                  }
                }}
              >
                Excluir
              </button>
            </div>
          </div>
        </div>

        {/* Sinopse */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-xl font-semibold mb-3">Sinopse</h2>
          <p className="leading-relaxed text-gray-700 whitespace-pre-line">
            {book.synopsis || "Sem sinopse disponível."}
          </p>
        </div>
      </main>
    </div>
  );
}
