import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react-native';

// Mock calendar helper functions
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export default function DatesScreen() {
  const [selectedStartDate, setSelectedStartDate] = useState<string | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleDateSelect = (day: number) => {
    const dateString = `${currentYear}-${currentMonth + 1}-${day}`;
    
    if (!selectedStartDate) {
      setSelectedStartDate(dateString);
    } else if (!selectedEndDate) {
      // Ensure end date is after start date
      const startDate = new Date(selectedStartDate);
      const endDate = new Date(dateString);
      
      if (endDate > startDate) {
        setSelectedEndDate(dateString);
      } else {
        setSelectedEndDate(selectedStartDate);
        setSelectedStartDate(dateString);
      }
    } else {
      // Reset and start new selection
      setSelectedStartDate(dateString);
      setSelectedEndDate(null);
    }
  };

  const isDateSelected = (day: number) => {
    const dateString = `${currentYear}-${currentMonth + 1}-${day}`;
    return dateString === selectedStartDate || dateString === selectedEndDate;
  };

  const isDateInRange = (day: number) => {
    if (!selectedStartDate || !selectedEndDate) return false;
    
    const dateString = `${currentYear}-${currentMonth + 1}-${day}`;
    const date = new Date(dateString);
    const start = new Date(selectedStartDate);
    const end = new Date(selectedEndDate);
    
    return date > start && date < end;
  };

  const formatDisplayDate = (dateString: string | null) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const navigateMonth = (increment: number) => {
    let newMonth = currentMonth + increment;
    let newYear = currentYear;
    
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    } else if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<View key={`empty-${i}`} style={styles.calendarDay} />);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isDateSelected(day);
      const isInRange = isDateInRange(day);
      
      days.push(
        <TouchableOpacity
          key={`day-${day}`}
          style={[
            styles.calendarDay,
            isSelected && styles.selectedDay,
            isInRange && styles.rangeDay,
          ]}
          onPress={() => handleDateSelect(day)}
        >
          <Text
            style={[
              styles.calendarDayText,
              isSelected && styles.selectedDayText,
              isInRange && styles.rangeDayText,
            ]}
          >
            {day}
          </Text>
        </TouchableOpacity>
      );
    }
    
    return days;
  };

  const handleContinue = () => {
    if (selectedStartDate && selectedEndDate) {
      router.push('/trip-planning/itinerary');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>When are you traveling?</Text>
        <Text style={styles.subtitle}>
          Select your travel dates for Mongolia
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.calendarHeader}>
          <TouchableOpacity onPress={() => navigateMonth(-1)}>
            <ChevronLeft size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
          <Text style={styles.calendarTitle}>
            {monthNames[currentMonth]} {currentYear}
          </Text>
          <TouchableOpacity onPress={() => navigateMonth(1)}>
            <ChevronRight size={24} color={COLORS.textPrimary} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.weekDaysContainer}>
          {weekDays.map((day) => (
            <View key={day} style={styles.weekDay}>
              <Text style={styles.weekDayText}>{day}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.calendarGrid}>
          {generateCalendarDays()}
        </View>
        
        <View style={styles.selectedDatesContainer}>
          <View style={styles.dateInfoContainer}>
            <Text style={styles.dateInfoLabel}>Start Date</Text>
            <Text style={styles.dateInfoValue}>
              {selectedStartDate ? formatDisplayDate(selectedStartDate) : 'Select a date'}
            </Text>
          </View>
          
          <View style={styles.dateInfoContainer}>
            <Text style={styles.dateInfoLabel}>End Date</Text>
            <Text style={styles.dateInfoValue}>
              {selectedEndDate ? formatDisplayDate(selectedEndDate) : 'Select a date'}
            </Text>
          </View>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[
            styles.continueButton,
            (!selectedStartDate || !selectedEndDate) && styles.disabledButton,
          ]} 
          onPress={handleContinue}
          disabled={!selectedStartDate || !selectedEndDate}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
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
    marginBottom: SPACING.lg,
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
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  calendarTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: SPACING.sm,
  },
  weekDay: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: SPACING.sm,
  },
  weekDayText: {
    fontSize: FONT.sizes.sm,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
  },
  calendarDay: {
    width: `${100/7}%`,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: COLORS.border,
  },
  calendarDayText: {
    fontSize: FONT.sizes.md,
    color: COLORS.textPrimary,
  },
  selectedDay: {
    backgroundColor: COLORS.primary,
  },
  selectedDayText: {
    color: COLORS.background,
    fontWeight: '600',
  },
  rangeDay: {
    backgroundColor: 'rgba(255, 107, 0, 0.2)',
  },
  rangeDayText: {
    color: COLORS.primary,
    fontWeight: '500',
  },
  selectedDatesContainer: {
    marginTop: SPACING.xl,
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.lg,
    ...SHADOWS.small,
  },
  dateInfoContainer: {
    marginBottom: SPACING.md,
  },
  dateInfoLabel: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  dateInfoValue: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    color: COLORS.textPrimary,
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
  continueButton: {
    flex: 2,
    padding: SPACING.md,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: BORDER_RADIUS.md,
  },
  disabledButton: {
    backgroundColor: COLORS.border,
  },
  continueButtonText: {
    color: COLORS.background,
    fontWeight: '600',
  },
});