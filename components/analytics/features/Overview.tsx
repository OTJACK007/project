'use client';

import { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Overview() {
  const data = useMemo(() => [
    { month: 'Jan', amount: 8500000 },
    { month: 'Fév', amount: 9200000 },
    { month: 'Mar', amount: 11000000 },
    { month: 'Avr', amount: 10500000 },
    { month: 'Mai', amount: 12450000 },
    { month: 'Juin', amount: 11800000 }
  ], []);

  const formatYAxis = (value: number) => `${(value / 1000000).toFixed(1)}M`;
  const formatTooltip = (value: number) => `${value.toLocaleString('fr-FR')} FCFA`;

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-6">Vue d&apos;ensemble des salaires</h2>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month"
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={{ stroke: 'hsl(var(--border))' }}
              tickFormatter={formatYAxis}
            />
            <Tooltip
              cursor={{ fill: 'hsl(var(--muted)/0.1)' }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px',
                fontSize: '12px'
              }}
              formatter={formatTooltip}
            />
            <Bar 
              dataKey="amount"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}