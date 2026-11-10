import { router } from 'expo-router';
import { OnboardingSlide } from '@/components/onboarding/OnboardingSlide';

export default function OnboardingOneScreen() {
  return (
    <OnboardingSlide
      step={0}
      icon={require('../../assets/images/icon-wallet.png')}
      titleStart="Everything for your trip in "
      titleHighlight="one place"
      description="All your tickets, hotels and documents together in one digital travel folder."
      buttonLabel="Get Started"
      onContinue={() => router.push('/onboarding/two')}
    />
  );
}
