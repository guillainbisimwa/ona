import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function VaTestScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'vaTest')}
      subtitle={t(language, 'vaTestSubtitle')}
      actions={[{ label: t(language, 'viewResults'), href: '/va-result', primary: true }]}
    />
  );
}
