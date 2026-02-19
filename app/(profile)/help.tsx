import CustomerService from '@/assets/svgs/CustomerService';
import Facebook from '@/assets/svgs/Facebook';
import WebsiteIcon from '@/assets/svgs/WebsiteIcon';
import ExpandableFAQ, { FAQItem } from '@/components/FAQComponent';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { SegmentedControl } from '@/components/SegmentedControl';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { router } from 'expo-router';
import React from 'react';
import { Platform, Pressable, ScrollView, StyleSheet, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';


const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'How to use FinWise?',
    answer: 'React Native is a framework for building mobile apps using JavaScript and React.',
  },
  {
    id: '2',
    question: 'How much does it cost to use FinWise?',
    answer: 'Yes, it allows you to build both iOS and Android apps using a single codebase.',
  },
  {
    id: '3',
    question: 'How to contact support?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '4',
    question: 'How can i reset my password if I forget it?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '5',
    question: 'Are there any privacy or data security measures in place?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '6',
    question: 'Can I customize settings within the application?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '7',
    question: 'How can i delete my account?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '8',
    question: 'How do I access my expense history?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
  {
    id: '9',
    question: 'Can I use the app offline?',
    answer: 'Yes, using Animated API or Reanimated library.',
  },
];

let options = [
  {
    icon: <CustomerService size={28} />,
    title: 'Customer Service',
    // onPress: () => router.push('/(setting)/notificationSetting'),
    onPress: () => console.log("customer service clicked"),
  },
  {
    icon: <WebsiteIcon size={28} />,
    title: 'Website',
    onPress: () => console.log("website clicked"),
  },
  {
    icon: <Facebook size={28} color='black' />,
    title: 'Facebook',
    onPress: () => console.log("facebook clicked"),
  },
  {
    icon: <FontAwesome5 name="whatsapp" size={24} color="black" />,
    title: 'Whatsapp',
    onPress: () => console.log("whatsapp clicked"),
  },
  {
    icon: <SimpleLineIcons name="social-instagram" size={24} color="black" />,
    title: 'Instagram',
    onPress: () => console.log("instagram clicked"),
  }
]


const Help = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [selectedPeriod, setSelectedPeriod] = React.useState({ name: 'FAQ ', icon: '' });
  const [selectedTab, setSelectedTab] = React.useState('General');
  const [searchedText, setSearchedText] = React.useState('')

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

        <View style={[styles.inputContainer, { backgroundColor: Colors[theme].secondaryBtn }]}>
          <TextInput
            placeholder="Search"
            value={searchedText}
            onChangeText={setSearchedText}
            placeholderTextColor={Colors.dark.primary}
            style={[styles.input, { color: Colors.light.text, opacity: 0.3 }]}
          />
        </View>

        {selectedPeriod.name === 'FAQ ' ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            <ExpandableFAQ data={faqData} theme={theme} />
          </ScrollView>
        ) : (
          <View style={{ marginTop: spacingY._20 }}>
            {options.map((item, index) => (
              <TouchableOpacity key={index} style={styles.optionContainer} onPress={item.onPress}>
                <View style={styles.optionLeft}>
                  <View style={styles.leftIconContainer}>
                    {item.icon}
                  </View>
                  <ThemedText style={styles.optionTitle}>{item.title}</ThemedText>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={18} color={Colors[theme].text} />
              </TouchableOpacity>
            ))}
          </View>
        )}



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
    gap: spacingX._10,
    borderRadius: 12
  },
  tab: {
    flex: 1,
    paddingVertical: spacingY._7,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontWeight: '400',
    fontSize: 14,
  },
  inputContainer: {
    borderRadius: 12,
    marginTop: 10,
    paddingHorizontal: spacingX._20,
    height: 42,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
    paddingLeft: spacingX._7,
  },
  leftIconContainer: {
    backgroundColor: Colors.light.primary,
    borderRadius: 15,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacingY._10,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacingX._12,
  },
  optionTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '500',
  }
})