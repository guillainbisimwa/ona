import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function SettingsScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'settings')}
      subtitle={t(language, 'settingsSubtitle')}
      actions={[{ label: t(language, 'backHome'), href: '/home', primary: true }]}
    />
  );
}
