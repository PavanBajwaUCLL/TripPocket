import { View, Pressable, StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  variant?: 'plain' | 'outlined';
}

export function Card({ children, onPress, variant = 'plain' }: CardProps) {
  if (onPress !== undefined) {
    return (
      <Pressable onPress={onPress} style={[styles.base, styles[variant]]}>
        {children}
      </Pressable>
    );
  }

  return <View style={[styles.base, styles[variant]]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {},
  plain: {},
  outlined: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: spacing.cozy,
    paddingVertical: 13,
  },
});
