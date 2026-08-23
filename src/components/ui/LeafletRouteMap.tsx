'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import Image from 'next/image';
import 'leaflet/dist/leaflet.css';

interface Coordinate {
  lat: number;
  lng: number;
}

interface LeafletRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][]; // Array of [lng, lat] from OSRM GeoJSON
  distanceKm?: number;
  serviceType?: 'EXPRESS' | 'LOW_COST';
}

// Mar del Plata bounds
const mdpCenter: L.LatLngExpression = [-38.0055, -57.5426];
const southWest = L.latLng(-38.1500, -57.7000);
const northEast = L.latLng(-37.8500, -57.4000);
const bounds = L.latLngBounds(southWest, northEast);

export default function LeafletRouteMap({
  origin,
  destination,
  routeCoords,
  distanceKm,
  serviceType = 'EXPRESS',
}: LeafletRouteMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerAInstance = useRef<L.Marker | null>(null);
  const markerBInstance = useRef<L.Marker | null>(null);
  const glowPolylineInstance = useRef<L.Polyline | null>(null);
  const polylineInstance = useRef<L.Polyline | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    const map = L.map(mapContainer.current, {
      center: mdpCenter,
      zoom: 13,
      minZoom: 11,
      maxZoom: 17,
      maxBounds: bounds,
      maxBoundsViscosity: 0.8,
      zoomControl: false,
    });

    // Custom positioned zoom control
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // OpenStreetMap tiles with high clarity
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(map);

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update Markers and Animated Polylines
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    // Clear old layers
    if (markerAInstance.current) map.removeLayer(markerAInstance.current);
    if (markerBInstance.current) map.removeLayer(markerBInstance.current);
    if (glowPolylineInstance.current) map.removeLayer(glowPolylineInstance.current);
    if (polylineInstance.current) map.removeLayer(polylineInstance.current);

    markerAInstance.current = null;
    markerBInstance.current = null;
    glowPolylineInstance.current = null;
    polylineInstance.current = null;

    const activeBounds: L.LatLng[] = [];

    // Add Marker A (Origen) - Styled Pin with radar pulse
    if (origin) {
      const latLng = L.latLng(origin.lat, origin.lng);
      activeBounds.push(latLng);
      markerAInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `
            <div class="relative flex items-center justify-center w-10 h-10 map-marker-animate">
              <span class="absolute w-10 h-10 rounded-full bg-brand-blue-500/50 radar-pulse-ring"></span>
              <div class="relative bg-brand-blue-700 text-white rounded-full w-9 h-9 flex items-center justify-center border-2 border-white shadow-xl shadow-brand-blue-900/40">
                <div class="flex flex-col items-center justify-center leading-none">
                  <span class="text-[9px] font-subheading font-bold text-brand-yellow-500 uppercase tracking-tighter">RET</span>
                  <span class="text-xs font-display font-bold">A</span>
                </div>
              </div>
              <div class="absolute -bottom-1 w-2 h-2 bg-brand-blue-700 rotate-45 border-r border-b border-white"></div>
            </div>
          `,
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        }),
      }).addTo(map);
    }

    // Add Marker B (Destino) - High visibility yellow finish pin
    if (destination) {
      const latLng = L.latLng(destination.lat, destination.lng);
      activeBounds.push(latLng);
      markerBInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `
            <div class="relative flex items-center justify-center w-10 h-10 map-marker-animate">
              <span class="absolute w-10 h-10 rounded-full bg-brand-yellow-500/60 radar-pulse-ring"></span>
              <div class="relative bg-brand-yellow-500 text-brand-blue-900 rounded-full w-9 h-9 flex items-center justify-center border-2 border-brand-blue-700 shadow-xl shadow-brand-blue-950/50">
                <div class="flex flex-col items-center justify-center leading-none">
                  <span class="text-[9px] font-subheading font-bold text-brand-blue-900 uppercase tracking-tighter">ENT</span>
                  <span class="text-xs font-display font-bold">B</span>
                </div>
              </div>
              <div class="absolute -bottom-1 w-2 h-2 bg-brand-yellow-500 rotate-45 border-r border-b border-brand-blue-700"></div>
            </div>
          `,
          className: '',
          iconSize: [40, 40],
          iconAnchor: [20, 36],
        }),
      }).addTo(map);
    }

    // Add animated route line if coords exist
    if (routeCoords && routeCoords.length > 0) {
      // OSRM returns geometry as [lng, lat], Leaflet wants [lat, lng]
      const latLngs = routeCoords.map((coord) => L.latLng(coord[1], coord[0]));
      
      // Underlay glow polyline
      glowPolylineInstance.current = L.polyline(latLngs, {
        color: '#0636A5',
        weight: 8,
        opacity: 0.7,
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      // Active animated dash polyline
      polylineInstance.current = L.polyline(latLngs, {
        color: '#FFEC01',
        weight: 5,
        opacity: 1,
        className: 'leaflet-route-animated',
        lineCap: 'round',
        lineJoin: 'round',
      }).addTo(map);

      // Fit map to route bounds
      map.fitBounds(polylineInstance.current.getBounds(), {
        padding: [50, 50],
        maxZoom: 15,
        animate: true,
      });
    } else if (activeBounds.length > 0) {
      // If no route but markers exist, fit bounds of markers
      if (activeBounds.length === 1) {
        map.setView(activeBounds[0], 14, { animate: true });
      } else {
        const boundsObj = L.latLngBounds(activeBounds);
        map.fitBounds(boundsObj, { padding: [60, 60], animate: true });
      }
    } else {
      // Reset view to default center
      map.setView(mdpCenter, 13, { animate: true });
    }

  }, [origin, destination, routeCoords]);

  return (
    <div className="w-full h-full min-h-[300px] relative rounded-2xl overflow-hidden bg-brand-blue-900 select-none">
      {/* Map Target Canvas */}
      <div ref={mapContainer} className="w-full h-full min-h-[300px] z-0" />

      {/* Top Left: Logo Badge Branding Overlay */}
      <div className="absolute top-3 left-3 z-[400] pointer-events-none">
        <div className="bg-brand-blue-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-brand-blue-500/30 shadow-lg flex items-center gap-2.5">
          <div className="relative w-6 h-6 shrink-0 bg-white/10 rounded-lg p-0.5 flex items-center justify-center">
            <Image
              src="/logo-master.svg"
              alt="Logo DosRuedas"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[11px] font-display uppercase tracking-wider text-white">
              DosRuedas <span className="text-brand-yellow-500">Live</span>
            </span>
            <span className="text-[8px] font-mono text-brand-blue-200">
              {serviceType === 'EXPRESS' ? 'Ruta Prioritaria < 2H' : 'Ruteo Batch Económico'}
            </span>
          </div>
        </div>
      </div>

      {/* Top Right: Live Distance Pill Overlay (if distance available) */}
      {distanceKm !== undefined && distanceKm > 0 && (
        <div className="absolute top-3 right-3 z-[400] pointer-events-none">
          <div className="bg-brand-yellow-500 text-brand-blue-900 px-3 py-1.5 rounded-xl border-2 border-brand-blue-700 shadow-xl flex items-center gap-2 animate-bounce-short">
            <span className="text-[10px] font-subheading font-bold uppercase tracking-wider">
              Distancia
            </span>
            <span className="text-sm font-mono font-black tabular-nums bg-brand-blue-900 text-white px-2 py-0.5 rounded-md">
              {distanceKm.toLocaleString('es-AR')} km
            </span>
          </div>
        </div>
      )}

      {/* Bottom Center Route Status Pill */}
      {routeCoords.length > 0 && (
        <div className="absolute bottom-3 left-3 z-[400] pointer-events-none">
          <div className="bg-brand-blue-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-brand-yellow-500/40 text-[10px] font-mono text-brand-yellow-500 flex items-center gap-1.5 shadow-md">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-yellow-500 animate-ping" />
            <span>Ruta Óptima Trazada</span>
          </div>
        </div>
      )}
    </div>
  );
}

