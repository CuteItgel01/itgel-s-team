import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MapPin } from 'lucide-react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import Header from '@/components/ui/Header';
import MapView from '@/components/map/MapView';

const categories = [
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'hospitals', label: 'Hospitals' },
  { id: 'police', label: 'Police' },
  { id: 'attractions', label: 'Attractions' },
  { id: 'hotels', label: 'Hotels' },
];

export default function MapScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const requestLocationPermission = () => {
    // In a real app, implement actual permission request
    setPermissionGranted(true);
  };

  return (
    <View style={styles.container}>
      <Header title="Explore Map" />
      
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContent}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryButton,
                selectedCategory === category.id && styles.selectedCategory,
              ]}
              onPress={() => handleCategoryPress(category.id)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category.id && styles.selectedCategoryText,
                ]}
              >
                {category.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      
      <View style={styles.mapContainer}>
        {!permissionGranted ? (
          <View style={styles.permissionContainer}>
            <MapPin size={48} color={COLORS.primary} />
            <Text style={styles.permissionTitle}>Location Access Required</Text>
            <Text style={styles.permissionText}>
              We need your permission to show nearby places and provide directions.
            </Text>
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={requestLocationPermission}
            >
              <Text style={styles.permissionButtonText}>Grant Permission</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <MapView selectedCategory={selectedCategory} />
        )}
      </View>
    </View>
  );
}

import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoriesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  categoriesContent: {
    paddingHorizontal: SPACING.md,
  },
  categoryButton: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginRight: SPACING.sm,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    ...SHADOWS.small,
  },
  selectedCategory: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    fontSize: FONT.sizes.sm,
    fontWeight: '500',
    color: COLORS.textPrimary,
  },
  selectedCategoryText: {
    color: COLORS.background,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#E8EEF4',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  permissionTitle: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  permissionText: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  permissionButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: BORDER_RADIUS.md,
    ...SHADOWS.small,
  },
  permissionButtonText: {
    color: COLORS.background,
    fontSize: FONT.sizes.md,
    fontWeight: '600',
  },
});