
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

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: 'LOGIN' | 'SYNC' | 'CREATE' | 'UPDATE' | 'DELETE' | 'EXPORT';
  details: string;
  ip: string;
  severity: 'INFO' | 'WARNING' | 'CRITICAL';
}

export interface DigitalAsset {
  id: string;
  title: string;
  category: 'INFRA' | 'SECURITY' | 'LOGISTICS' | 'GOV';
  url: string;
  resolution: string;
  uploadDate: string;
  fileType?: 'JPG' | 'PNG' | 'RAW';
}
