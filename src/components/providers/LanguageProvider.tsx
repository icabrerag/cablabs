"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Locale, translations } from "@/data/i18n";

type Value={locale:Locale;setLocale:(locale:Locale)=>void;t:typeof translations.es};
const LanguageContext=createContext<Value|null>(null);
export function LanguageProvider({children}:{children:React.ReactNode}){
  const [locale,setLocale]=useState<Locale>("es");
  useEffect(()=>{const saved=localStorage.getItem("portfolio-locale");const timer=window.setTimeout(()=>{if(saved==="es"||saved==="en")setLocale(saved)},0);return()=>window.clearTimeout(timer)},[]);
  useEffect(()=>{document.documentElement.lang=locale;localStorage.setItem("portfolio-locale",locale)},[locale]);
  const value=useMemo(()=>({locale,setLocale,t:translations[locale]}),[locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){const value=useContext(LanguageContext);if(!value)throw new Error("LanguageProvider missing");return value}
