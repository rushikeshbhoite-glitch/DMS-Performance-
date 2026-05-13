/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Analytics } from './pages/Analytics';
import { FileManagement } from './pages/FileManagement';
import { Relationships } from './pages/Relationships';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/files" element={<FileManagement />} />
          <Route path="/reports" element={<Relationships />} /> {/* Reusing Relationships as a rich report view */}
          <Route path="/settings" element={<div className="p-12 text-center opacity-40 uppercase tracking-widest font-bold">System Configuration Panel</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

