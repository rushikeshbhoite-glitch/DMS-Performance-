import React, { useState } from 'react';
import { CloudUpload, Download, FileSpreadsheet, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const specifications = [
  { id: 1, title: 'Invoice #', desc: 'Unique identifier (Alpha-numeric)' },
  { id: 2, title: 'Date', desc: 'Format: YYYY-MM-DD' },
  { id: 3, title: 'Seller & Buyer', desc: 'Authorized entity names' },
  { id: 4, title: 'SKU', desc: 'Product code as per catalog' },
  { id: 5, title: 'Amount', desc: 'Numeric value with 2 decimals' },
  { id: 6, title: 'Region & Zone', desc: 'Global hierarchy categorization' },
];

const recentUploads = [
  { name: 'Q3_NorthRegion_Sales.xlsx', date: 'Oct 24, 2023 14:20', status: 'Success' },
  { name: 'WestZone_Invoices_v2.csv', date: 'Oct 24, 2023 10:15', status: 'Processing' },
  { name: 'Historical_Data_2022.xlsx', date: 'Oct 22, 2023 16:45', status: 'Success' },
];

export function FileManagement() {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Main Column */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
        {/* Upload Area */}
        <div className="bg-surface-container p-6 rounded-xl border border-white/5 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[18px] font-bold text-primary">Upload Sales Data</h3>
            <button className="flex items-center gap-2 text-primary font-bold text-[12px] uppercase tracking-wider hover:underline">
              <Download className="w-4 h-4" />
              Download Template
            </button>
          </div>
          
          <div 
            className={cn(
              "border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-all cursor-pointer group",
              isDragging 
                ? "border-primary bg-primary/5 scale-[0.99]" 
                : "border-primary-container/30 bg-secondary-container/5 hover:bg-secondary-container/10"
            )}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); }}
          >
            <div className="w-20 h-20 bg-primary-container/20 rounded-full flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
              <CloudUpload className="w-10 h-10" />
            </div>
            <h4 className="text-[20px] font-bold mb-2">Drag-and-drop Excel files</h4>
            <p className="text-on-surface-variant mb-8 max-w-md">
              Upload your Sales Invoice file (.xlsx, .csv) to generate real-time performance insights
            </p>
            <button className="bg-primary-container text-white px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-primary-container/30 transition-all active:scale-95">
              Select File from Computer
            </button>
          </div>
        </div>

        {/* Recent Uploads */}
        <div className="bg-surface-container p-6 rounded-xl border border-white/5 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[18px] font-bold text-on-surface">Recent Uploads</h3>
            <span className="text-on-surface-variant text-[11px] font-bold uppercase tracking-widest opacity-60">Sorted by Date</span>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/5">
            <table className="w-full text-left">
              <thead className="bg-surface-container-high/50 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                <tr>
                  <th className="px-4 py-3">Filename</th>
                  <th className="px-4 py-3">Upload Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {recentUploads.map((file) => (
                  <tr key={file.name} className="hover:bg-white/5 border-t border-white/5 transition-colors">
                    <td className="px-4 py-4 flex items-center gap-3">
                      <FileSpreadsheet className="w-4 h-4 text-secondary" />
                      <span className="font-bold">{file.name}</span>
                    </td>
                    <td className="px-4 py-4 text-on-surface-variant">{file.date}</td>
                    <td className="px-4 py-4">
                      {file.status === 'Success' ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold uppercase border border-green-500/20">
                          <CheckCircle2 className="w-3 h-3" />
                          Success
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase border border-primary/20">
                          <Clock className="w-3 h-3 animate-pulse" />
                          Processing
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button className={cn(
                        "text-[12px] font-bold uppercase tracking-wider transition-all",
                        file.status === 'Success' ? "text-primary hover:underline" : "text-on-surface-variant opacity-50 cursor-not-allowed"
                      )}>
                        View Analytics
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Sidebar Column */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div className="bg-surface-container p-6 rounded-xl border border-white/5 shadow-lg sticky top-24">
          <div className="flex items-center gap-3 mb-6 text-primary">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center font-bold">!</div>
            <h3 className="text-[18px] font-bold">Data Specifications</h3>
          </div>
          <p className="text-on-surface-variant text-[14px] mb-6 leading-relaxed">
            To ensure precise dashboard visualizations, your source file must contain the following columns:
          </p>
          <ul className="space-y-4">
            {specifications.map((spec) => (
              <li key={spec.id} className="group p-3 rounded-lg bg-surface-container-high border border-white/5 hover:border-primary/30 transition-all">
                <div className="flex items-start gap-3">
                  <div className="min-w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center text-[11px] font-bold">
                    {spec.id}
                  </div>
                  <div>
                    <span className="block text-[14px] font-bold text-on-surface">{spec.title}</span>
                    <span className="text-[11px] text-on-surface-variant block mt-0.5">{spec.desc}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 p-4 bg-primary-container/10 rounded-xl border border-primary/20 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-primary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1.5">Pro Tip</p>
            <p className="text-[13px] text-on-surface-variant italic leading-relaxed">
              "Using our standardized template ensures 100% data compatibility and 3x faster processing times."
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="fixed top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-[280px] -z-10 w-80 h-80 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}
