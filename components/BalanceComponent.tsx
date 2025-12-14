import CheckIcon from '@/assets/svgs/CheckIcon'
import ExpenseIcon from '@/assets/svgs/ExpenseIcon'
import IncomeIcon from '@/assets/svgs/IncomeIcon'
import { Colors } from '@/constants/theme'
import { spacingX } from '@/constants/theme1'
import { useColorScheme } from '@/hooks/use-color-scheme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from './themed-text'

const BalanceComponent = () => {
    const theme = useColorScheme() ?? 'light';

    return (
        <View style={styles.container}>
            <View style={[styles.row]}>
                <View>
                    <View style={[styles.row]}>
                        <IncomeIcon theme={theme} />
                        <ThemedText style={{ fontSize: 13, fontWeight: '400' }} type='default'>Total Balance</ThemedText>
                    </View>
                    <ThemedText style={{ fontSize: 20, fontWeight: '800' }} type='defaultSemiBold'>$7,783.00</ThemedText>
                </View>
                <View></View>
                <View>
                    <View style={[styles.row]}>
                        <ExpenseIcon theme={theme} />
                        <ThemedText style={{ fontSize: 13, fontWeight: '400' }} type='default'>Total Expense</ThemedText>
                    </View>
                    <ThemedText style={{ fontSize: 20, fontWeight: '800', color: Colors.light.focusText }} type='defaultSemiBold'>-$1.187.40</ThemedText>
                </View>
            </View>
            <View>
                <ThemedText>Show progress bar here</ThemedText>
            </View>
            <View style={[styles.rowStart]}>
                <CheckIcon theme={theme} />
                <ThemedText style={{ fontSize: 13 }}>30% Of Your Expenses, Looks Good.</ThemedText>
            </View>
        </View>
    )
}

export default BalanceComponent

const styles = StyleSheet.create({
    container: {
        paddingVertical: spacingX._40,
        paddingHorizontal: spacingX._60,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: spacingX._10,
    },
    rowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: spacingX._10,
    },
})