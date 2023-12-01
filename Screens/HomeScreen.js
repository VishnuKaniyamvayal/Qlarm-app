import { SafeAreaView, StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import AlarmCard from '../Components/AlarmCard'

const HomeScreen = () => {
  return (
    <View>
      <Text style={tw `text-4xl mt-10 font-bold text-[#ffff] text-center`}>Set Your Alarm</Text>
       <ScrollView>
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       <AlarmCard/> 
       </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})