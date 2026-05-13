import React from 'react';
import { 
  Users, 
  MoreHorizontal, 
  Store, 
  ArrowRightLeft,
  CircleDot,
  Plus,
  TrendingUp
} from 'lucide-react';
import { cn } from '../lib/utils';

export function Relationships() {
  const pairs = [
    { seller: 'Nexus Industrial', buyer: 'Global Fleet Inc.', count: '1,240', score: 88, isTier1: true },
    { seller: 'Swift Supply', buyer: 'Metro Retailers', count: '985', score: 72, isTier1: true },
    { seller: 'Horizon Tech', buyer: 'Beacon Corp', count: '742', score: 55, isTier1: false },
  ];

  const entities = [
    { id: 'VS', name: 'Vortex Systems', code: 'vortex-sys-012', type: 'SELLER', value: '$1.4M', connection: 'Apex Logistics', score: 92 },
    { id: 'AL', name: 'Apex Logistics', code: 'apex-log-984', type: 'BUYER', value: '$840K', connection: 'Vortex Systems', score: 74 },
    { id: 'NI', name: 'Nexus Industrial', code: 'nex-ind-551', type: 'SELLER', value: '$2.2M', connection: 'Metro Retailers', score: 88 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-[24px] font-bold text-on-surface tracking-tight">Relationship Intelligence Matrix</h2>
        <span className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] opacity-60">Global Network Overview</span>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 bg-surface-container rounded-2xl p-6 border border-white/10 shadow-2xl min-h-[500px] flex flex-col">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-[18px] font-bold text-on-surface">Flow Density Map</h3>
              <p className="text-[13px] text-on-surface-variant opacity-60">Interconnectivity between top 15 sellers & buyers</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2 text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" /> Transaction Flow
              </span>
            </div>
          </div>

          <div className="flex-grow bg-surface-container-lowest/50 rounded-2xl border border-white/5 relative flex items-center justify-center overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-10">
              <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dotGrid)" />
            </svg>
            <div className="relative w-full h-full flex justify-between px-20">
              <div className="flex flex-col justify-around py-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={cn("w-12 h-12 rounded-full flex items-center justify-center", i === 1 ? "bg-primary" : "bg-primary-container/20 group hover:bg-primary-container/40")}>
                    {i === 1 ? <Store className="w-6 h-6 text-on-primary" /> : <div className="w-2 h-2 rounded-full bg-primary/40" />}
                  </div>
                ))}
              </div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-primary/30 fill-none">
                <path d="M 120 100 L 680 200" strokeWidth="4" strokeOpacity="0.6" />
                <path d="M 120 100 L 680 80" strokeWidth="1" strokeOpacity="0.2" />
                <path d="M 120 250 L 680 200" strokeWidth="2" strokeOpacity="0.4" />
                <path d="M 120 400 L 680 430" strokeWidth="3" strokeOpacity="0.5" />
              </svg>
              <div className="flex flex-col justify-around py-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={cn("w-12 h-12 rounded-full flex items-center justify-center", i === 2 ? "bg-secondary" : "bg-secondary-container/20 hover:bg-secondary-container/40")}>
                    {i === 2 ? <Users className="w-6 h-6 text-on-secondary" /> : <div className="w-2 h-2 rounded-full bg-secondary/40" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 flex flex-col h-full gap-6">
          <div className="bg-surface-container rounded-2xl p-6 border border-white/10 shadow-2xl flex-grow flex flex-col">
            <h3 className="text-[18px] font-bold text-on-surface mb-8">Highest Volume Pairs</h3>
            <div className="space-y-5">
              {pairs.map((pair, idx) => (
                <div key={idx} className="p-4 bg-surface-container-high rounded-xl border border-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                  <div className="flex justify-between items-center mb-3">
                    <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest", pair.isTier1 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary")}>
                      {pair.isTier1 ? 'Tier 1 Match' : 'Tier 2 Match'}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-mono">{pair.count} Trans.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 truncate font-bold text-sm">{pair.seller}</div>
                    <ArrowRightLeft className="w-3.5 h-3.5 text-on-surface-variant/40" />
                    <div className="flex-1 truncate font-bold text-sm text-right">{pair.buyer}</div>
                  </div>
                  <div className="mt-4 h-1.5 bg-surface-container-lowest rounded-full overflow-hidden">
                    <div className={cn("h-full", pair.isTier1 ? "bg-primary" : "bg-secondary")} style={{ width: `${pair.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Most Frequent Seller', title: 'Titan Logistics', value: '482', unit: 'Leads', trend: '+12.4%', color: 'primary' },
          { label: 'Top Buyer Loyalty', title: 'Omni Retail Group', value: '94.2', unit: '%', trend: '+2.1%', color: 'secondary' },
          { label: 'Avg Order Value', title: 'Cross-System Mean', value: '$12.4k', unit: '', trend: '-0.8%', color: 'on-surface' }
        ].map((kpi, idx) => (
          <div key={idx} className="bg-surface-container rounded-2xl p-6 border border-white/10 shadow-lg">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-2 opacity-60">{kpi.label}</p>
            <h4 className={`text-[20px] font-bold text-${kpi.color}`}>{kpi.title}</h4>
            <div className="mt-8 flex items-end justify-between">
              <span className="text-[32px] font-bold">{kpi.value} <span className="text-[14px] font-normal opacity-50 uppercase tracking-widest">{kpi.unit}</span></span>
              <div className="text-right">
                <span className={cn("text-[14px] font-bold flex items-center justify-end gap-1", kpi.trend.startsWith('+') ? "text-green-400" : "text-error")}>
                  {kpi.trend}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="px-6 py-5 border-b border-white/5 flex justify-between items-center">
          <h3 className="text-[18px] font-bold text-on-surface">Directory of Registered Entities</h3>
          <button className="bg-primary px-5 py-2 rounded-lg text-[11px] font-bold text-on-primary uppercase tracking-widest flex items-center gap-2">
            <Plus className="w-3.5 h-3.5" /> New Entity
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#111C44] text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em]">
              <tr>
                <th className="px-6 py-5">Entity Identity</th>
                <th className="px-6 py-5">Role</th>
                <th className="px-6 py-5">Volume (30D)</th>
                <th className="px-6 py-5">Intelligence Score</th>
                <th className="px-6 py-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-[14px]">
              {entities.map((ent) => (
                <tr key={ent.code} className="hover:bg-primary/5 group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[12px]", ent.type === 'SELLER' ? "bg-primary text-on-primary" : "bg-secondary text-on-secondary")}>
                        {ent.id}
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">{ent.name}</div>
                        <div className="text-[11px] opacity-40 font-mono">{ent.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("px-2 py-1 rounded text-[10px] font-bold", ent.type === 'SELLER' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary")}>
                      {ent.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono font-bold">{ent.value}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className={cn("h-full", ent.score > 80 ? "bg-green-400" : "bg-yellow-400")} style={{ width: `${ent.score}%` }} />
                      </div>
                      <span className="text-[11px] font-bold">{ent.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-primary-container text-white shadow-2xl shadow-primary-container/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
        <Plus className="w-8 h-8" />
      </button>
    </div>
  );
}
