import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart3, 
  FolderOpen, 
  FileText, 
  Settings,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: FolderOpen, label: 'File Management', path: '/files' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-[280px] bg-surface-container-low flex flex-col py-6 px-4 shadow-xl z-50 border-r border-white/5">
      <div className="mb-10 px-4">
        <h1 className="text-[20px] font-bold text-primary tracking-tight">DMS Pulse</h1>
        <p className="text-[12px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Enterprise Monitor</p>
      </div>

      <nav className="flex-grow space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group",
              isActive 
                ? "bg-secondary-container/20 text-primary font-semibold" 
                : "text-on-surface-variant hover:bg-secondary-container/10 hover:text-on-surface"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[16px]">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4 bg-surface-container-high rounded-xl border border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-on-primary-container">
            JD
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-on-surface">John Doe</span>
            <span className="text-xs text-on-surface-variant flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-primary" />
              Admin Entry
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
