import { createContext, useContext, useEffect, useState } from "react";
import { content } from "../data/content";

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* localStorage no disponible */
  }
  return navigator.language?.startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* ignorar */
    }
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);