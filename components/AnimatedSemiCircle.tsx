import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart } from "react-native-gifted-charts";

interface PieDataPoint {
  value: number;
  color: string;
  text: string;
}

interface LegendItemProps {
  color: string;
  label: string;
  theme: 'light' | 'dark';
}

const AnimatedSemiCircle: React.FC = () => {
  const theme = useColorScheme() ?? 'light';
  const pieData: PieDataPoint[] = [
    { value: 80, color: Colors.light.focusText, text: '10%' },
    { value: 4, color: 'transparent', text: '' },
    { value: 110, color: Colors.light.lightBlue, text: '11%' },
    { value: 4, color: 'transparent', text: '' },
    { value: 200, color: '#3299FF', text: '79%' },
  ];

  return (
    <View style={styles.container}>
      <PieChart
        data={pieData}
        semiCircle
        isAnimated
        animationDuration={1000}
        initialAngle={300}
        radius={120}
        showText
        textColor="white"
        textSize={18}
        fontWeight="bold"
        labelsPosition="mid"
      />

      <View style={styles.legendContainer}>
        <LegendItem color="#2563eb" label="Groceries" theme={theme} />
        <LegendItem color="#3b82f6" label="Others" theme={theme} />
      </View>
    </View>
  );
};

// Typed Legend component
const LegendItem: React.FC<LegendItemProps> = ({ color, label, theme }) => (
  <View style={styles.legendItem}>
    <View style={[styles.dot, { backgroundColor: color }]} />
    <Text style={[styles.legendText, { color: Colors[theme].text }]}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  legendContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default AnimatedSemiCircle;
