import { Colors } from '@/constants/theme';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet
} from 'react-native';

const CustomSwitch = ({
  value = false,
  onValueChange,
  width = 45,
  height = 22,
  activeColor = Colors.light.primary,
  inactiveColor = '#D1D1D1',
  thumbColor = '#FFFFFF',
  disabled = false,
}) => {
  const translateX = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value]);

  const thumbSize = height - 4;
  const maxTranslate = width - thumbSize - 4;

  const thumbTranslate = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxTranslate],
  });

  return (
    <Pressable
      onPress={() => !disabled && onValueChange?.(!value)}
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor: value ? activeColor : inactiveColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.thumb,
          {
            width: thumbSize,
            height: thumbSize,
            backgroundColor: thumbColor,
            transform: [{ translateX: thumbTranslate }],
          },
        ]}
      />
    </Pressable>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 2,
    justifyContent: 'center',
  },
  thumb: {
    borderRadius: 100,
    elevation: 2,
  },
});
