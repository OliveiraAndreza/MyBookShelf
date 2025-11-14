// src/components/Navbar.tsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">BS</div>
          <div>
            <h1 className="text-lg font-semibold">BookShelf</h1>
            <p className="text-xs text-muted-foreground">Minha biblioteca</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm font-medium">Dashboard</Link>
          <Link href="/library" className="text-sm text-gray-600 hover:text-gray-900">Biblioteca</Link>
          <Link href="/books/new" className="text-sm text-white bg-indigo-600 px-3 py-1 rounded-md shadow-sm">Adicionar</Link>
        </nav>
      </div>
    </header>
  );
}
