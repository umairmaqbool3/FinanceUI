import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
    Extrapolate,
    SharedValue,
    interpolate,
    useAnimatedStyle,
} from 'react-native-reanimated';
import { Data } from '../utils/data';

type PaginationCompProps = {
    index: number;
    x: SharedValue<number>;
    screenWidth: number;
};

const PaginationComp = ({ index, x, screenWidth }: PaginationCompProps) => {
    const theme = useColorScheme();
    const animatedDotStyle = useAnimatedStyle(() => {
        const widthAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [10, 20, 10],
            Extrapolate.CLAMP
        );

        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * screenWidth,
                index * screenWidth,
                (index + 1) * screenWidth,
            ],
            [0.5, 1, 0.5],
            Extrapolate.CLAMP
        );

        return {
            width: widthAnimation,
            opacity: opacityAnimation,
        };
    });

    return <Animated.View style={[styles.dots, { backgroundColor: theme == 'light' ? Colors.light.primary : Colors.light.secondary }, animatedDotStyle]} />;
};

type PaginationProps = {
    data: Data[];
    x: SharedValue<number>;
    screenWidth: number;
};

export function Pagination({ data, screenWidth, x }: PaginationProps) {
    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <PaginationComp
                    key={item.id}
                    index={index}
                    x={x}
                    screenWidth={screenWidth}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dots: {
        width: 10,
        height: 10,
        borderRadius: 5,
        // backgroundColor: 'yellow',
        marginHorizontal: 5,
    },
});