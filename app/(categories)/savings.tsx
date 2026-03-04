import CarIcon from '@/assets/svgs/CarIcon';
import HouseIcon from '@/assets/svgs/HouseIcon';
import PlaneIcon from '@/assets/svgs/PlaneIcon';
import WeddingIcon from '@/assets/svgs/WeddingIcon';
import BalanceComponent from '@/components/BalanceComponent';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

let items = [
  { name: 'Travel', icon: PlaneIcon, onPress: () => router.push({ pathname: '/(categories)/savingsItems', params: { headerTitle: 'Travel' } }) },
  { name: 'New House', icon: HouseIcon, onPress: () => router.push({ pathname: '/(categories)/savingsItems', params: { headerTitle: 'New House' } }) },
  { name: 'Car', icon: CarIcon, onPress: () => router.push({ pathname: '/(categories)/savingsItems', params: { headerTitle: 'Car' } }) },
  { name: 'Wedding', icon: WeddingIcon, onPress: () => router.push({ pathname: '/(categories)/savingsItems', params: { headerTitle: 'Wedding' } }) },
]

const SavingScreen = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Savings"
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

      <BalanceComponent />

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.70 : 0.80), backgroundColor: Colors[theme].secondary }]}>
        <View style={{ width: '100%' }}>
          <FlatList
            data={items}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={styles.itemContainer}
                onPress={item.onPress}>
                <View style={[styles.itemIconContainer, { backgroundColor: index == 0 ? Colors.light.focusText : '#6DB6FE' }]}>
                  <item.icon color={Colors.light.white} size={45} />
                </View>
                <Text style={{ color: Colors[theme].text, fontWeight: '600' }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
            numColumns={3}
            contentContainerStyle={{ gap: spacingY._35 }}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SavingScreen;

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
  itemContainer: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '33.33%',
  },
  itemIconContainer: {
    backgroundColor: Colors.light.focusText,
    padding: spacingX._20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
