import React from 'react';
import { 
  TrendingUp, 
  Map as MapIcon, 
  Fullscreen, 
  MoreVertical, 
  Activity, 
  Zap,
  Globe,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const regions = [
  { name: 'North America', zone: 'North-West', change: '+32.4%', isPrimary: true },
  { name: 'Western Europe', zone: 'Central EU', change: '+28.1%', isSecondary: true },
  { name: 'Southeast Asia', zone: 'ASEAN South', change: '+21.9%', isTertiary: true },
  { name: 'South America', zone: 'Brazil East', change: '+18.4%', isPrimary: true },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-surface-container p-5 rounded-xl border border-white/10 shadow-lg">
          <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2 font-bold uppercase tracking-widest opacity-60">Overall Growth</p>
          <div className="text-[32px] font-bold text-primary">+24.8%</div>
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[10px] text-secondary font-bold bg-secondary/10 px-2 py-0.5 rounded-full">↑ 4.2% YoY</span>
            <div className="h-1 flex-grow bg-surface-container-highest rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[75%]" />
            </div>
          </div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-white/10 shadow-lg">
          <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2 font-bold uppercase tracking-widest opacity-60">Top Performing Zone</p>
          <div className="text-[32px] font-bold text-on-surface">NA-North</div>
          <div className="mt-3 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Revenue: $4.2M</div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-white/10 shadow-lg">
          <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2 font-bold uppercase tracking-widest opacity-60">Period Comparison</p>
          <div className="text-[32px] font-bold text-on-surface">Q4 vs Q3</div>
          <div className="mt-3 text-[10px] font-bold text-error uppercase tracking-wider">↓ 1.2% Dec Dip</div>
        </div>
        <div className="bg-surface-container p-5 rounded-xl border border-white/10 shadow-lg">
          <p className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2 font-bold uppercase tracking-widest opacity-60">Sync Health</p>
          <div className="text-[32px] font-bold text-tertiary">99.9%</div>
          <div className="mt-3 text-[10px] font-bold text-primary uppercase tracking-wider">Optimal Latency</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Heatmap Section */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container p-6 rounded-xl border border-white/10 shadow-xl overflow-hidden relative">
          <div className="flex justify-between items-center mb-6 relative z-10">
            <h3 className="text-[20px] font-bold text-on-surface flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Regional Performance Heatmap
            </h3>
            <div className="flex gap-2">
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 rounded-lg"><Fullscreen className="w-4 h-4" /></button>
              <button className="p-2 text-on-surface-variant hover:text-primary transition-colors hover:bg-white/5 rounded-lg"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="h-[400px] bg-surface-container-lowest rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
              alt="Global Heatmap" 
            />
            {/* Mock Hotspots */}
            <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-secondary/40 rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-primary/40 rounded-full animate-pulse" />

            <div className="absolute top-6 left-6 bg-surface/90 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-2xl">
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3 opacity-60">Hotspots Detected</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(197,192,255,0.6)]" />
                  <span className="text-[12px] font-bold">Western Europe <span className="text-primary font-normal">(Critical)</span></span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(187,196,244,0.6)]" />
                  <span className="text-[12px] font-bold">East Asia <span className="text-secondary font-normal">(Sustained)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highest Growth List */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container p-6 rounded-xl border border-white/10 shadow-xl flex flex-col">
          <h3 className="text-[20px] font-bold text-on-surface mb-6 font-bold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-secondary" />
            Highest Growth Regions
          </h3>
          <div className="space-y-4 flex-grow">
            {regions.map((reg) => (
              <div key={reg.name} className="flex items-center justify-between p-4 rounded-xl bg-surface-container-high border border-white/5 hover:bg-secondary-container/10 hover:border-secondary/30 transition-all cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110",
                    reg.isSecondary ? "bg-secondary/10 text-secondary" : reg.isTertiary ? "bg-tertiary/10 text-tertiary" : "bg-primary/10 text-primary"
                  )}>
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-on-surface">{reg.name}</p>
                    <p className="text-[11px] text-on-surface-variant opacity-60">Zone: {reg.zone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={cn("text-[14px] font-bold", reg.isSecondary ? "text-secondary" : "text-primary")}>{reg.change}</p>
                  <p className="text-[9px] text-on-surface-variant uppercase font-bold tracking-tighter opacity-50">YoY Growth</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-[12px] font-bold border border-primary/20 text-primary rounded-xl uppercase tracking-widest hover:bg-primary/5 transition-all active:scale-95">
            View All Performance Logs
          </button>
        </div>

        {/* Investigation Filters */}
        <div className="col-span-12 bg-surface-container p-6 rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 text-primary rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[18px] font-bold text-on-surface">Deep Investigation Filters</h4>
              <p className="text-[13px] text-on-surface-variant opacity-70">Isolate anomalies, spikes, or sudden drops in growth trends</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Data Granularity</label>
              <select className="w-full bg-surface-container-high border border-white/10 rounded-lg py-2.5 px-3 text-[14px] text-on-surface focus:ring-1 focus:ring-primary focus:outline-none appearance-none">
                <option>Weekly Aggregates</option>
                <option>Daily Records</option>
                <option>Monthly Summaries</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Anomaly Threshold</label>
              <div className="flex items-center gap-4 pt-2">
                <input type="range" className="flex-grow accent-primary h-1.5 bg-surface-container-highest rounded-full" />
                <span className="text-[14px] font-bold text-primary min-w-[3ch]">±15%</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">Dimension Focus</label>
              <div className="flex gap-2 pt-1">
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-[11px] font-bold border border-white/5 hover:border-primary/30">Volume</button>
                <button className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary text-[11px] font-bold border border-primary/30">Revenue</button>
                <button className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-[11px] font-bold border border-white/5 hover:border-primary/30">Churn</button>
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full h-[42px] bg-primary-container text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary-container/20">
                <Search className="w-4 h-4" />
                Run Drill-Down Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="pt-8 border-t border-white/5 text-center text-on-surface-variant opacity-40 text-[11px] uppercase tracking-widest font-bold">
        © 2024 DMS Pulse. Enterprise Data Analytics Suite. Proprietary and Confidential.
      </footer>
    </div>
  );
}
