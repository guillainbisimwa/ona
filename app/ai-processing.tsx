import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function AiProcessingScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'aiProcessing')}
      subtitle={t(language, 'aiProcessingSubtitle')}
      actions={[{ label: t(language, 'viewResults'), href: '/screening-results', primary: true }]}
    />
  );
}
