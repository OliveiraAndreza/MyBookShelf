// app/books/new/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import BookForm from "@/components/BookForm";
import { useBooksStore } from "@/stores/useBooksStore";
import { useRouter } from "next/navigation";

export default function AddBookPage() {
  const addBook = useBooksStore((state) => state.addBook);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Adicionar novo livro</h1>

        <BookForm
          onSubmit={(data) => {
            addBook(data);
            router.push("/library");
          }}
        />
      </main>
    </div>
  );
}
