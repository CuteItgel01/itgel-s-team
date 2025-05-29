import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import { User, Users, Heart, TreePalm as Palmtree } from 'lucide-react-native';

export default function TravelerTypeScreen() {
  const handleTypeSelect = (type: string) => {
    router.push('/trip-planning/budget');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What type of traveler are you?</Text>
        <Text style={styles.subtitle}>
          This helps us customize your travel experience
        </Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.typeCard} 
          onPress={() => handleTypeSelect('solo')}
        >
          <View style={styles.iconContainer}>
            <User size={28} color={COLORS.primary} />
          </View>
          <View style={styles.typeInfo}>
            <Text style={styles.typeTitle}>Solo Traveler</Text>
            <Text style={styles.typeDescription}>
              Freedom to explore at your own pace
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.typeCard} 
          onPress={() => handleTypeSelect('couple')}
        >
          <View style={styles.iconContainer}>
            <Heart size={28} color={COLORS.primary} />
          </View>
          <View style={styles.typeInfo}>
            <Text style={styles.typeTitle}>Couple</Text>
            <Text style={styles.typeDescription}>
              Romantic experiences and private moments
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.typeCard} 
          onPress={() => handleTypeSelect('family')}
        >
          <View style={styles.iconContainer}>
            <Users size={28} color={COLORS.primary} />
          </View>
          <View style={styles.typeInfo}>
            <Text style={styles.typeTitle}>Family</Text>
            <Text style={styles.typeDescription}>
              Kid-friendly activities and accommodations
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.typeCard} 
          onPress={() => handleTypeSelect('friends')}
        >
          <View style={styles.iconContainer}>
            <Palmtree size={28} color={COLORS.primary} />
          </View>
          <View style={styles.typeInfo}>
            <Text style={styles.typeTitle}>Friends</Text>
            <Text style={styles.typeDescription}>
              Group activities and shared experiences
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back</Text>
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
  header: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
  },
  title: {
    fontSize: FONT.sizes.xxl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  subtitle: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  typeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: 'rgba(255, 107, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  typeInfo: {
    flex: 1,
  },
  typeTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  typeDescription: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  footer: {
    padding: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  backButton: {
    padding: SPACING.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
  },
  backButtonText: {
    color: COLORS.textPrimary,
    fontWeight: '500',
  },
});