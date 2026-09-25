"use client";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { professionalSocials } from "@/data/socials";
export function Footer(){const{t}=useLanguage();return <footer className="site-footer section-shell"><p>{t.footer.built}</p><p>Concón, Chile <span>·</span> 2026</p><div className="footer-links"><a href={professionalSocials.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={professionalSocials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></footer>}
