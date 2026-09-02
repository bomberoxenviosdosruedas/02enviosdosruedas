'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Facebook, Instagram, ExternalLink } from 'lucide-react';

export default function RecentPosts() {
  const posts = [
    {
      platform: 'Facebook',
      platformIcon: Facebook,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar1/100/100',
      image: '/redes/fac2.webp',
      alt: 'Publicación de Facebook - Solución para tus envíos',
      text: 'MENSAJERÍA ENVÍOS DOSRUEDAS ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.',
      likes: 12,
      comments: 10,
      url: 'https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l',
    },
    {
      platform: 'Instagram',
      platformIcon: Instagram,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
      image: '/redes/ig4.webp',
      alt: 'Publicación de Instagram - Servicio confiable en Mar del Plata',
      text: 'MENSAJERÍA ENVÍOS DOSRUEDAS ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...',
      likes: 14,
      comments: 2,
      url: 'https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/',
    },
    {
      platform: 'Facebook',
      platformIcon: Facebook,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar1/100/100',
      image: '/redes/fac1.webp',
      alt: 'Publicación de Facebook - Confianza y responsabilidad',
      text: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Solés usar apps genéricas pero no te dan tranquilidad ni cara visible?',
      likes: 19,
      comments: 7,
      url: 'https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl',
    },
    {
      platform: 'Instagram',
      platformIcon: Instagram,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
      image: '/redes/ig1.webp',
      alt: 'Publicación de Instagram - Pilares fundamentales',
      text: 'En Envíos DosRuedas, nuestro servicio se construye sobre tres pilares fundamentales: Responsabilidad, Eficiencia y Confianza...',
      likes: 24,
      comments: 4,
      url: 'https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/',
    },
    {
      platform: 'Instagram',
      platformIcon: Instagram,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
      image: '/redes/ig3.webp',
      alt: 'Publicación de Instagram - Tu confianza es nuestro motor',
      text: 'En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. En Envíos Dos Ruedas, la responsabilidad es nuestro motor...',
      likes: 31,
      comments: 6,
      url: 'https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/',
    },
  ];

  return (
    <section 
      id="recent-posts" 
      className="py-24 bg-[#052C87] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,#0950F6,transparent_50%)] pointer-events-none opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,#FFF12E,transparent_50%)] pointer-events-none opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow-500 text-[#052C87] rounded-full text-xs sm:text-sm font-subheading uppercase tracking-widest inline-block shadow-glow-yellow font-bold transform -rotate-1">
            EN VIVO
          </span>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight leading-[1.05]">
            PUBLICACIONES RECIENTES
          </h2>
          <p className="text-white/80 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales de Mar del Plata. Seguinos para no perderte nada.
          </p>
        </div>

        {/* Structured Bento Layout of 5 posts */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {posts.map((post, idx) => {
            const SocialIcon = post.platformIcon;
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={post.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-[28px] bg-white/10 backdrop-blur-md border border-white/20 p-2 shadow-2xl flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                <div className={`rounded-[20px] bg-white text-brand-blue-700 overflow-hidden flex flex-col justify-between h-full border border-brand-blue-50/50 shadow-sm ${
                  isFeatured ? 'md:flex-row' : ''
                }`}>
                  
                  {/* Simulated Image */}
                  <div className={`relative w-full overflow-hidden bg-brand-blue-50 border-b border-brand-blue-100/50 ${
                    isFeatured ? 'md:w-1/2 h-64 md:h-full min-h-[300px] md:border-b-0 md:border-r' : 'h-64'
                  }`}>
                    <Image
                      src={post.image}
                      alt={post.alt || "Envíos DosRuedas Social Post"}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-yellow-500 text-brand-blue-900 text-xs font-subheading uppercase tracking-widest rounded-lg font-bold shadow-glow-yellow transform -rotate-1 inline-block">
                          DESTACADO
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Copy Details */}
                  <div className={`flex flex-col justify-between w-full ${isFeatured ? 'md:w-1/2' : ''}`}>
                    <div>
                      {/* Post Profile Header */}
                      <div className="p-5 flex items-center justify-between border-b border-brand-blue-100/50">
                        <div className="flex items-center gap-3">
                          <div className="relative h-9 w-9 rounded-full overflow-hidden border border-brand-blue-100 shrink-0">
                            <Image
                              src={post.avatar}
                              alt="Envíos DosRuedas Avatar"
                              fill={true}
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="text-sm font-sans font-semibold uppercase tracking-wider text-brand-blue-700 leading-none">
                              Envíos DosRuedas
                            </h3>
                            <span className="text-[10px] font-mono font-bold text-brand-blue-400 mt-1 block tabular-nums">
                              {post.date}
                            </span>
                          </div>
                        </div>

                        <div className="p-2 bg-brand-blue-50 text-[#0950F6] border border-brand-blue-100 rounded-lg">
                          <SocialIcon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Post Text Description */}
                      <div className={`p-5 ${isFeatured ? 'md:p-8' : ''}`}>
                        <p className={`text-sm md:text-base font-sans leading-relaxed text-brand-ink/90 ${
                          isFeatured ? 'line-clamp-6' : 'line-clamp-3'
                        }`}>
                          {post.text}
                        </p>
                      </div>
                    </div>

                    {/* Simulated Interactions Footer & Original Post Link */}
                    <div className={`p-5 pt-0 ${isFeatured ? 'md:px-8' : ''}`}>
                      <div className="pt-4 border-t border-brand-blue-100/50 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-xs font-mono font-bold text-brand-blue-500 tabular-nums">
                          <span className="flex items-center gap-1 hover:text-brand-yellow-500 transition-colors cursor-pointer">
                            <Heart className="h-4.5 w-4.5" />
                            <span>{post.likes}</span>
                          </span>
                          <span className="flex items-center gap-1 hover:text-brand-yellow-500 transition-colors cursor-pointer">
                            <MessageCircle className="h-4.5 w-4.5" />
                            <span>{post.comments}</span>
                          </span>
                        </div>

                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group min-h-[44px] bg-brand-yellow-500 hover:bg-brand-yellow-400 text-brand-blue-900 font-subheading tracking-wider text-sm uppercase font-bold py-2 px-4.5 rounded-full flex items-center justify-center gap-2 shadow-glow-yellow transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-500"
                        >
                          <span>Ver original</span>
                          <span className="w-6 h-6 rounded-full bg-[#052C87]/15 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 shrink-0">
                            <ExternalLink className="h-3.5 w-3.5 text-[#052C87]" />
                          </span>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
