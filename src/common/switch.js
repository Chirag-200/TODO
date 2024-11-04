import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const Switch = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn((prev) => !prev);
  };

  return (
    <View style={{   }}>
      <ToggleSwitch
        isOn={isSwitchOn}
        onColor="#A378FF"
        
        offColor="#181818"

        labelStyle={{ color: 'white', fontWeight: '600' }}
        size='medium'
        onToggle={toggleSwitch}
        
      />

    
      
    </View>
  );
};

export default Switch;
