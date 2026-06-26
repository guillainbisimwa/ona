import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'fr';

export type AppContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  consentGiven: boolean;
  setConsentGiven: (value: boolean) => void;
  patientName: string;
  setPatientName: (name: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [consentGiven, setConsentGiven] = useState(false);
  const [patientName, setPatientName] = useState('');

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      consentGiven,
      setConsentGiven,
      patientName,
      setPatientName,
    }),
    [language, consentGiven, patientName],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}
