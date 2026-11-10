import { router } from 'expo-router';
import { OnboardingSlide } from '@/components/onboarding/OnboardingSlide';

export default function OnboardingTwoScreen() {
  return (
    <OnboardingSlide
      step={1}
      icon={require('../../assets/images/icon-plane.png')}
      titleStart="Your boarding pass, "
      titleHighlight="ready"
      titleEnd=" when you need it"
      description="No more searching through emails and apps at the airport."
      buttonLabel="Next"
      onContinue={() => router.push('/onboarding/three')}
    />
  );
}
