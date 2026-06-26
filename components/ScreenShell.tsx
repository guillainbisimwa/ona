import { ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@/constants/colors';

type Action = {
  label: string;
  href?: string;
  onPress?: () => void;
  primary?: boolean;
  selected?: boolean;
};

type ScreenShellProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  actions?: Action[];
};

export function ScreenShell({ title, subtitle, children, actions = [] }: ScreenShellProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 24, paddingBottom: insets.bottom + 24 },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {children ? <View style={styles.content}>{children}</View> : null}
      <View style={styles.actions}>
        {actions.map((action, index) => (
          <Pressable
            key={`${action.label}-${index}`}
            style={[
              styles.button,
              action.selected && styles.buttonSelected,
              action.primary && styles.buttonPrimary,
            ]}
            onPress={() => {
              if (action.onPress) {
                action.onPress();
                return;
              }
              if (action.href) {
                router.push(action.href as never);
              }
            }}
          >
            <Text
              style={[
                styles.buttonText,
                action.selected && styles.buttonTextSelected,
                action.primary && styles.buttonTextPrimary,
              ]}
            >
              {action.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
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
  content: {
    marginBottom: 24,
  },
  actions: {
    gap: 12,
  },
  button: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonSelected: {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  buttonTextPrimary: {
    color: colors.background,
  },
  buttonTextSelected: {
    color: colors.background,
  },
});
