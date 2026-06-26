import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';
import { t } from '@/constants/translations';
import { useAppContext } from '@/contexts/AppContext';

export default function NotFoundScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useAppContext();

  return (
    <View style={[styles.container, { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 }]}>
      <Text style={styles.title}>{t(language, 'notFound')}</Text>
      <Text style={styles.subtitle}>{t(language, 'notFoundSubtitle')}</Text>
      <Link href="/home" style={styles.link}>
        {t(language, 'backHome')}
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    opacity: 0.7,
    marginBottom: 24,
  },
  link: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
});
