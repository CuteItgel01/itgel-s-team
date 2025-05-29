import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';

// Mock data for recent trips
const recentTrips = [
  {
    id: '1',
    title: 'Gobi Desert Adventure',
    image: 'https://images.pexels.com/photos/3874378/pexels-photo-3874378.jpeg',
    days: 5,
    type: 'Adventure',
  },
  {
    id: '2',
    title: 'Khövsgöl Lake Retreat',
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg',
    days: 3,
    type: 'Nature',
  },
  {
    id: '3',
    title: 'Ulaanbaatar City Tour',
    image: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg',
    days: 2,
    type: 'Cultural',
  },
];

export default function RecentTrips() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {recentTrips.map((trip) => (
        <TouchableOpacity key={trip.id} style={styles.tripCard}>
          <Image source={{ uri: trip.image }} style={styles.tripImage} />
          <View style={styles.tripInfo}>
            <Text style={styles.tripTitle}>{trip.title}</Text>
            <View style={styles.tripMeta}>
              <Text style={styles.tripDays}>{trip.days} days</Text>
              <View style={styles.typeBadge}>
                <Text style={styles.tripType}>{trip.type}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: SPACING.sm,
  },
  contentContainer: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.md,
  },
  tripCard: {
    width: 250,
    height: 180,
    marginRight: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    ...SHADOWS.medium,
  },
  tripImage: {
    width: '100%',
    height: 120,
  },
  tripInfo: {
    padding: SPACING.sm,
  },
  tripTitle: {
    fontSize: FONT.sizes.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  tripMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tripDays: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  typeBadge: {
    backgroundColor: COLORS.primaryLight,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 2,
    borderRadius: BORDER_RADIUS.sm,
  },
  tripType: {
    fontSize: FONT.sizes.xs,
    color: COLORS.background,
    fontWeight: '500',
  },
});