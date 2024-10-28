

import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import CommonText from '../common/CommonText';
import CommonTextInput from '../common/CommonTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';





const Home = () => {
    return (
        <View style = {{backgroundColor: 'black', flex:1, height:'100%',width:'100%'}}>
            

            <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <View>
           <CommonText FirstText='You have got 5 tasks' FirstTextStyle={{color: 'white' , fontWeight: 600}} numberOfLines={2}/>
           <CommonText FirstText='today to complete' FirstTextStyle={{color: 'white' , fontWeight: 600}}/>
           </View>
           <Image source = {require('../assets/images/test.jpeg')} style = {{height:50, width:50 , borderRadius: 100 }}/>
           </View>



           <CommonTextInput placeholderText={'Search Task Here'}/>

           <Icon name="check-circle" size={50} color="white" />


        </View>
    )
}
export default Home