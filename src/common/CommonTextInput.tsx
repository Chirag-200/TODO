

import React from 'react';
import { Image, Text, TextInput, View } from 'react-native'


type TextProps = {
 
    placeholderText: String
    

}

 const CommonTextInput = ({ placeholderText} : TextProps) => {
    return (

        <View>

          
            <TextInput placeholder={placeholderText} style = {{borderWidth: 1, backgroundColor: 'rgb(30,30,30)', borderRadius: 10, paddingLeft:10 }} placeholderTextColor={'white'}/>
            
        </View>
    )
}

export default CommonTextInput