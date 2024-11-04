// Switch.tsx
import React from 'react';
import { Switch as RNSwitch } from 'react-native';

interface SwitchProps {
    value: boolean;
    onValueChange: (value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ value, onValueChange }) => {
    return (
        <RNSwitch
            value={value}
            onValueChange={onValueChange}
        />
    );
};

export default Switch;