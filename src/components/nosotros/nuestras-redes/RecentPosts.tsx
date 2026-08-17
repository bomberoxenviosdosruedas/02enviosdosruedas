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
      text: 'Para vos, que vendés en Mar del Plata y hacés envíos... ¿Soles usar las apps para tus envíos? Pero no te generan confianza?',
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
      className="py-24 bg-gradient-to-br from-brand-blue-700 to-brand-blue-600 text-white relative overflow-hidden border-t border-brand-yellow-500/20"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,var(--color-brand-blue-700),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,var(--color-brand-yellow-500),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-blue-700/60 border border-brand-yellow-500/30 text-brand-yellow-500 rounded-full text-base font-subheading uppercase tracking-widest inline-block shadow-sm backdrop-blur-sm">
            EN VIVO
          </span>
          <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-display uppercase tracking-[0.02em] leading-[1.1]">
            PUBLICACIONES RECIENTES
          </h2>
          <p className="text-brand-blue-100 font-sans text-base sm:text-lg max-w-prose leading-relaxed">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales. Seguinos para no perderte nada.
          </p>
          <div className="h-1 w-16 bg-brand-yellow-500 rounded-full" />
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
                className={`double-bezel-outer bg-brand-blue-50/90 border border-brand-blue-100 p-2 rounded-2xl hover-float hover:float-tilt-card hover:glow-blue flex flex-col justify-between ${
                  isFeatured ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                <div className={`double-bezel-inner bg-white rounded-xl border border-brand-blue-50/50 shadow-sm text-brand-blue overflow-hidden flex flex-col justify-between h-full ${
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
                      referrerPolicy="no-referrer"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {isFeatured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-brand-yellow text-brand-blue text-xs font-subheading uppercase tracking-widest rounded-lg font-bold border border-brand-blue/30 shadow-md">
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
                              referrerPolicy="no-referrer"
                              sizes="40px"
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-sm font-sans font-semibold uppercase tracking-wider text-brand-blue-700 leading-none">
                              Envíos DosRuedas
                            </h4>
                            <span className="text-[10px] font-sans font-bold text-brand-blue-400 mt-1 block">
                              {post.date}
                            </span>
                          </div>
                        </div>

                        <div className="p-2 bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-100 rounded-lg">
                          <SocialIcon className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Post Text Description */}
                      <div className={`p-5 ${isFeatured ? 'md:p-8' : ''}`}>
                        <p className={`text-sm md:text-base font-sans leading-relaxed text-brand-blue-600/90 ${
                          isFeatured ? 'line-clamp-6' : 'line-clamp-3'
                        }`}>
                          {post.text}
                        </p>
                      </div>
                    </div>

                    {/* Simulated Interactions Footer & Original Post Link */}
                    <div className={`p-5 pt-0 ${isFeatured ? 'md:px-8' : ''}`}>
                      <div className="pt-4 border-t border-brand-blue-100/50 flex items-center justify-between">
                        {/* Likes & Comments mockup */}
                        <div className="flex items-center gap-4 text-xs font-sans font-bold text-brand-blue-400">
                          <span className="flex items-center gap-1 hover:text-brand-yellow-600 transition-colors cursor-pointer">
                            <Heart className="h-4.5 w-4.5" />
                            <span>{post.likes}</span>
                          </span>
                          <span className="flex items-center gap-1 hover:text-brand-yellow-600 transition-colors cursor-pointer">
                            <MessageCircle className="h-4.5 w-4.5" />
                            <span>{post.comments}</span>
                          </span>
                        </div>

                        {/* Button link */}
                        <a
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-nested-pill bg-brand-yellow hover:bg-brand-yellow-400 text-brand-blue border border-brand-blue/50 font-subheading tracking-wider text-base uppercase py-2 px-4 shadow-sm"
                        >
                          <span>Ver original</span>
                          <span className="cta-nested-icon bg-brand-blue/10 text-brand-blue shrink-0 w-6 h-6 ml-2">
                            <ExternalLink className="h-3.5 w-3.5" />
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
