import { View, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { Text } from './Text';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'onImage';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <View style={[styles.base, styles[variant]]}>
      {variant === 'onImage' ? (
        <Text size="sm" weight="extrabold" color={colors.primary}>
          {label}
        </Text>
      ) : (
        <Text size="sm">{label}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  default: {
    backgroundColor: '#e5e7eb',
  },
  success: {
    backgroundColor: '#d1fae5',
  },
  warning: {
    backgroundColor: '#fef3c7',
  },
  error: {
    backgroundColor: '#fee2e2',
  },
  onImage: {
    backgroundColor: colors.white,
    paddingHorizontal: 11,
    paddingVertical: 5,
  },
});
