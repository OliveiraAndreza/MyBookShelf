// src/components/StatsCard.tsx
import React from 'react';

interface Props {
  title: string;
  value: string | number;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function StatsCard({ title, value, subtitle, children }: Props) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
        </div>
        <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
