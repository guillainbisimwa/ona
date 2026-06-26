import { useRouter } from 'expo-router';
import { ScreenShell } from '@/components/ScreenShell';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';

export default function ConsentScreen() {
  const router = useRouter();
  const { language, setConsentGiven } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'consent')}
      subtitle={t(language, 'consentSubtitle')}
      actions={[
        {
          label: t(language, 'agree'),
          primary: true,
          onPress: () => {
            setConsentGiven(true);
            router.push('/home');
          },
        },
      ]}
    />
  );
}
