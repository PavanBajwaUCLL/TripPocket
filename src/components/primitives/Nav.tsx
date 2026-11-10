import { View, StyleSheet } from 'react-native';
import { colors, spacing } from '../../theme';

interface NavProps {
  children: React.ReactNode;
  paddingBottom?: number;
}

export function Nav({ children, paddingBottom = spacing.md }: NavProps) {
  return <View style={[styles.base, { paddingBottom }]}>{children}</View>;
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 84,
    paddingHorizontal: 52,
    paddingTop: spacing.sm,
  },
});
