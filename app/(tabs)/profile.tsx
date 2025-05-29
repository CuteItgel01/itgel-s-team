import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, Switch } from 'react-native';
import { COLORS, SPACING, FONT, SHADOWS, BORDER_RADIUS } from '@/constants/theme';
import Header from '@/components/ui/Header';
import { Settings, Moon, Globe, LogOut, Camera, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';

export default function ProfileScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <View style={styles.container}>
      <Header title="Profile" />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }} 
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.cameraButton}>
              <Camera size={16} color={COLORS.background} />
            </TouchableOpacity>
          </View>
          <Text style={styles.profileName}>John Smith</Text>
          <Text style={styles.profileEmail}>john.smith@example.com</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Trips</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Memories</Text>
          </View>
        </View>
        
        <Text style={styles.sectionTitle}>My Memories</Text>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.memoriesContainer}
        >
          {[1, 2, 3, 4].map((item) => (
            <TouchableOpacity key={item} style={styles.memoryCard}>
              <Image 
                source={{ uri: `https://images.pexels.com/photos/33${item}0517/pexels-photo-33${item}0517.jpeg` }} 
                style={styles.memoryImage}
              />
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addMemoryCard}>
            <Camera size={24} color={COLORS.textSecondary} />
            <Text style={styles.addMemoryText}>Add New</Text>
          </TouchableOpacity>
        </ScrollView>
        
        <Text style={styles.sectionTitle}>Settings</Text>
        <View style={styles.settingsCard}>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIconContainer}>
                <Moon size={20} color={COLORS.background} />
              </View>
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{ false: '#D1D5DB', true: COLORS.primaryLight }}
              thumbColor={isDarkMode ? COLORS.primary : '#F3F4F6'}
            />
          </View>
          
          <View style={styles.settingDivider} />
          
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIconContainer}>
                <Globe size={20} color={COLORS.background} />
              </View>
              <Text style={styles.settingText}>Language</Text>
            </View>
            <View style={styles.languageSelector}>
              <TouchableOpacity 
                style={[styles.languageOption, language === 'en' && styles.activeLanguage]}
                onPress={() => setLanguage('en')}
              >
                <Text style={language === 'en' ? styles.activeLanguageText : styles.languageText}>🇬🇧 EN</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.languageOption, language === 'mn' && styles.activeLanguage]}
                onPress={() => setLanguage('mn')}
              >
                <Text style={language === 'mn' ? styles.activeLanguageText : styles.languageText}>🇲🇳 MN</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.settingDivider} />
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={styles.settingIconContainer}>
                <Settings size={20} color={COLORS.background} />
              </View>
              <Text style={styles.settingText}>Account Settings</Text>
            </View>
            <ChevronRight size={20} color={COLORS.textSecondary} />
          </TouchableOpacity>
          
          <View style={styles.settingDivider} />
          
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <View style={[styles.settingIconContainer, styles.logoutIcon]}>
                <LogOut size={20} color={COLORS.background} />
              </View>
              <Text style={styles.logoutText}>Sign Out</Text>
            </View>
          </TouchableOpacity>
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
  profileHeader: {
    alignItems: 'center',
    paddingVertical: SPACING.lg,
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: SPACING.md,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: BORDER_RADIUS.round,
    borderWidth: 3,
    borderColor: COLORS.background,
    ...SHADOWS.medium,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: COLORS.primary,
    width: 32,
    height: 32,
    borderRadius: BORDER_RADIUS.round,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  profileName: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: SPACING.xs,
  },
  profileEmail: {
    fontSize: FONT.sizes.md,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
  },
  editProfileButton: {
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.lg,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  editProfileText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.lg,
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    padding: SPACING.md,
    ...SHADOWS.small,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: FONT.sizes.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  statLabel: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.border,
  },
  sectionTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '700',
    marginHorizontal: SPACING.md,
    marginBottom: SPACING.md,
    marginTop: SPACING.lg,
    color: COLORS.textPrimary,
  },
  memoriesContainer: {
    paddingHorizontal: SPACING.md,
  },
  memoryCard: {
    width: 120,
    height: 120,
    borderRadius: BORDER_RADIUS.md,
    marginRight: SPACING.md,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  memoryImage: {
    width: '100%',
    height: '100%',
  },
  addMemoryCard: {
    width: 120,
    height: 120,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: COLORS.border,
  },
  addMemoryText: {
    marginTop: SPACING.xs,
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
  },
  settingsCard: {
    marginHorizontal: SPACING.md,
    backgroundColor: COLORS.card,
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS.small,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SPACING.md,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIconContainer: {
    width: 36,
    height: 36,
    borderRadius: BORDER_RADIUS.md,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  logoutIcon: {
    backgroundColor: COLORS.error,
  },
  settingText: {
    fontSize: FONT.sizes.md,
    color: COLORS.textPrimary,
  },
  logoutText: {
    fontSize: FONT.sizes.md,
    color: COLORS.error,
    fontWeight: '500',
  },
  settingDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginHorizontal: SPACING.md,
  },
  languageSelector: {
    flexDirection: 'row',
  },
  languageOption: {
    paddingHorizontal: SPACING.sm,
    paddingVertical: SPACING.xs,
    borderRadius: BORDER_RADIUS.sm,
    marginLeft: SPACING.xs,
  },
  activeLanguage: {
    backgroundColor: COLORS.primary,
  },
  languageText: {
    color: COLORS.textPrimary,
  },
  activeLanguageText: {
    color: COLORS.background,
    fontWeight: '500',
  },
  spacer: {
    height: SPACING.xl,
  },
});