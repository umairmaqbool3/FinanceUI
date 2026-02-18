import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const Fingerprint = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Fingerprint"
        theme={theme}
        leftIcon={<Ionicons name="arrow-back" size={24} color={Colors[theme].text} />}
        rightIcon={<View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={20} />
        </View>}
        onLeftPress={() => router.back()}
        onRightPress={() => console.log('Notifications/Right pressed')}
        style={{
          marginHorizontal: spacingX._12,
          marginBottom: -spacingY._20,
        }}
      />

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.80 : 0.90), backgroundColor: Colors[theme].secondary }]}>

        <TouchableOpacity style={styles.itemView} onPress={() => console.log("Jhon fingerprint pressed")}>
          <View style={styles.itemInnerView}>
            <View style={styles.optionIconContainer}>
              <Ionicons name="finger-print" size={30} color={Colors[theme].text} />
            </View>
            <ThemedText>Jhon fingerprint</ThemedText>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Colors[theme].text} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.itemView} onPress={() => console.log("Add fingerprint pressed")}>
          <View style={styles.itemInnerView}>
            <View style={[styles.optionIconContainer]}>
              <Ionicons name="add" size={30} color={Colors[theme].text} />
            </View>
            <ThemedText>Add A fingerprint</ThemedText>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color={Colors[theme].text} />
        </TouchableOpacity>

      </View>
    </Screen>
  )
}

export default Fingerprint;

const styles = StyleSheet.create({
  contentContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: spacingX._30,
    paddingTop: spacingY._30,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  iconContainer: {
    backgroundColor: Colors.light.secondaryBtn,
    padding: spacingX._5,
    borderRadius: 50,
  },
  itemView: {
    marginVertical: spacingY._15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  itemInnerView: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionIconContainer: {
    backgroundColor: Colors.light.lightBlue,
    borderRadius: 20,
    padding: 10,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
})