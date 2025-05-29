import { StyleSheet, View, Text, StatusBar, Platform } from 'react-native';
import { COLORS, SPACING, FONT } from '@/constants/theme';

type HeaderProps = {
  title: string;
  rightElement?: React.ReactNode;
};

export default function Header({ title, rightElement }: HeaderProps) {
  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {rightElement}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight || 0,
    paddingBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.background,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT.sizes.xxl,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});