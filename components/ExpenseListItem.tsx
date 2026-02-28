import { Colors } from '@/constants/theme'
import { spacingX, spacingY } from '@/constants/theme1'
import { useColorScheme } from '@/hooks/use-color-scheme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from './themed-text'

interface ExpenseItem {
    title: string;
    date: string;
    duration?: string;
    amount: string;
    icon: React.ComponentType<any>;
}

const ExpenseListItem = ({ index, item }: { index: any, item: ExpenseItem }) => {
    const theme = useColorScheme() ?? 'light';
    return (
        <View key={index} style={[styles.singleItemContainer]}>
            <View style={[styles.iconBackgroundView, {
                backgroundColor: index == 0 ? '#6DB6FE' : index == 1 ? '#3299FF' : Colors.light.focusText,
                opacity: index == 0 || index == 1 ? 0.9 : 1
            }]}>
                <item.icon color={Colors.light.white} width={25} height={25} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <ThemedText style={{ fontSize: 15 }}>{item.title}</ThemedText>
                <ThemedText style={{ fontSize: 12, color: Colors.light.focusText, fontWeight: '700' }}>{item.date}</ThemedText>
            </View>
            {item.duration ? (
                <>
                    <View style={styles.verticalDivider} />
                    <View style={{ width: 85, alignItems: 'center' }}>
                        <ThemedText style={{ fontSize: 13 }}>
                            {String(item.duration)}
                        </ThemedText>
                    </View>
                    <View style={styles.verticalDivider} />
                </>
            ) : null}

            <View style={{ width: 75, alignItems: 'flex-end' }}>
                <ThemedText style={{ color: theme == 'light' ? Colors.light.focusText : Colors[theme].text }}>{item.amount}</ThemedText>
            </View>
        </View>
    )
}

export default ExpenseListItem

const styles = StyleSheet.create({
    singleItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spacingY._10,
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