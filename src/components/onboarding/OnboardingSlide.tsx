import { Image, StyleSheet, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Row, Screen, Stack, Text } from '../primitives';
import { StyledButton } from '../StyledButton';
import { colors, spacing } from '../../theme';

const STEPS = [0, 1, 2] as const;

interface OnboardingSlideProps {
  step: (typeof STEPS)[number];
  icon: ImageSourcePropType;
  titleStart: string;
  titleHighlight: string;
  titleEnd?: string;
  description: string;
  buttonLabel: string;
  onContinue: () => void;
}

export function OnboardingSlide({
  step,
  icon,
  titleStart,
  titleHighlight,
  titleEnd = '',
  description,
  buttonLabel,
  onContinue,
}: OnboardingSlideProps) {
  const insets = useSafeAreaInsets();

  return (
    <Screen scrollable={false} padding="none" backgroundColor={colors.white}>
      <StatusBar style="dark" />
      <View style={styles.hero}>
        <View style={styles.iconTile}>
          <Image source={icon} style={styles.icon} />
        </View>
      </View>
      <View
        style={[
          styles.content,
          { paddingBottom: Math.max(spacing.lg, insets.bottom) },
        ]}
      >
        <Stack flex={1} justify="space-between">
          <Stack gap="md" align="center">
            <Text size="heading" weight="extrabold" align="center">
              {titleStart}
              <Text
                size="heading"
                weight="extrabold"
                color={colors.accent}
                underline
              >
                {titleHighlight}
              </Text>
              {titleEnd}
            </Text>
            <Text size="body" color={colors.muted} align="center">
              {description}
            </Text>
            <Row gap="xs">
              {STEPS.map((dot) => (
                <View
                  key={dot}
                  style={[styles.dot, dot === step && styles.dotActive]}
                />
              ))}
            </Row>
          </Stack>
          <StyledButton
            label={buttonLabel}
            onPress={onContinue}
            testID="onboarding-continue"
          />
        </Stack>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    height: '45%',
    justifyContent: 'center',
  },
  iconTile: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 44,
    height: 150,
    justifyContent: 'center',
    width: 150,
  },
  icon: { height: 72, width: 72 },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
  },
  dot: {
    backgroundColor: colors.border,
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  dotActive: { backgroundColor: colors.primary, width: 22 },
});
