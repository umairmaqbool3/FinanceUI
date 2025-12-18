import { Colors } from '@/constants/theme'
import { spacingX } from '@/constants/theme1'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SavingsOnGoals = () => {
    return (
        <View style={styles.container}>
            <Text>SavingsOnGoals</Text>
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
    }
})