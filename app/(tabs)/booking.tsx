import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import Header from '@/components/ui/Header';
import { Bed, MapPin, Calendar, Users, Star } from 'lucide-react-native';

const categories = [
  { id: 'hotel', label: 'Hotel', icon: Bed },
  { id: 'camp', label: 'Camp', icon: MapPin },
  { id: 'event', label: 'Events', icon: Calendar },
  { id: 'car', label: 'Car Rental', icon: Users },
  { id: 'restaurant', label: 'Restaurants', icon: Star },
];

// Mock data for hotels
const hotels = [
  {
    id: '1',
    name: 'Blue Sky Hotel',
    location: 'Ulaanbaatar',
    rating: 4.8,
    price: 120,
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
  },
  {
    id: '2',
    name: 'Gobi Desert Lodge',
    location: 'South Gobi',
    rating: 4.6,
    price: 95,
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
  },
  {
    id: '3',
    name: 'Khuvsgul Lake Resort',
    location: 'Khuvsgul Province',
    rating: 4.9,
    price: 150,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
  },
];

export default function BookingScreen() {
  const [selectedCategory, setSelectedCategory] = useState('hotel');

  return (
    <View style={styles.container}>
      <Header title="Booking" />
      
      <View style={styles.categoriesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContent}>
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.id && styles.selectedCategory,
                ]}
                onPress={() => setSelectedCategory(category.id)}
              >
                <IconComponent 
                  size={20} 
                  color={selectedCategory === category.id ? COLORS.background : COLORS.textPrimary} 
                />
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category.id && styles.selectedCategoryText,
                  ]}
                >
                  {category.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>Search for {selectedCategory}s</Text>
        </View>
        
        <Text style={styles.sectionTitle}>
          {selectedCategory === 'hotel' ? 'Popular Hotels' : 
           selectedCategory === 'camp' ? 'Ger Camps' : 
           selectedCategory === 'event' ? 'Upcoming Events' : 
           selectedCategory === 'car' ? 'Available Vehicles' : 'Top Restaurants'}
        </Text>
        
        {selectedCategory === 'hotel' && (
          <View style={styles.listContainer}>
            {hotels.map((hotel) => (
              <TouchableOpacity key={hotel.id} style={styles.hotelCard}>
                <Image source={{ uri: hotel.image }} style={styles.hotelImage} />
                <View style={styles.hotelInfo}>
                  <Text style={styles.hotelName}>{hotel.name}</Text>
                  <Text style={styles.hotelLocation}>
                    <MapPin size={14} color={COLORS.textSecondary} /> {hotel.location}
                  </Text>
                  <View style={styles.hotelDetails}>
                    <View style={styles.ratingContainer}>
                      <Star size={14} color={COLORS.warning} fill={COLORS.warning} />
                      <Text style={styles.rating}>{hotel.rating}</Text>
                    </View>
                    <Text style={styles.price}>${hotel.price}/night</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {selectedCategory !== 'hotel' && (
          <View style={styles.comingSoonContainer}>
            <Text style={styles.comingSoonText}>
              This feature is coming soon! Stay tuned for more options.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  categoriesContainer: {
    paddingVertical: SPACING.sm,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  categoriesContent: {
    paddingHorizontal: SPACING.md,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    marginRight: SPACING.sm,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.card,
    ...SHADOWS.small,
  },
  selectedCategory: {
    backgroundColor: COLORS.primary,
  },
  categoryText: {
    fontSize: FONT.sizes.sm,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginLeft: SPACING.xs,
  },
  selectedCategoryText: {
    color: COLORS.background,
  },
  content: {
    flex: 1,
    padding: SPACING.md,
  },
  searchBar: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.md,
    padding: SPACING.md,
    marginBottom: SPACING.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  searchPlaceholder: {
    color: COLORS.textSecondary,
    fontSize: FONT.sizes.md,
  },
  sectionTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    marginBottom: SPACING.md,
    color: COLORS.textPrimary,
  },
  listContainer: {
    gap: SPACING.md,
  },
  hotelCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
    marginBottom: SPACING.md,
  },
  hotelImage: {
    width: '100%',
    height: 150,
  },
  hotelInfo: {
    padding: SPACING.md,
  },
  hotelName: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  hotelLocation: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hotelDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: FONT.sizes.sm,
    fontWeight: '500',
    color: COLORS.textPrimary,
    marginLeft: SPACING.xs,
  },
  price: {
    fontSize: FONT.sizes.md,
    fontWeight: '700',
    color: COLORS.primary,
  },
  comingSoonContainer: {
    padding: SPACING.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  comingSoonText: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
});