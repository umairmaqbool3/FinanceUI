import { Colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

const SplashScreen = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace('/(auth)/onboarding')
        }, 1500)
    }, [])

    return (
        <View style={[styles.container, { backgroundColor: Colors.light.primary }]}>
            <Animated.Image
                source={require('@/assets/images/logo.png')}
                style={styles.logo}
                entering={FadeInDown.duration(900).springify()}
            />
            <Animated.Text style={[styles.text, { color: Colors.light.white }]} entering={FadeInDown.duration(900).springify()}>
                FinWise
            </Animated.Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    logo: {
        height: '12%',
        aspectRatio: 1
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})