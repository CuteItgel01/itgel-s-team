import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, BORDER_RADIUS, FONT, SPACING } from '@/constants/theme';

// This is a simplified mock of the Mongolia provinces map
// In a real implementation, you would use a proper SVG map or a mapping library

type ProvinceProps = {
  onProvinceSelect: (provinceName: string) => void;
};

export default function ProvinceMap({ onProvinceSelect }: ProvinceProps) {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  
  // Mock data for Mongolia provinces
  const provinces = [
    { id: '1', name: 'Ulaanbaatar', top: 40, left: 50 },
    { id: '2', name: 'Khövsgöl', top: 10, left: 30 },
    { id: '3', name: 'Gobi', top: 70, left: 60 },
    { id: '4', name: 'Arkhangai', top: 30, left: 40 },
    { id: '5', name: 'Bayan-Ölgii', top: 20, left: 10 },
    { id: '6', name: 'Selenge', top: 20, left: 60 },
  ];

  const handleProvincePress = (provinceName: string) => {
    setSelectedProvince(provinceName);
    onProvinceSelect(provinceName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mapTitle}>Interactive Map</Text>
      <Text style={styles.mapSubtitle}>Tap on a province to learn more</Text>
      
      <View style={styles.mapContainer}>
        {provinces.map((province) => (
          <TouchableOpacity
            key={province.id}
            style={[
              styles.province,
              {
                top: `${province.top}%`,
                left: `${province.left}%`,
              },
              selectedProvince === province.name && styles.selectedProvince,
            ]}
            onPress={() => handleProvincePress(province.name)}
          >
            <View style={styles.provinceMarker} />
            <Text style={styles.provinceName}>{province.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <Text style={styles.disclaimer}>
        * This is a simplified representation. In a production app, use a detailed SVG map of Mongolia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  mapTitle: {
    fontSize: FONT.sizes.lg,
    fontWeight: '600',
    marginBottom: SPACING.xs,
    color: COLORS.textPrimary,
    alignSelf: 'center',
  },
  mapSubtitle: {
    fontSize: FONT.sizes.sm,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    alignSelf: 'center',
  },
  mapContainer: {
    width: '100%',
    height: 180,
    position: 'relative',
    backgroundColor: '#F5F5F5',
    borderRadius: BORDER_RADIUS.md,
  },
  province: {
    position: 'absolute',
    alignItems: 'center',
  },
  selectedProvince: {
    zIndex: 2,
  },
  provinceMarker: {
    width: 12,
    height: 12,
    borderRadius: BORDER_RADIUS.round,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: 'white',
  },
  provinceName: {
    fontSize: FONT.sizes.xs,
    marginTop: 2,
    color: COLORS.textPrimary,
    fontWeight: '500',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 4,
    borderRadius: BORDER_RADIUS.sm,
  },
  disclaimer: {
    fontSize: FONT.sizes.xs,
    color: COLORS.textSecondary,
    marginTop: SPACING.md,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});