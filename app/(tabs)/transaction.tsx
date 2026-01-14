import ExpenseIcon from '@/assets/svgs/ExpenseIcon';
import IncomeIcon from '@/assets/svgs/IncomeIcon';
import BalanceComponent from '@/components/BalanceComponent';
import ExpenseListItem from '@/components/ExpenseListItem';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { data, data2 } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Platform, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const { width: DimWidth } = Dimensions.get('screen');

import Animated, { FadeIn, FadeInUp, FadeOut, FadeOutDown, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const TransactionScreen = () => {
    const theme = useColorScheme() ?? 'light';
    const router = useRouter();
    const { width, height } = useWindowDimensions();
    const [showIncomeExpense, setShowIncomeExpense] = useState(false);

    const toggleIncomeExpense = () => {
        setShowIncomeExpense(!showIncomeExpense);
    };

    const animatedMarginStyle = useAnimatedStyle(() => {
        return {
            marginBottom: withTiming(showIncomeExpense ? spacingY._10 : -spacingY._30, { duration: 500 }),
        };
    });

    return (
        <Screen style={{ backgroundColor: Colors[theme].primary, }}>
            <Header
                title="Transaction"
                theme={theme}
                leftIcon={<Ionicons name="arrow-back" size={24} color={Colors[theme].text} />}
                rightIcon={<View style={styles.iconContainer}>
                    <Ionicons name="notifications-outline" size={20} />
                </View>}
                onLeftPress={() => router.replace('/(tabs)')}
                onRightPress={() => console.log('Notifications/Right pressed')}
                style={{
                    marginHorizontal: spacingX._12,
                }}
            />

            <AnimatedPressable style={[styles.balanceContainer, animatedMarginStyle]} onPress={toggleIncomeExpense}>
                <Text style={styles.totalBalance}>Total Balance</Text>
                <Text style={styles.totalAmount}>$7,783.00</Text>
            </AnimatedPressable>

            {showIncomeExpense ? (
                <Animated.View
                    entering={FadeInUp.duration(300)}
                    exiting={FadeOutDown.duration(300)}
                    style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: spacingX._30, gap: spacingX._12 }}
                >
                    <View style={styles.incomeExpenseContainer}>
                        <IncomeIcon size={25} color={Colors.light.primary} />
                        <Text style={styles.incomeText}>Income</Text>
                        <Text style={styles.incomeAmountText}>$4,120.00</Text>
                    </View>
                    <View style={styles.incomeExpenseContainer}>
                        <ExpenseIcon size={25} color={Colors.light.focusText} />
                        <Text style={styles.incomeText}>Expense</Text>
                        <Text style={styles.incomeAmountText}>$1,187.40</Text>
                    </View>
                </Animated.View>
            ) : (
                <Animated.View
                    entering={FadeIn.duration(300)}
                    exiting={FadeOut.duration(300)}
                >
                    <BalanceComponent />
                </Animated.View>
            )}


            <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.52 : 0.52), backgroundColor: Colors[theme].secondary }]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <ThemedText style={{ fontSize: 16, fontWeight: '600', marginBottom: spacingY._15 }}>April</ThemedText>
                    {data.map((item, index) => (
                        <ExpenseListItem key={index} item={item} index={index} />
                    ))}
                    <ThemedText style={{ fontSize: 16, fontWeight: '600', marginVertical: spacingY._10 }}>March</ThemedText>
                    {data2.map((item, index) => (
                        <ExpenseListItem key={index} item={item} index={index} />
                    ))}
                </ScrollView>
            </View>

        </Screen>
    );
};

export default TransactionScreen;

const styles = StyleSheet.create({
    contentContainer: {
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: spacingX._30,
        paddingTop: spacingY._20,
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    balanceContainer: {
        backgroundColor: Colors.light.secondaryBtn,
        marginHorizontal: spacingX._30,
        marginTop: spacingY._10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        paddingVertical: spacingY._10,
    },
    totalBalance: {
        fontSize: 12,
        fontWeight: '400',
        color: Colors.light.text,
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.text,
        marginTop: 5
    },
    iconContainer: {
        backgroundColor: Colors.light.secondaryBtn,
        padding: spacingX._5,
        borderRadius: 50,
    },
    incomeExpenseContainer: {
        flex: 1,
        backgroundColor: Colors.light.secondaryBtn,
        padding: spacingX._15,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3
    },
    incomeText: { color: Colors.light.text, fontSize: 12, fontWeight: '400' },
    incomeAmountText: { color: Colors.light.text, fontSize: 16, fontWeight: '600' },
});
