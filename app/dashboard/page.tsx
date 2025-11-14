// src/app/dashboard/page.tsx
'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import StatsCard from '@/components/StatsCard';
import ProgressBar from '@/components/ProgressBar';
import BookPreviewCard from '@/components/BookPreviewCard';
import { mockBooks } from '@/data/mockBooks';
import { useBooksStats } from '@/lib/useBooks';

export default function DashboardPage() {
  const books = mockBooks; // usando dados mock
  const stats = useBooksStats(books);

  // percent of pages read relative to total pages in library (optional)
  const totalPagesInLibrary = books.reduce((acc, b) => acc + (b.pages ?? 0), 0);
  const percentPagesRead = totalPagesInLibrary === 0 ? 0 : Math.round((stats.totalPagesRead / totalPagesInLibrary) * 100);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Visão geral da sua biblioteca</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard title="Total de livros" value={stats.totalBooks} subtitle="Livros cadastrados">
            <svg className="w-6 h-6 text-indigo-600" viewBox="0 0 24 24" fill="none"><path d="M3 7v11a2 2 0 0 0 2 2h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </StatsCard>

          <StatsCard title="Lendo agora" value={stats.reading} subtitle="Em andamento">
            <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none"><path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 6h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </StatsCard>

          <StatsCard title="Finalizados" value={stats.finished} subtitle={`${stats.percentFinished}% dos livros`}>
            <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </StatsCard>

          <StatsCard title="Páginas lidas" value={stats.totalPagesRead} subtitle={`${percentPagesRead}% das páginas totais`}>
            <svg className="w-6 h-6 text-pink-500" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </StatsCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2">
            <div className="bg-white p-4 rounded-2xl border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Leituras em andamento</h3>
                <p className="text-sm text-gray-500">{stats.reading} em progresso</p>
              </div>

              <div className="space-y-3">
                {books.filter(b => b.status === 'LENDO').length === 0 && (
                  <p className="text-sm text-gray-500">Nenhum livro em andamento</p>
                )}
                {books.filter(b => b.status === 'LENDO').map(b => (
                  <BookPreviewCard key={b.id} book={b} />
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Progresso geral</h3>
              <ProgressBar value={stats.percentFinished} label="Percentual de livros finalizados" />
              <div className="mt-4">
                <ProgressBar value={percentPagesRead} label="Percentual de páginas lidas" />
              </div>
            </div>
          </section>

          <aside>
            <div className="bg-white p-4 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Livros recentes</h3>
              <div className="flex flex-col gap-3">
                {stats.recent.map(b => (
                  <div key={b.id} className="flex gap-3 items-center">
                    <img src={b.cover ?? '/covers/placeholder.png'} alt={b.title} className="w-12 h-16 object-cover rounded" onError={(e)=> (e.currentTarget.src='/covers/placeholder.png')} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{b.title}</p>
                      <p className="text-xs text-gray-500">{b.author}</p>
                    </div>
                    <div className="text-xs text-gray-400">{b.year ?? '—'}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-white p-4 rounded-2xl border shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Atalhos</h3>
              <div className="flex flex-col gap-2">
                <a href="/library" className="text-sm px-3 py-2 rounded-md bg-gray-100">Ver Biblioteca</a>
                <a href="/books/new" className="text-sm px-3 py-2 rounded-md bg-indigo-600 text-white">Adicionar novo livro</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
