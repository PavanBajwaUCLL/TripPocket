import { Image, Pressable, StyleSheet } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { colors, spacing } from '../../theme';
import { Text } from './Text';

interface NavItemProps {
  label: string;
  onPress: () => void;
  active?: boolean;
  icon?: ImageSourcePropType;
}

export function NavItem({ label, onPress, active = false, icon }: NavItemProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={styles.base}
    >
      {icon !== undefined && <Image source={icon} style={styles.icon} />}
      <Text
        size="caption"
        weight="semibold"
        color={active ? colors.primary : colors.muted}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { alignItems: 'center', gap: spacing.tight },
  icon: { height: 22, width: 22 },
});
