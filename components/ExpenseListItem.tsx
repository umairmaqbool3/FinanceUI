import { Colors } from '@/constants/theme'
import { spacingX, spacingY } from '@/constants/theme1'
import { useColorScheme } from '@/hooks/use-color-scheme'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from './themed-text'

const ExpenseListItem = ({ index, item }: { index: any, item: any }) => {
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
                <ThemedText>{item.title}</ThemedText>
                <ThemedText style={{ fontSize: 12, color: Colors.light.focusText, fontWeight: '700' }}>{item.date}</ThemedText>
            </View>
            <View style={styles.verticalDivider} />
            <View style={{ width: 85, alignItems: 'center' }}>
                <ThemedText style={{ fontSize: 13 }}>{item.duration}</ThemedText>
            </View>
            <View style={styles.verticalDivider} />
            <View style={{ width: 75, alignItems: 'flex-end' }}>
                <ThemedText style={{ color: item?.amount.startsWith("-") ? Colors.light.focusText : Colors[theme].text }}>{item.amount}</ThemedText>
            </View>
        </View>
    )
}

export default ExpenseListItem

const styles = StyleSheet.create({
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