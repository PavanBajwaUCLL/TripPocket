import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'trippocket.onboarding-completed';
const COMPLETED = 'true';

export async function hasCompletedOnboarding(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(ONBOARDING_KEY)) === COMPLETED;
  } catch {
    return false;
  }
}

export async function completeOnboarding(): Promise<void> {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, COMPLETED);
  } catch {
  }
}
