import BalanceComponent from '@/components/BalanceComponent';
import SavingsOnGoals from '@/components/SavingsOnGoals';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

const HomeScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';
    const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Weekly', icon: '' });

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary }}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View>
                    <ThemedText style={{ fontSize: 18, fontWeight: '500' }} type='title'>Hi, Welcome Back</ThemedText>
                    <ThemedText style={{ fontSize: 12, fontWeight: 'light', lineHeight: 15 }} type='subtitle'>Good Morning</ThemedText>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={20} />
                </View>
            </View>

            <BalanceComponent />

            <View style={[styles.contentContainer, { height: height * 0.55, backgroundColor: Colors[theme].secondary }]}>
                <SavingsOnGoals />

                {/* <PeriodSelector
                    options={['Daily ', 'Weekly', 'Monthly']}
                    selected={selectedPeriod}
                    onSelect={setSelectedPeriod}
                /> */}

                <SegmentedControl
                    data={[{ name: 'Daily ', icon: '' }, { name: 'Weekly', icon: '' }, { name: 'Monthly', icon: '' }]}
                    onPress={item => setSelectedPeriod(item)}
                    selected={selectedPeriod}
                    width={width - 40}
                    height={50}
                />
            </View>
        </Screen>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    headerText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacingX._20,
        paddingVertical: spacingY._5,
    },
    contentContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: spacingX._30,
        paddingTop: spacingY._40,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    iconContainer: {
        backgroundColor: Colors.light.secondaryBtn,
        padding: spacingX._5,
        borderRadius: 50,
    }
});