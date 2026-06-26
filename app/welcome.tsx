import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';

export default function WelcomeScreen() {
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'welcome')}
      subtitle={t(language, 'welcomeSubtitle')}
      actions={[{ label: t(language, 'continue'), href: '/language-select', primary: true }]}
    />
  );
}
