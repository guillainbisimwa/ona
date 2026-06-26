import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function HistoryScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'history')}
      subtitle={t(language, 'historySubtitle')}
      actions={[{ label: t(language, 'backHome'), href: '/home', primary: true }]}
    />
  );
}
