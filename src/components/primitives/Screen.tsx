import { ScrollView, View, StyleSheet } from 'react-native';
import { spacing } from '../../theme';

interface ScreenProps {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  scrollable?: boolean;
  backgroundColor?: string;
}

export function Screen({
  children,
  padding = 'md',
  scrollable = true,
  backgroundColor,
}: ScreenProps) {
  const background = backgroundColor !== undefined && { backgroundColor };

  if (!scrollable) {
    return (
      <View style={[styles.container, styles[padding], background]}>
        {children}
      </View>
    );
  }

  return (
    <ScrollView
      style={[styles.scroll, background]}
      contentContainerStyle={[styles.content, styles[padding]]}
    >
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  container: { flex: 1 },
  content: { flexGrow: 1 },
  none: {},
  sm: { padding: spacing.sm },
  md: { padding: spacing.md },
  lg: { padding: spacing.lg },
});
