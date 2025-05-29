import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { Plus } from 'lucide-react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import Header from '@/components/ui/Header';
import ProvinceMap from '@/components/home/ProvinceMap';
import RecentTrips from '@/components/home/RecentTrips';

export default function HomeScreen() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);

  const handleProvinceSelect = (provinceName: string) => {
    setSelectedProvince(provinceName);
  };

  const startTripPlanning = () => {
    router.push('/trip-planning/traveler-type');
  };

  return (
    <View style={styles.container}>
      <Header 
        title="Build your trip plan" 
        rightElement={
          <TouchableOpacity style={styles.addButton} onPress={startTripPlanning}>
            <Plus color={COLORS.background} size={24} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeCard}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/3758269/pexels-photo-3758269.jpeg' }} 
            style={styles.welcomeImage}
          />
          <View style={styles.welcomeOverlay}>
            <Text style={styles.welcomeTitle}>Discover Mongolia</Text>
            <Text style={styles.welcomeSubtitle}>Land of the Eternal Blue Sky</Text>
            <TouchableOpacity style={styles.exploreButton} onPress={startTripPlanning}>
              <Text style={styles.exploreButtonText}>Start Planning</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>Explore Provinces</Text>
        <View style={styles.mapContainer}>
          <ProvinceMap onProvinceSelect={handleProvinceSelect} />
        </View>
        
        {selectedProvince && (
          <View style={styles.provinceInfoCard}>
            <Text style={styles.provinceTitle}>{selectedProvince}</Text>
            <Text style={styles.provinceDescription}>
              Explore the unique culture, breathtaking landscapes, and rich history of {selectedProvince}.
            </Text>
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn More</Text>
            </TouchableOpacity>
          </View>
        )}
        
        <Text style={styles.sectionTitle}>Recent Trips</Text>
        <RecentTrips />
        
        <View style={styles.spacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.round,
    justifyContent: 'center',
    alignItems: 'center',
    ...SHADOWS.small,
  },
  welcomeCard: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    height: 200,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  welcomeOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.lg,
  },
  welcomeTitle: {
    color: COLORS.background,
    fontSize: FONT.sizes.xxxl,
    fontWeight: '700',
    marginBottom: SPACING.xs,
  },
  welcomeSubtitle: {
    color: COLORS.background,
    fontSize: FONT.sizes.md,
    marginBottom: SPACING.md,
  },
  exploreButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
  },
  exploreButtonText: {
    color: COLORS.background,
    fontSize: FONT.sizes.md,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    marginHorizontal: SPACING.md,
    marginTop: SPACING.xl,
    marginBottom: SPACING.md,
    color: COLORS.textPrimary,
  },
  mapContainer: {
    marginHorizontal: SPACING.md,
    height: 250,
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.small,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  provinceInfoCard: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.md,
    padding: SPACING.lg,
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.small,
  },
  provinceTitle: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    marginBottom: SPACING.sm,
    color: COLORS.textPrimary,
  },
  provinceDescription: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    lineHeight: 22,
  },
  learnMoreButton: {
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    color: COLORS.primary,
    fontSize: FONT.sizes.md,
    fontWeight: '600',
  },
  spacer: {
    height: SPACING.xl,
  },
});