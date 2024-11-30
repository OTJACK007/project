'use client';

import {
  Blocks,
  CalendarDays,
  Users2,
  Zap,
  FileSpreadsheet,
  Clock,
  Settings,
  Receipt
} from 'lucide-react';

export const navigationItems = [
  { name: 'JOB Space', href: '/dashboard/job-space', icon: Blocks },
  { name: 'Planning', href: '/dashboard/planning', icon: CalendarDays },
  { name: 'Prestations', href: '/dashboard/prestations', icon: Users2 },
  { name: 'Fiches de poste', href: '/dashboard/fiches', icon: Zap },
  { name: 'Contrats', href: '/dashboard/contrats', icon: FileSpreadsheet },
  { name: "Relevés d'heures", href: '/dashboard/releves', icon: Clock },
  { name: 'Factures', href: '/dashboard/factures', icon: Receipt },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];