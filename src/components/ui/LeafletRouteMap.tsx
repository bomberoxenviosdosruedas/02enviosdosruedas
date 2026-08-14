'use client';

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icons in Next.js
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface Coordinate {
  lat: number;
  lng: number;
}

interface LeafletRouteMapProps {
  origin: Coordinate | null;
  destination: Coordinate | null;
  routeCoords: [number, number][]; // Array of [lng, lat] from OSRM GeoJSON
}

// Mar del Plata bounds outside component to avoid recreation and dependency issues
const mdpCenter: L.LatLngExpression = [-38.0055, -57.5426];
const southWest = L.latLng(-38.1500, -57.7000);
const northEast = L.latLng(-37.8500, -57.4000);
const bounds = L.latLngBounds(southWest, northEast);

export default function LeafletRouteMap({
  origin,
  destination,
  routeCoords,
}: LeafletRouteMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const markerAInstance = useRef<L.Marker | null>(null);
  const markerBInstance = useRef<L.Marker | null>(null);
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
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update Markers and Polyline
  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;

    // Clear old layers
    if (markerAInstance.current) map.removeLayer(markerAInstance.current);
    if (markerBInstance.current) map.removeLayer(markerBInstance.current);
    if (polylineInstance.current) map.removeLayer(polylineInstance.current);

    markerAInstance.current = null;
    markerBInstance.current = null;
    polylineInstance.current = null;

    const activeBounds: L.LatLng[] = [];

    // Add Marker A
    if (origin) {
      const latLng = L.latLng(origin.lat, origin.lng);
      activeBounds.push(latLng);
      markerAInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `<div class="relative flex items-center justify-center w-8 h-8"><span class="absolute w-full h-full rounded-full bg-brand-blue-500/40 animate-ping"></span><div class="relative bg-brand-blue-700 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white shadow-lg text-sm font-display">A</div></div>`,
          className: '',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        }),
      }).addTo(map);
    }

    // Add Marker B
    if (destination) {
      const latLng = L.latLng(destination.lat, destination.lng);
      activeBounds.push(latLng);
      markerBInstance.current = L.marker(latLng, {
        icon: L.divIcon({
          html: `<div class="relative flex items-center justify-center w-8 h-8"><span class="absolute w-full h-full rounded-full bg-brand-yellow-500/50 animate-ping"></span><div class="relative bg-brand-yellow-500 text-brand-blue-900 font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-brand-blue-700 shadow-lg text-sm font-display">B</div></div>`,
          className: '',
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        }),
      }).addTo(map);
    }

    // Add route line if coords exist
    if (routeCoords && routeCoords.length > 0) {
      // OSRM returns geometry as [lng, lat], Leaflet wants [lat, lng]
      const latLngs = routeCoords.map((coord) => L.latLng(coord[1], coord[0]));
      
      polylineInstance.current = L.polyline(latLngs, {
        color: '#FFEC01',
        weight: 5,
        opacity: 0.9,
      }).addTo(map);

      // Fit map to route bounds
      map.fitBounds(polylineInstance.current.getBounds(), { padding: [40, 40] });
    } else if (activeBounds.length > 0) {
      // If no route but markers exist, fit bounds of markers
      if (activeBounds.length === 1) {
        map.setView(activeBounds[0], 14);
      } else {
        const boundsObj = L.latLngBounds(activeBounds);
        map.fitBounds(boundsObj, { padding: [50, 50] });
      }
    } else {
      // Reset view to default center
      map.setView(mdpCenter, 13);
    }

  }, [origin, destination, routeCoords]);

  return (
    <div className="w-full h-full min-h-[300px] relative rounded-3xl overflow-hidden bg-brand-blue-700">
      <div ref={mapContainer} className="w-full h-full min-h-[300px] z-10" />
    </div>
  );
}
