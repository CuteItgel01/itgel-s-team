import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import { DollarSign } from 'lucide-react-native';

export default function BudgetScreen() {
  const handleBudgetSelect = (budget: string) => {
    router.push('/trip-planning/dates');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>What's your budget?</Text>
        <Text style={styles.subtitle}>
          Select a budget range for your Mongolia trip
        </Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.budgetCard} 
          onPress={() => handleBudgetSelect('budget')}
        >
          <View style={styles.budgetHeader}>
            <View style={styles.iconContainer}>
              <DollarSign size={24} color={COLORS.background} />
            </View>
            <Text style={styles.budgetTitle}>Budget</Text>
          </View>
          <View style={styles.budgetDetails}>
            <Text style={styles.budgetPrice}>$30-80/day</Text>
            <Text style={styles.budgetDescription}>
              Hostels, local food, public transportation
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.budgetCard} 
          onPress={() => handleBudgetSelect('mid')}
        >
          <View style={styles.budgetHeader}>
            <View style={[styles.iconContainer, { backgroundColor: '#4CAF50' }]}>
              <Text style={styles.dollarSign}>$$</Text>
            </View>
            <Text style={styles.budgetTitle}>Mid-Range</Text>
          </View>
          <View style={styles.budgetDetails}>
            <Text style={styles.budgetPrice}>$80-150/day</Text>
            <Text style={styles.budgetDescription}>
              3-star hotels, restaurants, guided tours
            </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.budgetCard} 
          onPress={() => handleBudgetSelect('luxury')}
        >
          <View style={styles.budgetHeader}>
            <View style={[styles.iconContainer, { backgroundColor: '#6F42C1' }]}>
              <Text style={styles.dollarSign}>$$$</Text>
            </View>
            <Text style={styles.budgetTitle}>Luxury</Text>
          </View>
          <View style={styles.budgetDetails}>
            <Text style={styles.budgetPrice}>$150+/day</Text>
            <Text style={styles.budgetDescription}>
              4-5 star hotels, fine dining, private guides
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
  budgetCard: {
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.lg,
    overflow: 'hidden',
    ...SHADOWS.medium,
  },
  budgetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    padding: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  dollarSign: {
    color: COLORS.background,
    fontSize: FONT.sizes.md,
    fontWeight: '700',
  },
  budgetTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  budgetDetails: {
    padding: SPACING.lg,
  },
  budgetPrice: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    color: COLORS.primary,
    marginBottom: SPACING.sm,
  },
  budgetDescription: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    lineHeight: 22,
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