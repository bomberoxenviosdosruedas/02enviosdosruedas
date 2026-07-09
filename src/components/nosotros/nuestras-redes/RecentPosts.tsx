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
      image: 'https://i.postimg.cc/TYqTfdNk/fac2.jpg',
      alt: 'Publicación de Facebook - Solución para tus envíos',
      text: '📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Confianza y responsabilidad son nuestros pilares.',
      likes: 12,
      comments: 10,
      url: 'https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l',
    },
    {
      platform: 'Instagram',
      platformIcon: Instagram,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
      image: 'https://i.postimg.cc/Hs4TdYvN/ig4.jpg',
      alt: 'Publicación de Instagram - Servicio confiable en Mar del Plata',
      text: '📦 MENSAJERÍA ENVÍOS DOSRUEDAS 🚀 ~ ¡Somos la solución para tus envíos en Mar del Plata! ~ Te ofrecemos un servicio confiable...',
      likes: 14,
      comments: 2,
      url: 'https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/',
    },
    {
      platform: 'Facebook',
      platformIcon: Facebook,
      date: '21 Jun',
      avatar: 'https://picsum.photos/seed/avatar1/100/100',
      image: 'https://i.postimg.cc/9FtcCmgg/fac1.jpg',
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
      image: 'https://i.postimg.cc/TYXTzLQv/ig1.webp',
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
      image: 'https://i.postimg.cc/15cysm7C/ig3.webp',
      alt: 'Publicación de Instagram - Tu confianza es nuestro motor',
      text: 'En cada envío, nos das tu confianza. Con cada entrega, te demostramos por qué vale la pena. 🤝 En Envíos Dos Ruedas, la responsabilidad es nuestro motor...',
      likes: 31,
      comments: 6,
      url: 'https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/',
    },
  ];

  return (
    <section 
      id="recent-posts" 
      className="py-24 bg-slate-50 relative overflow-hidden border-t-4 border-b-4 border-brand-blue"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-brand-yellow text-brand-blue rounded-full text-xs font-subheading uppercase tracking-widest inline-block border-2 border-brand-blue shadow-[2px_2px_0px_#003399]">
            EN VIVO
          </span>
          <h2 className="text-brand-ink text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight">
            PUBLICACIONES RECIENTES
          </h2>
          <p className="text-slate-650 font-sans text-sm sm:text-base max-w-lg mx-auto">
            Lo que está pasando ahora mismo en nuestras redes sociales oficiales. Seguinos para no perderte nada.
          </p>
          <div className="h-2 w-16 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Masonry/Grid of 5 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => {
            const SocialIcon = post.platformIcon;
            return (
              <motion.div
                key={post.url}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl border-2 border-brand-blue overflow-hidden shadow-[4px_4px_0px_#003399] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#003399] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Post Profile Header */}
                  <div className="p-5 flex items-center justify-between border-b-2 border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="relative h-9 w-9 rounded-full overflow-hidden border-2 border-brand-blue shrink-0">
                        <Image
                          src={post.avatar}
                          alt="Envíos DosRuedas Avatar"
                          fill
                          referrerPolicy="no-referrer"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-display text-brand-ink uppercase tracking-wider">
                          Envíos DosRuedas
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {post.date}
                        </span>
                      </div>
                    </div>

                    <div className={`p-1.5 rounded-lg border ${
                      post.platform === 'Facebook' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-pink-50 text-pink-600 border-pink-200'
                    }`}>
                      <SocialIcon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Post Simulated Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-100 border-b-2 border-brand-blue">
                    <Image
                      src={post.image}
                      alt={post.alt || "Envíos DosRuedas Social Post"}
                      fill
                      referrerPolicy="no-referrer"
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Post Text Description */}
                  <div className="p-5">
                    <p className="text-sm text-slate-650 font-sans leading-relaxed line-clamp-3">
                      {post.text}
                    </p>
                  </div>
                </div>

                {/* Simulated Interactions Footer & Original Post Link */}
                <div className="p-5 pt-0">
                  <div className="pt-4 border-t-2 border-slate-100 flex items-center justify-between">
                    
                    {/* Likes & Comments mockup */}
                    <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
                        <Heart className="h-4.5 w-4.5 text-slate-400" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center gap-1 cursor-pointer">
                        <MessageCircle className="h-4.5 w-4.5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>

                    {/* Button link */}
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-subheading uppercase tracking-widest text-brand-blue hover:text-brand-yellow-800 bg-brand-yellow/15 border border-brand-yellow px-3 py-1.5 rounded-xl hover:bg-brand-yellow transition-all duration-300 inline-flex items-center gap-1 font-bold"
                    >
                      <span>Ver original</span>
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>

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
