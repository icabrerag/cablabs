"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { LanguageToggle } from "@/components/layout/Navbar";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { marvelVideos } from "@/data/marvelVideos";
import { flowMusic, flowSocials } from "@/data/socials";

export function FlowExperience() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();
  const reelsTrack = useRef<HTMLDivElement>(null);
  const moveReels = (direction: number) => reelsTrack.current?.scrollBy({ left: direction * 720, behavior: reduced ? "auto" : "smooth" });
  const intro = {
    initial: reduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" as const },
  };

  return (
    <div className="flow-page">
      <header className="flow-nav">
        <Link href="/" className="flow-back">← {t.common.back}</Link>
        <div className="flow-switch"><span>IGNACIO</span><i>/</i><b>FLOW</b></div>
        <LanguageToggle />
      </header>

      <main id="main-content">
        <section className="flow-hero">
          <div className="flow-aurora" aria-hidden="true" />
          <motion.p {...intro}>{t.flow.intro}</motion.p>
          <motion.h1 {...intro}>FL<span>O</span>W</motion.h1>
          <motion.h2 {...intro}>{t.flow.tagline}</motion.h2>
          <motion.div {...intro} className="flow-hero-foot">
            <p>{t.flow.copy}</p><span aria-hidden="true">SCROLL ↓</span>
          </motion.div>
        </section>

        <section className="flow-section flow-social-section">
          <div className="flow-heading"><span>01 / {t.flow.networks}</span><h2>{t.flow.networksTitle}</h2></div>
          <div className="flow-social-grid">
            {flowSocials.map((social, index) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <span className="flow-social-icon">{social.icon}</span><small>0{index + 1}</small>
                <h3>{social.name}</h3><p>{social.username}</p><b>{t.flow.visit} ↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="flow-section road-section">
          <div className="road-heading-row">
            <div className="flow-heading"><span>02 / MARVEL</span><h2>{t.flow.road}</h2><p>{t.flow.roadCopy}</p></div>
            <div className="reel-controls" aria-label={t.flow.reviewNavigation}>
              <button type="button" onClick={() => moveReels(-1)} aria-label={t.flow.previousReviews}>←</button>
              <button type="button" onClick={() => moveReels(1)} aria-label={t.flow.nextReviews}>→</button>
            </div>
          </div>
          <div className="reels-track" ref={reelsTrack}>
            {marvelVideos.map((video) => (
              <article className="reel-card" key={video.id}>
                <a className="reel-cover" href={video.href} target="_blank" rel="noopener noreferrer" aria-label={`${t.flow.watchReview}: ${video.title}`}>
                  <Image src={video.cover} alt={`Portada de la reseña de ${video.title}`} fill sizes="(max-width: 640px) 280px, 330px" />
                  <span className="reel-play" aria-hidden="true">▶</span>
                  <span className="reel-open">{t.flow.watchReview} ↗</span>
                </a>
                <div className="reel-meta">
                  <div><small>{t.flow.review} #{String(video.id).padStart(2, "0")}</small><h3>{video.title}</h3><time dateTime={video.date}>{video.date}</time></div>
                  <a href={video.href} target="_blank" rel="noopener noreferrer" aria-label={`${video.title} — Instagram`}>Instagram ↗</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="flow-section flow-music">
          <div className="flow-heading"><span>03 / {t.flow.music}</span><h2>{t.flow.musicTitle}</h2><p>{t.flow.musicCopy}</p></div>
          <div className="flow-player">
            <div className="flow-track-heading">
              <div className="flow-art"><span>F</span><i>LOW</i></div>
              <div className="flow-track-info">
                <small>{t.flow.nowOnSpotify}</small>
                <strong>{flowMusic.title}</strong>
                <span>{flowMusic.artist} · {flowMusic.year}</span>
                <a href={flowMusic.spotify} target="_blank" rel="noopener noreferrer">{t.flow.openSpotify} ↗</a>
              </div>
            </div>
            <iframe
              className="spotify-embed"
              src={flowMusic.embed}
              title={`${flowMusic.title} — ${flowMusic.artist} en Spotify`}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </section>

        <section className="flow-section live-section">
          <div className="live-card">
            <div className="live-status"><i /><span>{t.flow.live}</span></div>
            <div><small>TWITCH.TV/FLOWWCL</small><h2>{t.flow.offline}</h2><p>{t.flow.liveCopy}</p><a href="https://twitch.tv/FlowwCL" target="_blank" rel="noopener noreferrer">{t.flow.channel}<span>↗</span></a></div>
            <div className="live-crosshair" aria-hidden="true">＋</div>
          </div>
        </section>
      </main>

      <footer className="flow-footer"><Link href="/">← {t.common.back}</Link><p>{t.flow.end}</p><span>FLOW © 2026</span></footer>
    </div>
  );
}
