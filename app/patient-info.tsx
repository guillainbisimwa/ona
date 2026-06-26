import { TextInput, StyleSheet } from 'react-native';
import { ScreenShell } from '@/components/ScreenShell';
import { colors } from '@/constants/colors';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';
import { useRequireConsent } from '@/hooks/useRequireConsent';

export default function PatientInfoScreen() {
  useRequireConsent();
  const { language, patientName, setPatientName } = useAppContext();

  return (
    <ScreenShell
      title={t(language, 'patientInfo')}
      subtitle={t(language, 'patientInfoSubtitle')}
      actions={[{ label: t(language, 'continue'), href: '/eye-capture', primary: true }]}
    >
      <TextInput
        value={patientName}
        onChangeText={setPatientName}
        placeholder={t(language, 'patientNamePlaceholder')}
        style={styles.input}
        placeholderTextColor={colors.text + '80'}
      />
    </ScreenShell>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
  },
});
