import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function ScreeningDetailScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'screeningDetail')}
      subtitle={t(language, 'screeningDetailSubtitle')}
      actions={[{ label: t(language, 'backHome'), href: '/home', primary: true }]}
    />
  );
}
