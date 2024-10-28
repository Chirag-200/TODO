import React from "react"

import {View,Text} from "react-native"

type Props={
    FirstText: String;
    FirstTextStyle: Object;
    numberOfLines?: number;
}
const CommonText=(Props:Props)=>{
return (
    <View>
          <Text style = {[{color:'red'},Props.FirstTextStyle,  ]} numberOfLines={Props.numberOfLines}> {Props.FirstText}</Text>
    </View>
)
}
export default CommonText