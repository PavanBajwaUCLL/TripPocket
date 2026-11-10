import { Text as RNText, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

interface TextProps {
  children: React.ReactNode;
  size?:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'caption'
    | 'body'
    | 'bodyTight'
    | 'label'
    | 'section'
    | 'subtitle'
    | 'cardTitle'
    | 'heading'
    | 'title'
    | 'display';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  numberOfLines?: number;
  underline?: boolean;
}

export function Text({
  children,
  size = 'md',
  weight = 'normal',
  color,
  align = 'left',
  numberOfLines,
  underline = false,
}: TextProps) {
  return (
    <RNText
      style={[
        styles.base,
        styles[size],
        styles[weight],
        { textAlign: align },
        color !== undefined && { color },
        underline && styles.underline,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  base: {
    color: colors.ink,
  },
  sm: { fontSize: 12, lineHeight: 16 },
  md: { fontSize: 14, lineHeight: 20 },
  lg: { fontSize: 16, lineHeight: 24 },
  xl: { fontSize: 20, lineHeight: 28 },
  caption: { fontSize: 11, lineHeight: 14 },
  body: { fontSize: 13, lineHeight: 20 },
  bodyTight: { fontSize: 13, lineHeight: 16 },
  label: { fontSize: 15, lineHeight: 20 },
  section: { fontSize: 16, lineHeight: 20 },
  subtitle: { fontSize: 18, lineHeight: 23 },
  cardTitle: { fontSize: 20, lineHeight: 25 },
  heading: { fontSize: 26, lineHeight: 32.5 },
  title: { fontSize: 30, lineHeight: 38 },
  display: { fontSize: 36, lineHeight: 45 },
  // Each weight is its own font file, so fontWeight must not be set as well.
  normal: { fontFamily: fonts.regular },
  medium: { fontFamily: fonts.medium },
  semibold: { fontFamily: fonts.semiBold },
  bold: { fontFamily: fonts.bold },
  extrabold: { fontFamily: fonts.extraBold },
  underline: { textDecorationLine: 'underline' },
});
