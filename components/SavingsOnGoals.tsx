import CarIcon from '@/assets/svgs/CarIcon'
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
                <Text>SavingsOnGoals</Text>
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