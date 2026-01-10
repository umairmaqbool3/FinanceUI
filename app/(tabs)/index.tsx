import BalanceComponent from '@/components/BalanceComponent';
import ExpenseListItem from '@/components/ExpenseListItem';
import SavingsOnGoals from '@/components/SavingsOnGoals';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ThemedText } from '@/components/themed-text';
import { data } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';

const HomeScreen = () => {
    const { width, height } = useWindowDimensions();
    const router = useRouter();
    const theme = useColorScheme() ?? 'light';
    const [selectedPeriod, setSelectedPeriod] = useState({ name: 'Daily ', icon: '' });

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

            <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.55 : 0.61), backgroundColor: Colors[theme].secondary }]}>
                <SavingsOnGoals />

                <SegmentedControl
                    data={[{ name: 'Daily ', icon: '' }, { name: 'Weekly', icon: '' }, { name: 'Monthly', icon: '' }]}
                    onPress={item => setSelectedPeriod(item)}
                    selected={selectedPeriod}
                    width={width - 55}
                    height={55}
                />
                <View>
                    {data.map((item, index) => (
                        <ExpenseListItem key={index} item={item} index={index} />
                    ))}
                </View>
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