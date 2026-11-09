import { Image, StyleSheet, View } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { Card, Row, Text } from './primitives';
import { colors } from '../theme';

interface ProfileRowProps {
  icon: ImageSourcePropType;
  label: string;
  value?: string;
}

export function ProfileRow({ icon, label, value }: ProfileRowProps) {
  return (
    <Card variant="outlined">
      <Row gap="cozy">
        <View style={styles.iconTile}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text size="label" weight="semibold">
          {label}
        </Text>
        {value !== undefined && (
          <Text size="bodyTight" color={colors.muted}>
            {value}
          </Text>
        )}
        <Image
          source={require('../../assets/images/icons/chevron.png')}
          style={styles.chevron}
        />
      </Row>
    </Card>
  );
}

const styles = StyleSheet.create({
  iconTile: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 12,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  icon: { height: 22, width: 22 },
  chevron: { height: 18, width: 18 },
});
