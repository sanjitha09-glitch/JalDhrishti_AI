export type Intervention = { id: string; type: string; village: string; date: string; images: number; status: string; observation: string; coordinates: [number, number]; photo: 'dam' | 'pond' };
export type Watershed = { id: string; name: string; area: number; images: number; vegetation: number; water: number; zones: number; ndviBefore: number; ndviAfter: number; waterBefore: number; waterAfter: number; center: [number, number]; interventions: Intervention[] };
const base: Intervention[] = [
  { id: 'WD102', type: 'Check Dam', village: 'Demo Village', date: '2024-08-16', images: 12, status: 'Monitored', observation: 'Positive spatial indicators', coordinates: [17.704, 80.728], photo: 'dam' },
  { id: 'WD103', type: 'Farm Pond', village: 'Demo Village', date: '2025-01-11', images: 8, status: 'Monitored', observation: 'Water indicator increased', coordinates: [17.716, 80.752], photo: 'pond' },
  { id: 'WD104', type: 'Plantation', village: 'Kothuru', date: '2025-07-02', images: 6, status: 'Requires Review', observation: 'Vegetation trend observed', coordinates: [17.691, 80.755], photo: 'dam' },
  { id: 'WD105', type: 'Land Treatment', village: 'Kothuru', date: '2024-11-28', images: 4, status: 'Data Incomplete', observation: 'Requires contextual validation', coordinates: [17.725, 80.717], photo: 'pond' },
  { id: 'WD106', type: 'Water Conservation Structure', village: 'Demo Village', date: '2025-03-19', images: 7, status: 'Analysis Available', observation: 'Water indicator trend observed', coordinates: [17.681, 80.724], photo: 'dam' },
];
export const watersheds: Watershed[] = [
  { id: 'W-101', name: 'Paloncha North', area: 9840, images: 184, vegetation: 11, water: 8, zones: 16, ndviBefore: .39, ndviAfter: .48, waterBefore: 1.5, waterAfter: 1.9, center: [17.76, 80.69], interventions: base.slice(0, 3).map((x, i) => ({...x, id: `WD10${i + 7}`, coordinates: [x.coordinates[0] + .05, x.coordinates[1] - .04] as [number,number]})) },
  { id: 'W-102', name: 'Kinnerasani Catchment', area: 12480, images: 248, vegetation: 18, water: 12, zones: 23, ndviBefore: .42, ndviAfter: .57, waterBefore: 1.8, waterAfter: 2.3, center: [17.705, 80.735], interventions: base },
  { id: 'W-103', name: 'Sujatha Nagar', area: 11260, images: 216, vegetation: 14, water: 9, zones: 19, ndviBefore: .41, ndviAfter: .52, waterBefore: 1.6, waterAfter: 2.0, center: [17.64, 80.81], interventions: base.slice(0, 4).map((x, i) => ({...x, id: `WD11${i}`, coordinates: [x.coordinates[0] - .065, x.coordinates[1] + .075] as [number,number]})) },
  { id: 'W-104', name: 'Chandrugonda', area: 8760, images: 142, vegetation: 9, water: 6, zones: 12, ndviBefore: .36, ndviAfter: .43, waterBefore: 1.3, waterAfter: 1.6, center: [17.57, 80.58], interventions: base.slice(0, 3).map((x, i) => ({...x, id: `WD12${i}`, coordinates: [x.coordinates[0] - .135, x.coordinates[1] - .155] as [number,number]})) },
];
export const layerNames = ['Watershed Boundary', 'Drainage', 'Water Bodies', 'Interventions', 'Geo-coded Photos', 'Vegetation', 'Water Index', 'Change Detection', 'Satellite Imagery'] as const;
export const defaultLayers = ['Watershed Boundary', 'Drainage', 'Water Bodies', 'Interventions', 'Geo-coded Photos'];
export const navigation = [
  ['Overview', '/dashboard', 'LayoutDashboard'], ['Watershed Explorer', '/explorer', 'Map'], ['Geo-Image Intelligence', '/geo-images', 'Images'], ['Satellite Analytics', '/satellite', 'Orbit'], ['Change Detection', '/change', 'ScanSearch'], ['Intervention Monitor', '/interventions', 'Waypoints'], ['AI Insights', '/insights', 'Sparkles'], ['Reports', '/reports', 'FileText'], ['Data & Layers', '/data-layers', 'Layers'], ['Settings', '/settings', 'Settings2'],
] as const;
