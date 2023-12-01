import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import tw from "twrnc"
import ToggleSwitch from './Toggle'

export default class AlarmCard extends Component {
  render() {
    return (
      <View style={tw `flex flex-col bg-[#8E9EFF] rounded-2xl min-w-80 mt-4`}>
        <View style={tw `flex flex-row justify-between`}>
            <Text style={tw `text-4xl px-3 py-6 text-left text-white font-bold`}>19:45</Text>
            <ToggleSwitch/>
        </View>
        <View style={tw `bg-[#98A8FF] rounded-2xl flex flex-row justify-between`}>
            <Text style={tw `px-3 py-4 text-white font-bold`}>sat,sun</Text>
            <Text style={tw `px-3 py-4 text-white font-bold`}>...</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:"#ffff",

    }
})