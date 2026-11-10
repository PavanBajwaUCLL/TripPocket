import { Image, Pressable, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Row, Stack, Text } from '@/components/primitives';
import { TabScreen } from '@/components/TabScreen';
import { TripCard } from '@/components/TripCard';
import { colors } from '@/theme';

interface SectionHeaderProps {
  title: string;
  count: string;
}

function SectionHeader({ title, count }: SectionHeaderProps) {
  return (
    <Row justify="space-between">
      <Text size="section" weight="extrabold">
        {title}
      </Text>
      <Text size="sm" color={colors.muted}>
        {count}
      </Text>
    </Row>
  );
}

export default function HomeScreen() {
  return (
    <TabScreen active="trips">
      <Row justify="space-between">
        <Stack gap="hairline">
          <Text size="bodyTight" color={colors.muted}>
            Hello, Pavanpreet Singh Bajwa
          </Text>
          <Text size="title" weight="extrabold">
            Your trips
          </Text>
        </Stack>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Profile"
          onPress={() => router.replace('/profile')}
          style={({ pressed }) => [
            styles.profileButton,
            pressed && styles.pressed,
          ]}
        >
          <Image
            source={require('../../assets/images/icons/user-active.png')}
            style={styles.profileIcon}
          />
        </Pressable>
      </Row>

      <SectionHeader title="Active" count="1 trip" />
      <TripCard
        variant="featured"
        name="Japan"
        dates="14 April – 28 April"
        illustration={require('../../assets/images/trips/japan.png')}
        chips={['2 flights', '2 hotels', '4 documents']}
      />

      <SectionHeader title="Past" count="1 trip" />
      <TripCard
        variant="compact"
        name="Italy"
        dates="2 – 9 September"
        illustration={require('../../assets/images/trips/italy.png')}
        status="Completed"
      />

      <SectionHeader title="Upcoming" count="1 trip" />
      <TripCard
        variant="compact"
        name="Norway"
        dates="12 – 19 December"
        illustration={require('../../assets/images/trips/norway.png')}
        status="Planned"
      />
    </TabScreen>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  pressed: { opacity: 0.6 },
  profileIcon: { height: 22, width: 22 },
});
