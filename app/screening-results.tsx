import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function ScreeningResultsScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'screeningResults')}
      subtitle={t(language, 'screeningResultsSubtitle')}
      actions={[
        { label: t(language, 'viewDetails'), href: '/screening-detail', primary: true },
        { label: t(language, 'backHome'), href: '/home' },
      ]}
    />
  );
}
