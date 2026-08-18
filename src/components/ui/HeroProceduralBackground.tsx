'use client';

import React from 'react';
import { motion } from 'motion/react';

interface HeroProceduralBackgroundProps {
  variant?: 'express' | 'lowcost' | 'flex' | '3pl' | 'community' | 'contact' | 'default';
  className?: string;
}

export default function HeroProceduralBackground({
  variant = 'default',
  className = '',
}: HeroProceduralBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    >
      {/* 1. Deep Royal Navy Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #021440 0%, #04236B 35%, #0636A5 75%, #00277C 100%)',
        }}
      />

      {/* 2. Procedural Dynamic Radial Highlights (CSS Glows) */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(9,80,246,0.35) 0%, rgba(6,54,165,0.15) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            variant === 'express' || variant === 'lowcost'
              ? 'radial-gradient(circle, rgba(255,236,1,0.22) 0%, rgba(255,236,1,0.06) 45%, transparent 70%)'
              : 'radial-gradient(circle, rgba(255,236,1,0.16) 0%, rgba(9,80,246,0.12) 50%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div
        className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(6,54,165,0.4) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* 3. Mathematical Vector Grid Topology (Pure SVG, 0 KB image) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-procedural-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeDasharray="2,6"
            />
            <circle cx="0" cy="0" r="1.5" fill="#FFEC01" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-procedural-grid)" />
      </svg>

      {/* 4. Variant-Specific Procedural Vector Graphics */}
      {variant === 'express' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Animated Speed & Logistics Arteries */}
          <path
            d="M -100 450 Q 400 200 900 380 T 1600 150"
            fill="none"
            stroke="#FFEC01"
            strokeWidth="2.5"
            strokeDasharray="12 16"
            className="animate-pulse"
          />
          <path
            d="M -100 300 Q 500 480 1000 250 T 1600 350"
            fill="none"
            stroke="#628FF9"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <circle cx="450" cy="240" r="4" fill="#FFEC01" />
          <circle cx="950" cy="360" r="5" fill="#FFEC01" />
        </svg>
      )}

      {variant === 'lowcost' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Concentric Cluster Routing Rings */}
          <circle cx="1100" cy="300" r="160" fill="none" stroke="#FFEC01" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="1100" cy="300" r="280" fill="none" stroke="#628FF9" strokeWidth="1" strokeDasharray="6 12" />
          <circle cx="1100" cy="300" r="400" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="4 16" />
          <line x1="200" y1="300" x2="1100" y2="300" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      )}

      {variant === 'flex' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Verified Dispatch Corridor Matrix */}
          <line x1="0" y1="180" x2="1440" y2="180" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="6 12" />
          <line x1="0" y1="420" x2="1440" y2="420" stroke="#628FF9" strokeWidth="1" strokeDasharray="4 10" />
          <rect x="750" y="140" width="80" height="80" rx="16" fill="none" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="4 4" />
          <rect x="950" y="240" width="120" height="120" rx="24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="6 8" />
        </svg>
      )}

      {variant === '3pl' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Inventory Hub Node Matrix */}
          <polygon points="900,150 1100,220 1000,420 800,350" fill="none" stroke="#FFEC01" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="900" cy="150" r="5" fill="#FFEC01" />
          <circle cx="1100" cy="220" r="5" fill="#FFEC01" />
          <circle cx="1000" cy="420" r="5" fill="#FFEC01" />
          <circle cx="800" cy="350" r="5" fill="#FFEC01" />
        </svg>
      )}

      {variant === 'community' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* Social Network Node Links */}
          <line x1="300" y1="200" x2="700" y2="150" stroke="#628FF9" strokeWidth="1" />
          <line x1="700" y1="150" x2="1100" y2="280" stroke="#FFEC01" strokeWidth="1.5" />
          <line x1="1100" y1="280" x2="900" y2="480" stroke="#628FF9" strokeWidth="1" />
          <line x1="900" y1="480" x2="500" y2="400" stroke="#FFEC01" strokeWidth="1" />
          <line x1="500" y1="400" x2="300" y2="200" stroke="#628FF9" strokeWidth="1" />
        </svg>
      )}

      {variant === 'contact' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          {/* GPS Coordinate Beacon Radar */}
          <circle cx="1050" cy="320" r="80" fill="none" stroke="#FFEC01" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '4s' }} />
          <circle cx="1050" cy="320" r="180" fill="none" stroke="#FFEC01" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="1050" cy="320" r="300" fill="none" stroke="#628FF9" strokeWidth="0.75" strokeDasharray="6 12" />
          <circle cx="1050" cy="320" r="6" fill="#FFEC01" />
        </svg>
      )}
    </div>
  );
}
