// components/SearchBar.tsx
'use client';
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por título ou autor..."
      value={term}
      onChange={handleChange}
      className="w-full sm:w-80 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
    />
  );
}