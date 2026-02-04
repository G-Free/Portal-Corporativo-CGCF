
import { DigitalAsset } from '../types';

export const ASSETS_FOLDER: DigitalAsset[] = [
  {
    id: 'TRK-001',
    title: 'Análise Volumétrica - Corredor do Lobito',
    category: 'LOGISTICS',
    url: 'https://images.unsplash.com/photo-1591768793355-74d7cacdcff0?q=80&w=1600',
    resolution: '4K (3840x2160)',
    uploadDate: '2026-02-15',
    fileType: 'JPG'
  },
  {
    id: 'SEC-042',
    title: 'Monitorização Térmica - Santa Clara',
    category: 'SECURITY',
    url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000',
    resolution: '2K (2560x1440)',
    uploadDate: '2026-02-18',
    fileType: 'JPG'
  },
  {
    id: 'INF-089',
    title: 'Infraestrutura Portuária - Porto de Luanda',
    category: 'INFRA',
    url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600',
    resolution: '4K (3840x2160)',
    uploadDate: '2026-01-25',
    fileType: 'JPG'
  },
  {
    id: 'TOUR-001',
    title: 'Promoção Turística - Quedas de Kalandula',
    category: 'GOV',
    url: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1200',
    resolution: '4K (3840x2160)',
    uploadDate: '2026-03-10',
    fileType: 'JPG'
  },
  {
    id: 'GOV-010',
    title: 'Cimeira de Gestão Coordenada de Fronteiras',
    category: 'GOV',
    url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1200',
    resolution: 'FHD (1920x1080)',
    uploadDate: '2026-02-01',
    fileType: 'PNG'
  }
];

export const getAssetById = (id: string) => {
  return ASSETS_FOLDER.find(asset => asset.id === id);
};
