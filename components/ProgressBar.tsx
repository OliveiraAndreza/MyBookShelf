// src/components/ProgressBar.tsx
import React from 'react';

interface Props {
  value: number; // 0-100
  label?: string;
}

export default function ProgressBar({ value, label }: Props) {
  const val = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-medium text-gray-700">{val}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${val}%`, background: 'linear-gradient(90deg,#6366f1,#ec4899)' }}
        />
      </div>
    </div>
  );
}