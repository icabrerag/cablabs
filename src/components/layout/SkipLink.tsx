"use client";
import{useLanguage}from"@/components/providers/LanguageProvider";
export function SkipLink(){const{t}=useLanguage();return <a className="skip-link" href="#main-content">{t.common.skip}</a>}
