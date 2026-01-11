import { Colors } from '@/constants/theme';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

interface AnimatedTabIconProps {
    focused: boolean;
    icon: React.ComponentType<any>;
    theme: 'light' | 'dark';
}

const AnimatedTabIcon = ({ focused, icon: Icon, theme }: AnimatedTabIconProps) => {
    const progress = useSharedValue(focused ? 1 : 0);

    useEffect(() => {
        progress.value = withTiming(focused ? 1 : 0, { duration: 500 });
    }, [focused]);

    const animatedContainerStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            progress.value,
            [0, 1],
            ['transparent', Colors.light.primary] // Using Colors.light.primary as per existing code logic
        );

        return {
            backgroundColor,
        };
    });

    const activeIconStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
        };
    });

    const inactiveIconStyle = useAnimatedStyle(() => {
        return {
            opacity: 1 - progress.value,
        };
    });


    return (
        <Animated.View style={[styles.container, animatedContainerStyle]}>
            {/* Active Icon (Visible when focused) */}
            <Animated.View style={[StyleSheet.absoluteFill, styles.iconContainer, activeIconStyle]}>
                <Icon theme={theme} color={Colors.light.text} />
            </Animated.View>

            {/* Inactive Icon (Visible when not focused) */}
            <Animated.View style={[styles.iconContainer, inactiveIconStyle]}>
                <Icon theme={theme} />
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AnimatedTabIcon;
