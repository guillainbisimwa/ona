import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function EyeCaptureScreen() {
  useRequireConsent();
  const { language } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'eyeCapture')}
      subtitle={t(language, 'eyeCaptureSubtitle')}
      actions={[{ label: t(language, 'continue'), href: '/ai-processing', primary: true }]}
    />
  );
}
