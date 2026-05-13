import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { FilterBar } from './FilterBar';
import { motion, AnimatePresence } from 'framer-motion';

export function Layout() {
  const location = useLocation();
  
  const getTitle = (path: string) => {
    switch (path) {
      case '/': return 'DMS Dashboard';
      case '/analytics': return 'Performance Analytics';
      case '/files': return 'File Management';
      case '/reports': return 'Reports Centre';
      case '/settings': return 'System Settings';
      default: return 'DMS Pulse';
    }
  };

  return (
    <div className="flex min-h-screen bg-surface">
      <Sidebar />
      <main className="flex-1 ml-[280px] flex flex-col min-w-0">
        <Header title={getTitle(location.pathname)} />
        <FilterBar />
        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
