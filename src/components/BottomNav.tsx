import { Image, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Nav, NavItem } from './primitives';
import { colors, spacing } from '../theme';

interface BottomNavProps {
  active: 'trips' | 'profile';
}

export function BottomNav({ active }: BottomNavProps) {
  const insets = useSafeAreaInsets();

  return (
    <Nav paddingBottom={Math.max(spacing.md, insets.bottom)}>
      <NavItem
        label="Trips"
        active={active === 'trips'}
        icon={
          active === 'trips'
            ? require('../../assets/images/icons/home-active.png')
            : require('../../assets/images/icons/home-inactive.png')
        }
        onPress={() => router.replace('/home')}
      />
      <NavItem
        label="Profile"
        active={active === 'profile'}
        icon={
          active === 'profile'
            ? require('../../assets/images/icons/nav-user-active.png')
            : require('../../assets/images/icons/user-inactive.png')
        }
        onPress={() => router.replace('/profile')}
      />
      <View
        accessible
        accessibilityRole="button"
        accessibilityLabel="New trip"
        aria-disabled
        style={styles.newTrip}
      >
        <Image
          source={require('../../assets/images/icons/plus.png')}
          style={styles.plus}
        />
      </View>
    </Nav>
  );
}

const styles = StyleSheet.create({
  newTrip: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 28,
    elevation: 6,
    height: 56,
    justifyContent: 'center',
    left: '50%',
    marginLeft: -28,
    position: 'absolute',
    shadowColor: colors.primary,
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    top: -17,
    width: 56,
  },
  plus: { height: 26, width: 26 },
});
