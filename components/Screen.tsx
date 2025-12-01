import { Colors } from '@/constants/theme'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemedView } from './themed-view'

const Screen = ({ children, style }: any) => {

  return (
    <ThemedView style={[{ flex: 1 }, style]} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}>
      <StatusBar style='auto' animated />
      {children}
    </ThemedView>
  )
}

export default Screen

const styles = StyleSheet.create({})