
export interface BorderPost {
  id: string;
  name: string;
  province: string;
  status: 'OPEN' | 'LIMITED' | 'CLOSED';
  agencies: string[];
  type: 'LAND' | 'MARITIME' | 'AIR';
}

export interface LegislationHistory {
  date: string;
  note: string;
  version: string;
}

export interface Legislation {
  id: string;
  title: string;
  description: string;
  date: string;
  type: 'DECREE' | 'LAW' | 'MANUAL';
  url: string;
  history?: LegislationHistory[];
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Agency {
  acronym: string;
  name: string;
  description: string;
  ministry: string;
}

export interface DashboardStats {
  totalPosts: number;
  openPercentage: number;
  activeAgencies: number;
  monthlyVisitors: number;
}
