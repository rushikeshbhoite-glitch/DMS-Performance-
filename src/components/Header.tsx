import React from 'react';
import { Search, Bell, RefreshCw } from 'lucide-react';

export function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-40 flex justify-between items-center w-full h-16 px-6 border-b border-white/5 bg-surface/80 backdrop-blur-md">
      <div className="flex items-center gap-8">
        <h2 className="text-[24px] font-bold text-on-surface">{title}</h2>
        <div className="relative w-80 hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
          <input 
            type="text" 
            placeholder="Search records or files..."
            className="w-full bg-surface-container border border-white/5 rounded-full py-1.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
         <div className="text-xs text-on-surface-variant hidden sm:block">
          Last sync: <span className="font-semibold text-on-surface">2 mins ago</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-all">
            <RefreshCw className="w-4 h-4" />
          </button>
          <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-full transition-all relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-error rounded-full" />
          </button>
          <div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden ml-2 shadow-inner">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
