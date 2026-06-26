import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAppContext } from '@/contexts/AppContext';

export function useRequireConsent() {
  const router = useRouter();
  const { consentGiven } = useAppContext();

  useEffect(() => {
    if (!consentGiven) {
      router.replace('/welcome');
    }
  }, [consentGiven, router]);
}
