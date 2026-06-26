import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function AboutScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'about')}
      subtitle={t(language, 'aboutSubtitle')}
      actions={[{ label: t(language, 'backHome'), href: '/home', primary: true }]}
    />
  );
}
