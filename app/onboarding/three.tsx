import { router } from 'expo-router';
import { OnboardingSlide } from '@/components/onboarding/OnboardingSlide';
import { completeOnboarding } from '@/services';

export default function OnboardingThreeScreen() {
  return (
    <OnboardingSlide
      step={2}
      icon={require('../../assets/images/icon-calendar.png')}
      titleStart="Know what happens "
      titleHighlight="every day"
      description="See your whole journey in one clear timeline and checklist."
      buttonLabel="Next"
      onContinue={async () => {
        await completeOnboarding();
        router.replace('/home');
      }}
    />
  );
}
