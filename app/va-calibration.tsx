import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function VaCalibrationScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'vaCalibration')}
      subtitle={t(language, 'vaCalibrationSubtitle')}
      actions={[{ label: t(language, 'continue'), href: '/va-test', primary: true }]}
    />
  );
}
