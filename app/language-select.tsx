import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';

export default function LanguageSelectScreen() {
  const { language, setLanguage } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'languageSelect')}
      actions={[
        {
          label: t(language, 'english'),
          selected: language === 'en',
          onPress: () => setLanguage('en'),
        },
        {
          label: t(language, 'french'),
          selected: language === 'fr',
          onPress: () => setLanguage('fr'),
        },
        { label: t(language, 'continue'), href: '/consent', primary: true },
      ]}
    />
  );
}
