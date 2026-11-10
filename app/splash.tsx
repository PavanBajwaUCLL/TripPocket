import { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Screen, Stack, Text } from '@/components/primitives';
import { colors } from '@/theme';

const SPLASH_DURATION_MS = 1500;

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding/one');
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Screen scrollable={false} padding="none" backgroundColor={colors.primary}>
      <StatusBar style="light" />
      <Stack flex={1} gap="ml" align="center" justify="center">
        <Image
          source={require('../assets/images/suitcase.png')}
          style={styles.logo}
        />
        <Text size="display" weight="extrabold" color={colors.white}>
          TripPocket
        </Text>
        <Text color={colors.white}>Everything for your trip in one place</Text>
      </Stack>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: { height: 120, width: 120 },
});
