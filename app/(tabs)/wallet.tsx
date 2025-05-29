import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import Header from '@/components/ui/Header';
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownLeft } from 'lucide-react-native';

// Mock data for transactions
const transactions = [
  {
    id: '1',
    title: 'Blue Sky Hotel',
    date: 'Jun 15, 2023',
    amount: -120.00,
    type: 'Hotel Booking',
  },
  {
    id: '2',
    title: 'Wallet Top-up',
    date: 'Jun 10, 2023',
    amount: 500.00,
    type: 'Deposit',
  },
  {
    id: '3',
    title: 'Gobi Tour',
    date: 'May 28, 2023',
    amount: -85.00,
    type: 'Tour Booking',
  },
  {
    id: '4',
    title: 'Car Rental',
    date: 'May 25, 2023',
    amount: -65.00,
    type: 'Transportation',
  },
];

export default function WalletScreen() {
  return (
    <View style={styles.container}>
      <Header title="My Wallet" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>$780.00</Text>
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <CreditCard size={20} color={COLORS.background} />
              <Text style={styles.actionText}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <DollarSign size={20} color={COLORS.background} />
              <Text style={styles.actionText}>Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <TouchableOpacity style={styles.cardItem}>
            <View style={styles.cardIcon}>
              <CreditCard size={24} color={COLORS.background} />
            </View>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Visa ending in 4242</Text>
              <Text style={styles.cardExpiry}>Expires 12/25</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addCardButton}>
            <Text style={styles.addCardText}>+ Add New Payment Method</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.transactionSection}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {transactions.map((transaction) => (
            <View key={transaction.id} style={styles.transactionItem}>
              <View style={styles.transactionIcon}>
                {transaction.amount > 0 ? (
                  <ArrowDownLeft size={20} color={COLORS.success} />
                ) : (
                  <ArrowUpRight size={20} color={COLORS.error} />
                )}
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                <Text style={styles.transactionType}>{transaction.type}</Text>
              </View>
              <View style={styles.transactionAmountContainer}>
                <Text style={[
                  styles.transactionAmount,
                  transaction.amount > 0 ? styles.amountPositive : styles.amountNegative,
                ]}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
              </View>
            </View>
          ))}
        </View>
        
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
  content: {
    flex: 1,
  },
  balanceCard: {
    margin: SPACING.md,
    padding: SPACING.lg,
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.medium,
  },
  balanceLabel: {
    fontSize: FONT.sizes.md,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: SPACING.xs,
  },
  balanceAmount: {
    fontSize: FONT.sizes.xxxl,
    fontWeight: '700',
    color: COLORS.background,
    marginBottom: SPACING.md,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.md,
    flex: 0.48,
    justifyContent: 'center',
  },
  actionText: {
    color: COLORS.background,
    marginLeft: SPACING.xs,
    fontWeight: '600',
  },
  cardSection: {
    margin: SPACING.md,
    marginTop: 0,
  },
  sectionTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    marginBottom: SPACING.md,
    color: COLORS.textPrimary,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.small,
    marginBottom: SPACING.md,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: FONT.sizes.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  cardExpiry: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  addCardButton: {
    padding: SPACING.md,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCardText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  transactionSection: {
    margin: SPACING.md,
    marginTop: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: BORDER_RADIUS.lg,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: FONT.sizes.md,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  transactionType: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  transactionAmountContainer: {
    alignItems: 'flex-end',
  },
  transactionAmount: {
    fontSize: FONT.sizes.md,
    fontWeight: '700',
  },
  amountPositive: {
    color: COLORS.success,
  },
  amountNegative: {
    color: COLORS.error,
  },
  transactionDate: {
    fontSize: FONT.sizes.xs,
    color: COLORS.textSecondary,
  },
  spacer: {
    height: SPACING.xl,
  },
});