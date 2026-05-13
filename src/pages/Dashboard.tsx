/* Placeholder for Dashboard page */
import React from 'react';
import { TrendingUp, TrendingDown, Minus, ArrowUpRight } from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  BarChart, Bar
} from 'recharts';
import { cn } from '../lib/utils';

const kpis = [
  { label: 'Total Sales Value', value: '$4.2M', trend: '+12.5% vs LW', isUp: true },
  { label: 'Total Invoices', value: '12.5k', trend: '+3.2% vs LW', isUp: true },
  { label: 'Active Sellers', value: '850', trend: 'Stable', isStable: true },
  { label: 'Active Buyers', value: '3.2k', trend: '+8.1% vs LW', isUp: true },
  { label: 'Top SKU', value: 'SKU-900', trend: '-2.4% volume', isUp: false },
];

const trendData = [
  { name: 'OCT', sales: 4000, projection: 4400 },
  { name: 'NOV', sales: 3000, projection: 3200 },
  { name: 'DEC', sales: 5000, projection: 4800 },
  { name: 'JAN', sales: 4500, projection: 4600 },
  { name: 'FEB', sales: 6000, projection: 5800 },
  { name: 'MAR', sales: 5500, projection: 6000 },
];

const regionData = [
  { name: 'North', value: 42, color: 'var(--color-primary)' },
  { name: 'West', value: 28, color: 'var(--color-secondary)' },
  { name: 'East', value: 18, color: 'var(--color-primary-container)' },
  { name: 'South', value: 12, color: 'var(--color-tertiary-container)' },
];

const topSellers = [
  { name: 'Alpha Corp', value: '$842k', percentage: 95 },
  { name: 'Nexus Ltd', value: '$620k', percentage: 72 },
  { name: 'Global Tradex', value: '$510k', percentage: 60 },
  { name: 'Pinnacle Solutions', value: '$490k', percentage: 58 },
  { name: 'Echo Trading', value: '$320k', percentage: 38 },
];

const relationshipData = [
  { seller: 'Alpha Corp', buyer: 'Omni Retail Group', trans: '1,240', share: 85, value: '$420,500' },
  { seller: 'Nexus Ltd', buyer: 'Blue Star Logistics', trans: '982', share: 62, value: '$295,000' },
  { seller: 'Global Tradex', buyer: 'Meridian Imports', trans: '755', share: 45, value: '$188,400' },
  { seller: 'Pinnacle Solutions', buyer: 'Swift Commerce', trans: '540', share: 38, value: '$156,200' },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-surface-container p-5 rounded-xl border border-white/5 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[12px] font-bold text-on-surface-variant/60 uppercase tracking-wider">{kpi.label}</span>
              <div className="text-[28px] font-bold mt-1 text-on-surface">{kpi.value}</div>
            </div>
            <div className={cn(
              "flex items-center gap-1.5 mt-4 text-[12px] font-bold uppercase",
              kpi.isStable ? "text-on-surface-variant" : kpi.isUp ? "text-primary" : "text-error"
            )}>
              {kpi.isStable ? <Minus className="w-3 h-3" /> : kpi.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              <span>{kpi.trend}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* Trend Analysis */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container p-6 rounded-xl border border-white/5">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[18px] font-bold text-on-surface">Trend Analysis: Month-on-Month Growth</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-primary">
                <span className="w-2.5 h-2.5 bg-primary rounded-full" /> Sales
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase text-secondary">
                <span className="w-2.5 h-2.5 bg-secondary rounded-full" /> Projection
              </span>
            </div>
          </div>
          <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--color-on-surface-variant)', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-surface-container-high)', borderColor: 'var(--color-white-5)', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="sales" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                <Area type="monotone" dataKey="projection" stroke="var(--color-secondary)" strokeDasharray="5 5" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Region Sales */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container p-6 rounded-xl border border-white/5">
          <h3 className="text-[18px] font-bold text-on-surface mb-6">Region-wise Sales</h3>
          <div className="h-[250px] relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-[24px] font-bold">100%</div>
              <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Total Market</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {regionData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }} />
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wide">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Sellers */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container p-6 rounded-xl border border-white/5">
          <h3 className="text-[18px] font-bold text-on-surface mb-6">Top 10 Sellers</h3>
          <div className="space-y-6">
            {topSellers.map((seller) => (
              <div key={seller.name} className="space-y-1.5">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider">
                  <span className="text-on-surface">{seller.name}</span>
                  <span className="text-primary">{seller.value}</span>
                </div>
                <div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-1000 ease-out" 
                    style={{ width: `${seller.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

         {/* Top Products */}
        <div className="col-span-12 lg:col-span-6 bg-surface-container p-6 rounded-xl border border-white/5">
          <h3 className="text-[18px] font-bold text-on-surface mb-6">Top 10 Products</h3>
          <div className="h-[250px] flex items-end justify-between gap-4 px-4">
             {[900, 412, 201, 882, 105].map((sku, i) => (
               <div key={sku} className="flex flex-col items-center gap-3 flex-1">
                 <div 
                   className="w-full bg-secondary rounded-t-lg transition-all duration-1000 ease-out"
                   style={{ height: `${100 - i * 15}%`, opacity: 1 - i * 0.1 }}
                 />
                 <span className="text-[10px] text-on-surface-variant font-bold uppercase truncate w-full text-center tracking-tighter">SKU-{sku}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Relationship Table */}
        <div className="col-span-12 bg-surface-container rounded-xl border border-white/5 overflow-hidden shadow-lg">
          <div className="p-6 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-[18px] font-bold text-on-surface">Buyer-Seller Relationship Matrix</h3>
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Top 50 Segments</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high/50 text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <th className="px-6 py-4">Seller Name</th>
                  <th className="px-6 py-4 border-l border-white/5">Buyer Name</th>
                  <th className="px-6 py-4 border-l border-white/5 text-right">Transactions</th>
                  <th className="px-6 py-4 border-l border-white/5 text-right">Volume Share</th>
                  <th className="px-6 py-4 border-l border-white/5 text-right">Total Value</th>
                  <th className="px-6 py-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {relationshipData.map((row, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 font-bold">{row.seller}</td>
                    <td className="px-6 py-4 border-l border-white/5 opacity-80">{row.buyer}</td>
                    <td className="px-6 py-4 border-l border-white/5 text-right font-mono">{row.trans}</td>
                    <td className="px-6 py-4 border-l border-white/5 text-right">
                      <div className="inline-flex items-center gap-3">
                        <div className="w-16 bg-surface-container-highest rounded-full h-1.5 overflow-hidden">
                          <div className={cn("h-full", i % 2 === 0 ? "bg-primary" : "bg-secondary")} style={{ width: `${row.share}%` }} />
                        </div>
                        <span className="font-bold text-[12px]">{row.share}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 border-l border-white/5 text-right font-bold text-primary">{row.value}</td>
                    <td className="px-6 py-4 text-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4 mx-auto cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
