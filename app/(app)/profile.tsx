import { Avatar, Stack, Text } from '@/components/primitives';
import { ProfileRow } from '@/components/ProfileRow';
import { TabScreen } from '@/components/TabScreen';
import { colors } from '@/theme';

const PROFILE_NAME = 'Pavanpreet Singh Bajwa';
const PROFILE_EMAIL = 'pavanbajwa01@gmail.com';

export default function ProfileScreen() {
  return (
    <TabScreen active="profile">
      <Text size="title" weight="extrabold">
        Profile
      </Text>

      <Stack gap="xs" align="center">
        <Avatar name={PROFILE_NAME} size="lg" />
        <Text size="subtitle" weight="extrabold">
          {PROFILE_NAME}
        </Text>
        <Text size="bodyTight" color={colors.muted}>
          {PROFILE_EMAIL}
        </Text>
      </Stack>

      <Stack gap="snug" align="flex-start">
        <ProfileRow
          icon={require('../../assets/images/icons/user-active.png')}
          label="Account details"
        />
        <ProfileRow
          icon={require('../../assets/images/icons/bell.png')}
          label="Notifications"
        />
        <ProfileRow
          icon={require('../../assets/images/icons/globe.png')}
          label="Language"
          value="English"
        />
        <ProfileRow
          icon={require('../../assets/images/icons/lock.png')}
          label="Privacy & security"
        />
        <ProfileRow
          icon={require('../../assets/images/icons/help.png')}
          label="Help & support"
        />
        <ProfileRow
          icon={require('../../assets/images/icons/logout.png')}
          label="Sign out"
        />
      </Stack>
    </TabScreen>
  );
}
