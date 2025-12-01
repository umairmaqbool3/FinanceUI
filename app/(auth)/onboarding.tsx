import { Pagination } from '@/components/pagination';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Colors } from '@/constants/theme';
import { spacingX } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View,
    ViewToken
} from 'react-native';
import Animated, {
    Extrapolate,
    interpolate,
    runOnJS,
    SharedValue,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';
import { Data, data } from '../../utils/data';

const RenderItem = ({
    item,
    index,
    x,
}: {
    item: Data;
    index: number;
    x: SharedValue<number>;
}) => {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const theme = useColorScheme() ?? 'light';

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [100, 0, 100],
            Extrapolate.CLAMP
        );

        return {
            width: SCREEN_WIDTH * 0.65,
            height: SCREEN_WIDTH * 0.65,
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    const ellipseAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [100, 0, 100],
            Extrapolate.CLAMP
        );

        return {
            width: SCREEN_WIDTH * 0.60,
            height: SCREEN_WIDTH * 0.60,
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
        };
    });

    const textAnimatedStyle = useAnimatedStyle(() => {
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [0, 1, 0],
            Extrapolate.CLAMP
        );

        const translateYAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH,
            ],
            [100, 0, 100],
            Extrapolate.CLAMP
        );

        return {
            opacity: opacityAnimation,
            transform: [{ translateY: translateYAnimation }],
            padding: spacingX._60 * 1.3,
        };
    });

    return (
        <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
            <Animated.View style={textAnimatedStyle}>
                <Text style={[styles.itemTitle, { color: theme == 'light' ? Colors.light.text : Colors.dark.text }]}>{item.title}</Text>
            </Animated.View>
            <View style={{ top: -30 }}>
                <Animated.Image
                    source={require('../../assets/images/ellipse.png')}
                    style={[{
                        position: 'absolute',
                        right: 8,
                        top: 20
                    }, ellipseAnimatedStyle]}
                />
                <Animated.Image source={item.image} style={imageAnimatedStyle} />
            </View>

        </View>
    );
};

export default function Onboarding() {
    const { width: SCREEN_WIDTH } = useWindowDimensions();
    const flatListRef = useAnimatedRef<FlatList>();
    const router = useRouter();

    const flatListIndex = useSharedValue(0);
    const x = useSharedValue(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isNavigating = useSharedValue(false);

    const onViewableItemsChanged = ({
        viewableItems,
    }: {
        viewableItems: Array<ViewToken>;
    }) => {
        if (viewableItems[0]?.index !== undefined && viewableItems[0]?.index !== null) {
            flatListIndex.value = viewableItems[0].index;
            setCurrentIndex(viewableItems[0].index);
        }
    };

    const navigateToLogin = () => {
        router.replace('/welcome');
    };

    const onScroll = useAnimatedScrollHandler({
        onScroll: (event) => {
            x.value = event.contentOffset.x;
            const totalWidth = (data.length - 1) * SCREEN_WIDTH;
            if (event.contentOffset.x > totalWidth + 50 && !isNavigating.value) {
                isNavigating.value = true;
                runOnJS(navigateToLogin)();
            }
        },
    });

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            router.replace('/welcome');
        }
    };

    return (
        <ThemedView style={styles.container} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}>
            <Animated.FlatList
                ref={flatListRef as any}
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item, index }) => (
                    <RenderItem index={index} item={item} x={x} />
                )}
                onScroll={onScroll}
                scrollEventThrottle={16}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                pagingEnabled
                onViewableItemsChanged={onViewableItemsChanged}
            />
            <ThemedView
                lightColor={Colors.light.secondary}
                darkColor={Colors.dark.secondary}
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: SCREEN_WIDTH,
                    height: '70%',
                    zIndex: -100,
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60
                }}
            />
            <TouchableOpacity onPress={handleNext}>
                <ThemedText style={{ fontSize: 20, fontWeight: 'bold' }}>Next</ThemedText>
            </TouchableOpacity>

            <View style={styles.footerContainer}>
                <Pagination data={data} screenWidth={SCREEN_WIDTH} x={x} />
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flex: 1,
        // backgroundColor: '#f8e9b0',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: -40
    },
    itemTitle: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 10,
        lineHeight: 35,
        fontFamily: 'Poppins_400Regular',
    },
    itemText: {
        color: '#1b1b1b',
        textAlign: 'center',
        lineHeight: 20,
        marginHorizontal: 30,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
    },
});