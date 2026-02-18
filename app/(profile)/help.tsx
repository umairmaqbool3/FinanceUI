import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';



const Help = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [selectedPeriod, setSelectedPeriod] = React.useState({ name: 'FAQ ', icon: '' });
  const [selectedTab, setSelectedTab] = React.useState('General');

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Help & FAQS"
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

      <View style={[styles.contentContainer, { height: height * (Platform.OS == 'ios' ? 0.85 : 0.90), backgroundColor: Colors[theme].secondary }]}>

        <ThemedText style={styles.title}>How Can We Help You?</ThemedText>

        <SegmentedControl
          data={[{ name: 'FAQ ', icon: '' }, { name: 'Contact Us', icon: '' }]}
          onPress={item => setSelectedPeriod(item)}
          selected={selectedPeriod}
          width={width - 55}
          height={55}
        />

        <View style={[styles.tabsContainer, { backgroundColor: Colors[theme].tabbarBg }]}>
          {['General', 'Account', 'Services'].map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setSelectedTab(tab)}
              style={[
                styles.tab,
                // selectedTab === tab && { backgroundColor: Colors[theme].tint,}
              ]}
            >
              <ThemedText
                style={[
                  styles.tabText,
                  // selectedTab === tab && { color: Colors[theme].background }
                ]}
              >
                {tab}
              </ThemedText>
            </Pressable>
          ))}
        </View>



      </View>
    </Screen>
  )
}

export default Help;

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
  title: {
    textAlign: 'center'
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacingY._5,
    gap: spacingX._10,
    borderRadius: 12
  },
  tab: {
    flex: 1,
    paddingVertical: spacingY._10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontWeight: '400',
    fontSize: 14,
  },

})