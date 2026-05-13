import React from 'react';
import { Calendar } from 'lucide-react';
import { cn } from '../lib/utils';

const filters = [
  { label: 'Region', options: ['North America', 'Europe', 'Asia Pacific'] },
  { label: 'Zone', options: ['All Zones', 'Zone A', 'Zone B'] },
  { label: 'Seller', options: ['Top Performers', 'New Sellers'] },
  { label: 'Buyer', options: ['All Segments', 'Enterprise', 'SMB'] },
  { label: 'SKU', options: ['Fast Moving', 'Backlog'] },
];

export function FilterBar() {
  return (
    <section className="flex items-center w-full px-6 py-2 gap-4 border-b border-white/5 bg-surface-container shadow-sm overflow-x-auto scrollbar-hide">
      <div className="flex items-center gap-6 no-scrollbar">
        {filters.map((filter) => (
          <div key={filter.label} className="flex flex-col min-w-max">
            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider opacity-60">
              {filter.label}
            </span>
            <select className="bg-transparent border-none text-[14px] text-primary font-bold p-0 pr-6 focus:ring-0 cursor-pointer appearance-none">
              {filter.options.map((opt) => (
                <option key={opt} className="bg-surface text-on-surface">{opt}</option>
              ))}
            </select>
          </div>
        ))}
        
        <div className="flex flex-col min-w-max">
          <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-wider opacity-60">
            Date Range
          </span>
          <div className="flex items-center gap-2 text-[14px] text-on-surface-variant hover:text-primary font-bold cursor-pointer transition-colors">
            <span>Jan 2024 - Mar 2024</span>
            <Calendar className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="bg-primary-container text-white px-4 py-1.5 rounded text-[12px] font-bold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary-container/20">
          Apply Filters
        </button>
      </div>
    </section>
  );
}
