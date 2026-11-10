import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomNav } from './BottomNav';
import { Screen, Stack } from './primitives';
import { colors, spacing } from '../theme';

const TOP_PADDING = 56;

interface TabScreenProps {
  active: 'trips' | 'profile';
  children: React.ReactNode;
}

export function TabScreen({ active, children }: TabScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <Screen scrollable={false} padding="none" backgroundColor={colors.white}>
      <StatusBar style="dark" />
      <Screen padding="none">
        <View
          style={[
            styles.content,
            { paddingTop: Math.max(TOP_PADDING, insets.top + spacing.md) },
          ]}
        >
          <Stack gap="md">{children}</Stack>
        </View>
      </Screen>
      <BottomNav active={active} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
});
