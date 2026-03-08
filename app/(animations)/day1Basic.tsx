import { Button, Pressable, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

// Mini Challenge (Do This)
// Modify the button so that:
// 1️⃣ When pressed
// scale = 0.92
// rotate = 2deg
// 2️⃣ When released
// rotate returns to 0deg
// Hint:
// transform: [{ scale }, { rotate }]

export default function AnimatedButton() {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const rotate = useSharedValue(0);
  const progress = useSharedValue(0);

  const translateX = useDerivedValue(() => {
    return progress.value == 1 ? -progress.value * 300 : progress.value * 300;
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const startAnimation = () => {
    progress.value = withTiming(progress.value == 1 ? 0 : 1, { duration: 1000 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
      opacity: opacity.value,
    };
  });

  const onPressIn = () => {
    scale.value = withSpring(0.92, {
      damping: 15,
      stiffness: 200,
    });
    opacity.value = withTiming(0.8, { duration: 150 });
    rotate.value = withSpring(2);
  };

  const onPressOut = () => {
    scale.value = withSequence(
      withSpring(1.2),
      withSpring(1)
    );
    opacity.value = withTiming(1, { duration: 150 });
    rotate.value = withSpring(0)
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        style={[
          {
            backgroundColor: "#4A90E2",
            padding: 16,
            borderRadius: 10,
          },
          animatedStyle,
        ]}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Press Me
        </Text>
      </Animated.View>
      <View style={{ height: 20 }} />
      <Animated.View
        style={[
          {
            width: 80,
            height: 80,
            backgroundColor: "blue",
          },
          animatedStyle2,
        ]}
      />
      <Button title="Start" onPress={startAnimation} />
    </Pressable>
  );
}