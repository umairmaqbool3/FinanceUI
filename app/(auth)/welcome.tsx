import CustomButton from '@/components/CustomButton'
import Screen from '@/components/Screen'
import Space from '@/components/Space'
import { ThemedText } from '@/components/themed-text'
import { Colors, Fonts } from '@/constants/theme'
import { spacingX } from '@/constants/theme1'
import { useColorScheme } from '@/hooks/use-color-scheme'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

const welcome = () => {
    const router = useRouter();
    const theme = useColorScheme();
    return (
        <Screen style={[styles.container, { backgroundColor: theme == 'light' ? Colors.light.secondary : Colors.dark.primary }]}>
            <Animated.Image
                source={require('@/assets/images/logo-green.png')}
                style={styles.logo}
                entering={FadeInDown.duration(900).springify()}
            />
            <Animated.Text style={[styles.text, { color: Colors.light.primary }]} entering={FadeInDown.duration(900).springify()}>
                FinWise
            </Animated.Text>
            <Animated.Text style={[styles.subText, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]} entering={FadeInDown.duration(900).springify()}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </Animated.Text>
            <Space height={20} />
            <Animated.View entering={FadeInDown.duration(2500).springify()}>
                <CustomButton
                    title="Log In"
                    textStyle={{ color: 'black', fontSize: 13 }}
                    onPress={() => router.replace('/login')}
                />
                <Space height={8} />
                <CustomButton
                    title="Sign Up"
                    textStyle={{ color: 'black', fontSize: 13 }}
                    containerStyle={{ backgroundColor: Colors.light.secondaryBtn }}
                    onPress={() => router.replace('/signup')}
                />
            </Animated.View>

            <ThemedText style={{ fontSize: 12 }}>
                Forgot Password?
            </ThemedText>
        </Screen>
    )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: spacingX._60
    },
    logo: {
        height: '12%',
        aspectRatio: 1
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: Fonts.bold
    },
    subText: {
        fontSize: 12,
        textAlign: 'center'
    }
})