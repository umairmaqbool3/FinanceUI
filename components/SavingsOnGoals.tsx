import CarIcon from '@/assets/svgs/CarIcon'
import FoodIcon from '@/assets/svgs/FoodIcon'
import SalaryIcon from '@/assets/svgs/SalaryIcon'
import { Colors } from '@/constants/theme'
import { spacingX } from '@/constants/theme1'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SIZE = 80;
const BORDER_WIDTH = 3;

const SavingsOnGoals = () => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.wrapper}>
                    {/* White half */}
                    <View style={[styles.halfBorder, styles.whiteHalf]} />

                    {/* Green half */}
                    <View style={[styles.halfBorder, styles.greenHalf]} />

                    {/* Icon container */}
                    <View style={styles.iconContainer}>
                        <CarIcon />
                    </View>
                </View>
                <Text style={{ textAlign: 'center', marginTop: 5 }}>{'Savings \nOn Goals'}</Text>
            </View>
            <View style={{ height: '90%', width: 2, backgroundColor: Colors.light.white }} />
            <View style={{ flexDirection: 'column', justifyContent: 'center', gap: spacingX._15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacingX._10 }}>
                    <SalaryIcon />
                    <View>
                        <Text style={{ fontWeight: '200', fontSize: 13 }}> Revenue Last Week</Text>
                        <Text style={{ fontWeight: '700', fontSize: 16 }}> $4.000.00</Text>
                    </View>
                </View>
                <View style={{ height: 2, width: '95%', backgroundColor: Colors.light.white }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacingX._10 }}>
                    <FoodIcon />
                    <View style={{ marginLeft: 8 }}>
                        <Text style={{ fontWeight: '200', fontSize: 13 }}> Revenue Last Week</Text>
                        <Text style={{ fontWeight: '700', fontSize: 16, color: Colors.light.focusText }}> -$100.00</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SavingsOnGoals

const styles = StyleSheet.create({
    container: {
        marginHorizontal: spacingX._5,
        backgroundColor: Colors.light.primary,
        borderRadius: 20,
        padding: spacingX._20,
        flexDirection: 'row',
        gap: spacingX._20,
    },
    wrapper: {
        width: SIZE,
        height: SIZE,
        justifyContent: 'center',
        alignItems: 'center',
    },

    halfBorder: {
        position: 'absolute',
        width: SIZE,
        height: SIZE,
        borderRadius: SIZE / 2,
        borderWidth: BORDER_WIDTH,
    },

    whiteHalf: {
        borderColor: Colors.light.focusText,
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        transform: [{ rotate: '135deg' }],
    },

    greenHalf: {
        borderColor: Colors.light.white,
        borderLeftColor: 'transparent',
        borderTopColor: 'transparent',
        transform: [{ rotate: '135deg' }],
    },

    iconContainer: {
        width: SIZE - BORDER_WIDTH * 2,
        height: SIZE - BORDER_WIDTH * 2,
        borderRadius: (SIZE - BORDER_WIDTH * 2) / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
})