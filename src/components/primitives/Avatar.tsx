import { View, Image, StyleSheet } from 'react-native';
import { colors } from '../../theme';
import { Text } from './Text';

interface AvatarProps {
  uri?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return `${first}${last}`.toUpperCase();
}

export function Avatar({ uri, name, size = 'md' }: AvatarProps) {
  const initials = name ? getInitials(name) : '?';

  if (uri !== undefined) {
    return <Image source={{ uri }} style={[styles.base, styles[size]]} />;
  }

  return (
    <View style={[styles.base, styles[size], styles.fallback]}>
      {size === 'lg' ? (
        <Text size="title" weight="extrabold" color={colors.primary}>
          {initials}
        </Text>
      ) : (
        <Text size="sm">{initials}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 999, overflow: 'hidden', alignItems: 'center', justifyContent: 'center' },
  fallback: { backgroundColor: colors.primarySoft },
  sm: { height: 32, width: 32 },
  md: { height: 44, width: 44 },
  lg: { height: 88, width: 88 },
});
