import { Image, StyleSheet, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Badge, Card, Row, Stack, Text } from './primitives';
import { colors, spacing } from '../theme';

const SCRIM_COLORS = ['rgba(13,13,61,0)', 'rgba(13,13,61,0.78)'] as const;
const SCRIM_LOCATIONS = [0.35, 1] as const;

interface TripCardBaseProps {
  name: string;
  dates: string;
  illustration: ImageSourcePropType;
}

interface FeaturedTripCardProps extends TripCardBaseProps {
  variant: 'featured';
  chips: string[];
}

interface CompactTripCardProps extends TripCardBaseProps {
  variant: 'compact';
  status: string;
}

type TripCardProps = FeaturedTripCardProps | CompactTripCardProps;

export function TripCard(props: TripCardProps) {
  const { name, dates, illustration, variant } = props;

  return (
    <Card>
      <View style={[styles.photo, styles[`${variant}Photo`]]}>
        <Image
          source={illustration}
          resizeMode="cover"
          style={styles.illustration}
        />
        <LinearGradient
          colors={SCRIM_COLORS}
          locations={SCRIM_LOCATIONS}
          style={StyleSheet.absoluteFill}
        />
        {props.variant === 'featured' ? (
          <View style={styles.featuredContent}>
            <Stack gap="xs">
              <Text size="title" weight="extrabold" color={colors.white}>
                {name}
              </Text>
              <Text color={colors.white}>{dates}</Text>
              <Row gap="sm">
                {props.chips.map((chip) => (
                  <Badge key={chip} label={chip} variant="onImage" />
                ))}
              </Row>
            </Stack>
          </View>
        ) : (
          <View style={styles.compactContent}>
            <Row justify="space-between" align="flex-end">
              <Stack>
                <Text size="cardTitle" weight="extrabold" color={colors.white}>
                  {name}
                </Text>
                <Text size="bodyTight" color={colors.white}>
                  {dates}
                </Text>
              </Stack>
              <Badge label={props.status} variant="onImage" />
            </Row>
          </View>
        )}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  photo: { overflow: 'hidden' },
  // Explicit size: on web an Image otherwise keeps the file's natural size.
  illustration: {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  featuredPhoto: { borderRadius: spacing.lg, height: 210 },
  compactPhoto: { borderRadius: 20, height: 104 },
  featuredContent: {
    bottom: spacing.cozy,
    left: 20,
    position: 'absolute',
    right: 20,
  },
  compactContent: {
    bottom: 12,
    left: spacing.md,
    position: 'absolute',
    right: spacing.md,
  },
});
