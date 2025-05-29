import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import { Calendar, Map, Bed, Utensils, CircleCheck as CheckCircle } from 'lucide-react-native';

export default function ItineraryScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('itinerary');

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingContent}>
          <Text style={styles.loadingTitle}>Creating Your Perfect Trip</Text>
          <Text style={styles.loadingSubtitle}>
            Planning a personalized Mongolia adventure...
          </Text>
          <View style={styles.loadingBar}>
            <View style={styles.loadingProgress} />
          </View>
          <Text style={styles.loadingDetails}>
            Finding the best destinations, accommodations, and experiences
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Mongolia Itinerary</Text>
        <TouchableOpacity 
          style={styles.saveButton}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.saveButtonText}>Save Trip</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, currentTab === 'itinerary' && styles.activeTab]}
          onPress={() => setCurrentTab('itinerary')}
        >
          <Calendar size={18} color={currentTab === 'itinerary' ? COLORS.primary : COLORS.textSecondary} />
          <Text style={[styles.tabText, currentTab === 'itinerary' && styles.activeTabText]}>
            Itinerary
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, currentTab === 'places' && styles.activeTab]}
          onPress={() => setCurrentTab('places')}
        >
          <Map size={18} color={currentTab === 'places' ? COLORS.primary : COLORS.textSecondary} />
          <Text style={[styles.tabText, currentTab === 'places' && styles.activeTabText]}>
            Places
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, currentTab === 'accommodation' && styles.activeTab]}
          onPress={() => setCurrentTab('accommodation')}
        >
          <Bed size={18} color={currentTab === 'accommodation' ? COLORS.primary : COLORS.textSecondary} />
          <Text style={[styles.tabText, currentTab === 'accommodation' && styles.activeTabText]}>
            Stay
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {currentTab === 'itinerary' && (
          <View>
            <View style={styles.dayCard}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayTitle}>Day 1</Text>
                <Text style={styles.dayDate}>June 15, 2023</Text>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>08:00</Text>
                  <View style={styles.timeLine} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Arrival in Ulaanbaatar</Text>
                  <Text style={styles.activityDescription}>
                    Arrive at Chinggis Khaan International Airport. Transfer to your hotel and rest.
                  </Text>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>12:00</Text>
                  <View style={styles.timeLine} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Lunch at Modern Nomads</Text>
                  <Text style={styles.activityDescription}>
                    Traditional Mongolian cuisine with a contemporary twist.
                  </Text>
                  <View style={styles.activityTags}>
                    <View style={styles.activityTag}>
                      <Utensils size={12} color={COLORS.primary} />
                      <Text style={styles.tagText}>Restaurant</Text>
                    </View>
                  </View>
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>14:00</Text>
                  <View style={styles.timeLine} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Genghis Khan Square</Text>
                  <Text style={styles.activityDescription}>
                    Visit the central square and the parliament building.
                  </Text>
                  <Image 
                    source={{ uri: 'https://images.pexels.com/photos/3319960/pexels-photo-3319960.jpeg' }}
                    style={styles.activityImage}
                  />
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>18:00</Text>
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Dinner & Rest</Text>
                  <Text style={styles.activityDescription}>
                    Dinner at the hotel restaurant followed by rest.
                  </Text>
                </View>
              </View>
            </View>
            
            <View style={styles.dayCard}>
              <View style={styles.dayHeader}>
                <Text style={styles.dayTitle}>Day 2</Text>
                <Text style={styles.dayDate}>June 16, 2023</Text>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>09:00</Text>
                  <View style={styles.timeLine} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>Gandan Monastery</Text>
                  <Text style={styles.activityDescription}>
                    Visit Mongolia's largest functioning Buddhist monastery.
                  </Text>
                  <Image 
                    source={{ uri: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg' }}
                    style={styles.activityImage}
                  />
                </View>
              </View>
              
              <View style={styles.activityItem}>
                <View style={styles.activityTime}>
                  <Text style={styles.timeText}>12:30</Text>
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>National History Museum</Text>
                  <Text style={styles.activityDescription}>
                    Explore Mongolia's rich history from prehistoric times to the present day.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        
        {currentTab === 'places' && (
          <View style={styles.placesContainer}>
            <TouchableOpacity style={styles.placeCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/3876334/pexels-photo-3876334.jpeg' }}
                style={styles.placeImage}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeTitle}>Gobi Desert</Text>
                <Text style={styles.placeDescription}>
                  Mongolia's largest desert with stunning landscapes, dinosaur fossils, and nomadic communities.
                </Text>
                <View style={styles.placeDetails}>
                  <Text style={styles.placeHighlight}>3 days in your itinerary</Text>
                  <CheckCircle size={16} color={COLORS.success} />
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.placeCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg' }}
                style={styles.placeImage}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeTitle}>Khuvsgul Lake</Text>
                <Text style={styles.placeDescription}>
                  Crystal clear freshwater lake surrounded by mountains and forests.
                </Text>
                <View style={styles.placeDetails}>
                  <Text style={styles.placeHighlight}>2 days in your itinerary</Text>
                  <CheckCircle size={16} color={COLORS.success} />
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.placeCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/4502973/pexels-photo-4502973.jpeg' }}
                style={styles.placeImage}
              />
              <View style={styles.placeInfo}>
                <Text style={styles.placeTitle}>Terelj National Park</Text>
                <Text style={styles.placeDescription}>
                  Beautiful landscapes with unique rock formations, hiking trails, and traditional ger camps.
                </Text>
                <View style={styles.placeDetails}>
                  <Text style={styles.placeHighlight}>1 day in your itinerary</Text>
                  <CheckCircle size={16} color={COLORS.success} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        
        {currentTab === 'accommodation' && (
          <View style={styles.accommodationContainer}>
            <TouchableOpacity style={styles.accommodationCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg' }}
                style={styles.accommodationImage}
              />
              <View style={styles.accommodationInfo}>
                <Text style={styles.accommodationTitle}>Blue Sky Hotel</Text>
                <Text style={styles.accommodationLocation}>Ulaanbaatar</Text>
                <Text style={styles.accommodationDescription}>
                  Luxury hotel in the heart of the city with modern amenities.
                </Text>
                <View style={styles.accommodationDetails}>
                  <Text style={styles.accommodationNights}>2 nights</Text>
                  <Text style={styles.accommodationPrice}>$120/night</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.accommodationCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/6077110/pexels-photo-6077110.jpeg' }}
                style={styles.accommodationImage}
              />
              <View style={styles.accommodationInfo}>
                <Text style={styles.accommodationTitle}>Traditional Ger Camp</Text>
                <Text style={styles.accommodationLocation}>Gobi Desert</Text>
                <Text style={styles.accommodationDescription}>
                  Authentic Mongolian ger experience with modern comforts.
                </Text>
                <View style={styles.accommodationDetails}>
                  <Text style={styles.accommodationNights}>3 nights</Text>
                  <Text style={styles.accommodationPrice}>$95/night</Text>
                </View>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.accommodationCard}>
              <Image 
                source={{ uri: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg' }}
                style={styles.accommodationImage}
              />
              <View style={styles.accommodationInfo}>
                <Text style={styles.accommodationTitle}>Khuvsgul Lake Resort</Text>
                <Text style={styles.accommodationLocation}>Khuvsgul Province</Text>
                <Text style={styles.accommodationDescription}>
                  Waterfront cabins with stunning views of the lake and mountains.
                </Text>
                <View style={styles.accommodationDetails}>
                  <Text style={styles.accommodationNights}>2 nights</Text>
                  <Text style={styles.accommodationPrice}>$150/night</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        
        <View style={styles.spacer} />
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.completeButton}
          onPress={() => router.push('/(tabs)')}
        >
          <Text style={styles.completeButtonText}>Complete Planning</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 60,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SPACING.xl,
  },
  loadingContent: {
    width: '100%',
    alignItems: 'center',
  },
  loadingTitle: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  loadingSubtitle: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xl,
    textAlign: 'center',
  },
  loadingBar: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255, 107, 0, 0.2)',
    borderRadius: BORDER_RADIUS.round,
    marginBottom: SPACING.xl,
    overflow: 'hidden',
  },
  loadingProgress: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.round,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  loadingDetails: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
  },
  title: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.md,
    borderRadius: BORDER_RADIUS.md,
  },
  saveButtonText: {
    color: COLORS.background,
    fontWeight: '600',
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.lg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    marginBottom: SPACING.md,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.md,
    marginRight: SPACING.xl,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  tabText: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginLeft: SPACING.xs,
  },
  activeTabText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  dayCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    padding: SPACING.md,
    ...SHADOWS.small,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
    paddingBottom: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  dayTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  dayDate: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  activityItem: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  activityTime: {
    width: 50,
    alignItems: 'flex-start',
  },
  timeText: {
    fontSize: FONT.sizes.sm,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  timeLine: {
    width: 1,
    flex: 1,
    backgroundColor: COLORS.border,
    marginLeft: 24,
    marginTop: 4,
  },
  activityContent: {
    flex: 1,
    marginLeft: SPACING.sm,
  },
  activityTitle: {
    fontSize: FONT.sizes.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  activityDescription: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  activityImage: {
    width: '100%',
    height: 150,
    borderRadius: BORDER_RADIUS.md,
    marginBottom: SPACING.sm,
  },
  activityTags: {
    flexDirection: 'row',
  },
  activityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
    paddingVertical: 4,
    paddingHorizontal: SPACING.sm,
    borderRadius: BORDER_RADIUS.sm,
    marginRight: SPACING.sm,
  },
  tagText: {
    fontSize: FONT.sizes.xs,
    color: COLORS.primary,
    marginLeft: 4,
  },
  placesContainer: {
    gap: SPACING.md,
  },
  placeCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  placeImage: {
    width: '100%',
    height: 180,
  },
  placeInfo: {
    padding: SPACING.md,
  },
  placeTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  placeDescription: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    lineHeight: 22,
  },
  placeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeHighlight: {
    fontSize: FONT.sizes.sm,
    fontWeight: '600',
    color: COLORS.primary,
  },
  accommodationContainer: {
    gap: SPACING.md,
  },
  accommodationCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  accommodationImage: {
    width: '100%',
    height: 180,
  },
  accommodationInfo: {
    padding: SPACING.md,
  },
  accommodationTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  accommodationLocation: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
  },
  accommodationDescription: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    lineHeight: 22,
  },
  accommodationDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accommodationNights: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  accommodationPrice: {
    fontSize: FONT.sizes.md,
    fontWeight: '700',
    color: COLORS.primary,
  },
  spacer: {
    height: SPACING.xl,
  },
  footer: {
    flexDirection: 'row',
    padding: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  backButton: {
    flex: 1,
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    marginRight: SPACING.md,
  },
  backButtonText: {
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
  completeButton: {
    flex: 2,
    padding: SPACING.md,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
  },
  completeButtonText: {
    color: COLORS.background,
    fontWeight: '600',
  },
});