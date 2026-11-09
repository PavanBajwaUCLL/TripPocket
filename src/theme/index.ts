// Design tokens taken from the TripPocket Figma file.
export const colors = {
  primary: '#3b3bd9',
  primarySoft: '#ececff',
  accent: '#d9480f',
  ink: '#0d1b3e',
  muted: '#5b6779',
  border: '#dde3ec',
  white: '#ffffff',
} as const;

export const spacing = {
  hairline: 2,
  tight: 4,
  xs: 6,
  sm: 8,
  snug: 10,
  cozy: 14,
  md: 16,
  ml: 18,
  lg: 24,
  xl: 28,
} as const;

export const fonts = {
  regular: 'PlusJakartaSans_400Regular',
  medium: 'PlusJakartaSans_500Medium',
  semiBold: 'PlusJakartaSans_600SemiBold',
  bold: 'PlusJakartaSans_700Bold',
  extraBold: 'PlusJakartaSans_800ExtraBold',
} as const;
