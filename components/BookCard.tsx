// components/BookCard.tsx
"use client";

import { Book } from "@/types/book";
import Link from "next/link";
import { useBooksStore } from "@/stores/useBooksStore";
import { useRouter } from "next/navigation";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const removeBook = useBooksStore((s) => s.removeBook);
  const router = useRouter();

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-all">
      {/* Capa */}
      <img
        src={book.cover ?? "/covers/placeholder.png"}
        alt={book.title}
        className="w-full h-64 object-cover"
        onError={(e) => (e.currentTarget.src = "/covers/placeholder.png")}
      />

      <div className="p-4 space-y-2">
        {/* Título e autor */}
        <h3 className="text-lg font-semibold leading-tight">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>

        {/* Gênero, avaliação, ano */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {book.genre && (
            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
              {book.genre}
            </span>
          )}
          <span className="text-xs text-yellow-600">
            ⭐ {book.rating ?? "-"}
          </span>
          <span className="text-xs text-gray-400">{book.year ?? "—"}</span>
        </div>

        {/* Ações */}
        <div className="flex justify-between items-center pt-3 border-t mt-3">
          <Link
            href={`/books/${book.id}`}
            className="text-xs text-indigo-600 hover:underline"
          >
            Ver detalhes
          </Link>

          <div className="flex gap-3 text-xs">
            {/* Editar */}
            <button
              className="text-gray-500 hover:text-indigo-600"
              onClick={() => router.push(`/books/${book.id}/edit`)}
            >
              Editar
            </button>

            {/* Excluir */}
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => {
                if (confirm("Deseja realmente excluir este livro?")) {
                  removeBook(book.id);
                }
              }}
            >
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
