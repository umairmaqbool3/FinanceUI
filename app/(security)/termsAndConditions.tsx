import CustomButton from '@/components/CustomButton';
import Header from '@/components/Header';
import Screen from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Colors } from '@/constants/theme';
import { spacingX, spacingY } from '@/constants/theme1';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'expo-checkbox';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

const textList = [
  "Ea voluptates omnis aut sequi sequi.",
  "Est dolore quae in aliquid ducimus et autem repellendus.",
  "Aut ipsum Quis qui porro quasi aut minus placeat!",
  "Sit consequatur neque ab vitae facere.",
]

const list = [
  "Aut fuga sequi eum voluptatibus provident.",
  "Eos consequuntur voluptas vel amet eaque aut dignissimos velit."
]

const TermsAndConditions = () => {
  const theme = useColorScheme() ?? 'light';
  const { width, height } = useWindowDimensions();
  const [isChecked, setChecked] = useState(false);

  return (
    <Screen style={{ backgroundColor: Colors[theme].primary }}>
      <Header
        title="Terms & Conditions"
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <ThemedText>
            Est Fugiat Assumenda Aut Reprehenderit
          </ThemedText>

          <ThemedText style={styles.textStyle}>
            Lorem ipsum dolor sit amet. Et odio officia aut voluptate internos est omnis vitae ut architecto sunt non tenetur fuga ut provident vero. Quo aspernatur facere et consectetur ipsum et facere corrupti est asperiores facere. Est fugiat assumenda aut reprehenderit voluptatem sed.
          </ThemedText>

          <View style={{ marginVertical: spacingY._10 }}>
            {textList.map((item, index) => (
              <ThemedText key={index} style={styles.listTextStyle}>
                {index + 1}.   {item}
              </ThemedText>
            ))}
          </View>

          <ThemedText style={styles.textStyle}>
            Aut quidem accusantium nam alias autem eum officiis placeat et omnis autem id officiis perspiciatis qui corrupti officia eum aliquam provident. Eum voluptas error et optio dolorum cum molestiae nobis et odit molestiae quo magnam impedit sed fugiat nihil non nihil vitae.
          </ThemedText>

          <View style={{ marginVertical: spacingY._10 }}>
            {list.map((item, index) => (
              <ThemedText key={index} style={styles.listTextStyle}>
                •   {item}
              </ThemedText>
            ))}
          </View>

          <ThemedText style={styles.textStyle}>
            Vel exercitationem quam vel eligendi rerum At harum obcaecati et nostrum beatae? Ea accusantium dolores qui rerum aliquam est perferendis mollitia et ipsum ipsa qui enim autem At corporis sunt. Aut odit quisquam est reprehenderit itaque aut accusantium dolor qui neque repellat.
          </ThemedText>

          <ThemedText style={{ fontSize: 12, marginVertical: spacingY._5, lineHeight: 17 }}>
            Read the terms and conditions in more detail at
          </ThemedText>

          <Link href="https://www.finwiseapp.de" target="_blank" style={{ color: Colors.light.focusText, textDecorationLine: 'underline', marginTop: -5 }}>
            www.finwiseapp.de
          </Link>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: spacingY._10, gap: 10 }}>
            <Checkbox
              // style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? theme === 'light' ? Colors.light.text : Colors.light.primary : undefined}
            />
            <ThemedText style={{ fontSize: 12, fontFamily: 'Poppins_400Regular', lineHeight: 17 }}>
              I accept all the terms and conditions
            </ThemedText>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <CustomButton
              title="Accept"
              onPress={() => router.back()}
              containerStyle={{ marginTop: spacingY._20 }}
            />
          </View>

          <View style={{ height: spacingY._20 }} />
        </ScrollView>
      </View>
    </Screen>
  )
}

export default TermsAndConditions;

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
  textStyle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    marginVertical: spacingY._5,
    lineHeight: 17
  },
  listTextStyle: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    lineHeight: 17
  }
})