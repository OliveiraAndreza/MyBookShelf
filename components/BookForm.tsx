// components/BookForm.tsx
"use client";

import { useState } from "react";
import { Book } from "@/types/book";

interface Props {
  initialData?: Book;
  onSubmit: (data: Book) => void;
}

export default function BookForm({ initialData, onSubmit }: Props) {
  const [form, setForm] = useState<Book>(
    initialData || {
      id: "",
      title: "",
      author: "",
      pages: 0,
      currentPage: 0,
      genre: "",
      year: undefined,
      rating: 0,
      synopsis: "",
      cover: "",
      status: "QUERO_LER",
    }
  );

  const handle = (field: keyof Book, value: any) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <form
      className="space-y-4 mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="border p-2 rounded"
          placeholder="Título"
          value={form.title}
          onChange={(e) => handle("title", e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Autor"
          value={form.author}
          onChange={(e) => handle("author", e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          placeholder="Gênero"
          value={form.genre}
          onChange={(e) => handle("genre", e.target.value)}
        />
        <input
          className="border p-2 rounded"
          placeholder="Ano"
          type="number"
          value={form.year ?? ""}
          onChange={(e) => handle("year", Number(e.target.value))}
        />
        <input
          className="border p-2 rounded"
          placeholder="Total de páginas"
          type="number"
          value={form.pages ?? ""}
          onChange={(e) => handle("pages", Number(e.target.value))}
        />
        <input
          className="border p-2 rounded"
          placeholder="Página atual"
          type="number"
          value={form.currentPage ?? ""}
          onChange={(e) => handle("currentPage", Number(e.target.value))}
        />
        <input
          className="border p-2 rounded"
          placeholder="Avaliação (1 a 5)"
          type="number"
          value={form.rating ?? ""}
          onChange={(e) => handle("rating", Number(e.target.value))}
        />

        <select
          className="border p-2 rounded"
          value={form.status}
          onChange={(e) => handle("status", e.target.value)}
        >
          <option value="QUERO_LER">Quero ler</option>
          <option value="LENDO">Lendo</option>
          <option value="LIDO">Lido</option>
          <option value="PAUSADO">Pausado</option>
          <option value="ABANDONADO">Abandonado</option>
        </select>
      </div>

      <input
        className="border p-2 rounded w-full"
        placeholder="URL da capa"
        value={form.cover ?? ""}
        onChange={(e) => handle("cover", e.target.value)}
      />

      <textarea
        className="border p-2 rounded w-full"
        placeholder="Sinopse"
        rows={4}
        value={form.synopsis ?? ""}
        onChange={(e) => handle("synopsis", e.target.value)}
      />

      {/* Preview da capa */}
      {form.cover && (
        <img
          src={form.cover}
          alt="Preview"
          className="w-40 h-56 object-cover rounded mt-3"
          onError={(e) => {
            e.currentTarget.src = "/covers/placeholder.png";
          }}
        />
      )}

      <button
        className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
}
