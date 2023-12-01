import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ToggleSwitch = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={() => setChecked(!isChecked)}
    >
      <View
        style={{
          width: 40,
          height: 20,
          backgroundColor: isChecked ? '#FFB2DC' : '#7584E4',
          borderRadius: 10,
          marginRight: 10,
          borderWidth: 2,
          borderColor: isChecked ? '#7584E4' : '#FFB2DC',
        }}
      >
        <View 
          style={{
            position: 'absolute',
            top: 0,
            start: isChecked ? '30%' : 0,
            backgroundColor: 'white',
            borderRadius: 10,
            height: 16,
            width: 16,
            transform: isChecked ? [{ translateX: 10 }] : [],
            transition: 'transform 0.3s ease',
            shadowRadius : "3",
        }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
