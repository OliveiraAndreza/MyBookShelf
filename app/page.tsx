// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-10 max-w-md text-center border border-white/40">
        
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4 drop-shadow-sm">
          BookShelf 📚
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Organize, acompanhe e explore sua própria estante digital.
        </p>

        <Link
          href="/dashboard"
          className="inline-block px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-lg shadow hover:bg-indigo-700 transition-all hover:shadow-lg"
        >
          Ir para o Dashboard
        </Link>
      </div>
    </main>
  );
}
