// src/components/BookPreviewCard.tsx
import { Book } from '@/types/book';
import Link from 'next/link';

export default function BookPreviewCard({ book }: { book: Book }) {
  const progress = book.pages && book.currentPage ? Math.round((book.currentPage / book.pages) * 100) : book.status === 'LIDO' ? 100 : 0;
  return (
    <div className="flex gap-4 items-start bg-white p-3 rounded-xl border shadow-sm">
      <img
        src={book.cover ?? '/covers/placeholder.png'}
        alt={book.title}
        className="w-16 h-22 object-cover rounded-md flex-shrink-0"
        onError={(e) => (e.currentTarget.src = '/covers/placeholder.png')}
      />
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-semibold">{book.title}</h4>
            <p className="text-sm text-gray-500">{book.author} • {book.year ?? '—'}</p>
            <div className="mt-2 flex gap-2">
              <span className="px-2 py-0.5 bg-gray-100 text-xs rounded">{book.genre}</span>
              <span className="px-2 py-0.5 bg-yellow-50 text-xs rounded">⭐ {book.rating ?? '-'}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{book.status}</p>
            <Link href={`/books/${book.id}`} className="text-xs text-indigo-600">Ver</Link>
          </div>
        </div>

        <div className="mt-3">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div style={{ width: `${progress}%` }} className="h-full" />
          </div>
          <p className="text-xs text-gray-500 mt-1">{progress}% concluído</p>
        </div>
      </div>
    </div>
  );
}
