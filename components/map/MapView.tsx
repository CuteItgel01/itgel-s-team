import { StyleSheet, View, Text, Image } from 'react-native';
import { COLORS, SPACING, FONT, BORDER_RADIUS } from '@/constants/theme';

type MapViewProps = {
  selectedCategory: string | null;
};

export default function MapView({ selectedCategory }: MapViewProps) {
  return (
    <View style={styles.container}>
      {/* This would be a real map implementation in a production app */}
      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapPlaceholderText}>
          Mongolia Map View
          {selectedCategory && ` - Showing ${selectedCategory}`}
        </Text>
        <Text style={styles.implementationNote}>
          In a production app, this would be implemented with react-native-maps
          or a similar mapping library that works with your GPS coordinates.
        </Text>
        
        {/* Mock map pins */}
        <View style={[styles.mapPin, { top: '30%', left: '40%' }]}>
          <View style={styles.pinHead} />
          <View style={styles.pinPoint} />
        </View>
        <View style={[styles.mapPin, { top: '50%', left: '60%' }]}>
          <View style={styles.pinHead} />
          <View style={styles.pinPoint} />
        </View>
        <View style={[styles.mapPin, { top: '60%', left: '30%' }]}>
          <View style={styles.pinHead} />
          <View style={styles.pinPoint} />
        </View>
        
        {/* Current location indicator */}
        <View style={styles.currentLocation}>
          <View style={styles.currentLocationInner} />
        </View>
      </View>
      
      {/* Map overlay information */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          {selectedCategory 
            ? `Nearby ${selectedCategory}` 
            : 'Select a category above'}
        </Text>
        {selectedCategory && (
          <Text style={styles.infoSubtitle}>
            Tap on a pin to see details and get directions
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8EEF4',
  },
  mapPlaceholderText: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  implementationNote: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.sm,
    paddingHorizontal: SPACING.xl,
  },
  mapPin: {
    position: 'absolute',
    alignItems: 'center',
  },
  pinHead: {
    width: 16,
    height: 16,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  pinPoint: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: COLORS.primary,
    marginTop: -2,
  },
  currentLocation: {
    position: 'absolute',
    bottom: '30%',
    right: '40%',
    width: 24,
    height: 24,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: 'rgba(59, 130, 246, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentLocationInner: {
    width: 12,
    height: 12,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: '#3B82F6',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  infoCard: {
    position: 'absolute',
    bottom: SPACING.xl,
    left: SPACING.md,
    right: SPACING.md,
    backgroundColor: COLORS.background,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  infoSubtitle: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
});