import { LeafletRouteMap } from '@enviosdosruedas/ui';

// Leaflet fills its parent (h-full, min 300px) — give it an explicit height.
// OSM tiles load over the network; markers, the route polyline and the brand
// overlays render regardless. routeCoords are [lng, lat] pairs (OSRM GeoJSON).
const frame: React.CSSProperties = { height: 380, maxWidth: 760 };

// Leaflet fades tiles in by diffing `+new Date()` per frame; the static capture
// harness freezes Date, which strands loaded tiles at opacity 0. Pin them
// visible (no-op in a live card, where the fade ends at 1 anyway).
const TileFix = () => <style>{'[data-route-preview] .leaflet-tile{opacity:1!important}'}</style>;

// Zona Güemes → Playa Grande (Express, 0–3 km tier = $3.700)
const guemes = { lat: -38.0105, lng: -57.544 };
const playaGrande = { lat: -38.028, lng: -57.532 };
const rutaGuemesPlayaGrande: [number, number][] = [
  [-57.544, -38.0105],
  [-57.5452, -38.0128],
  [-57.5461, -38.0152],
  [-57.5448, -38.0176],
  [-57.5421, -38.0198],
  [-57.5395, -38.0221],
  [-57.5368, -38.0243],
  [-57.5344, -38.0262],
  [-57.532, -38.028],
];

// Centro → Punta Mogotes por la costa (Low Cost, 7–10 km tier)
const centro = { lat: -38.0, lng: -57.548 };
const puntaMogotes = { lat: -38.07, lng: -57.548 };
const rutaCentroMogotes: [number, number][] = [
  [-57.548, -38.0],
  [-57.544, -38.006],
  [-57.54, -38.013],
  [-57.536, -38.021],
  [-57.533, -38.029],
  [-57.534, -38.036],
  [-57.538, -38.043],
  [-57.542, -38.052],
  [-57.545, -38.061],
  [-57.548, -38.07],
];

export const ExpressGuemesPlayaGrande = () => (
  <div style={frame} data-route-preview>
    <TileFix />
    <LeafletRouteMap
      origin={guemes}
      destination={playaGrande}
      routeCoords={rutaGuemesPlayaGrande}
      distanceKm={2.8}
      serviceType="EXPRESS"
    />
  </div>
);

export const LowCostCentroMogotes = () => (
  <div style={frame} data-route-preview>
    <TileFix />
    <LeafletRouteMap
      origin={centro}
      destination={puntaMogotes}
      routeCoords={rutaCentroMogotes}
      distanceKm={8.4}
      serviceType="LOW_COST"
    />
  </div>
);

export const SoloMarcadores = () => (
  <div style={frame} data-route-preview>
    <TileFix />
    <LeafletRouteMap origin={guemes} destination={playaGrande} routeCoords={[]} serviceType="EXPRESS" />
  </div>
);
