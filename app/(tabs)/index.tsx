import BalanceComponent from '@/components/BalanceComponent';
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
import { StyleSheet, View, useWindowDimensions } from 'react-native';

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

            <View style={[styles.contentContainer, { height: height * 0.55, backgroundColor: Colors[theme].secondary }]}>
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
                        <View key={index} style={[styles.singleItemContainer]}>
                            <View style={[styles.iconBackgroundView, {
                                backgroundColor: index == 0 ? '#6DB6FE' : index == 1 ? '#3299FF' : Colors.light.focusText,
                                opacity: index == 0 || index == 1 ? 0.9 : 1
                            }]}>
                                <item.icon color={Colors.light.white} width={25} height={25} />
                            </View>
                            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                                <ThemedText>{item.title}</ThemedText>
                                <ThemedText style={{ fontSize: 12, color: Colors.light.focusText, fontWeight: '700' }}>{item.date}</ThemedText>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={{ width: 85, alignItems: 'center' }}>
                                <ThemedText style={{ fontSize: 13 }}>{item.duration}</ThemedText>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={{ width: 75, alignItems: 'flex-end' }}>
                                <ThemedText style={{ color: Number(item?.amount) < 0 ? Colors.light.focusText : Colors.light.white }}>{item.amount}</ThemedText>
                            </View>
                        </View>
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
    },
    singleItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacingY._15,
    },
    iconBackgroundView: {
        padding: spacingX._12,
        borderRadius: 20,
    },
    verticalDivider: {
        width: 1,
        height: '70%',
        backgroundColor: Colors.light.primary,
    },
});