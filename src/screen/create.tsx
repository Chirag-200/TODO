import {View, Text} from 'react-native';
import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';

const CreateTask = () => {
  return (
    <View style = {{backgroundColor:'black'}}>
      <CalendarStrip
        scrollable
        calendarColor={'#181818'}
        style={{height: 100, paddingTop: 20, paddingBottom: 10}}
        calendarHeaderFormat="LL"
        calendarHeaderStyle={{color: '#BA83DE'}}
        dateNumberStyle={{color: '#FFFFFF99', marginTop: 5}}
        dateNameStyle={{color: '#FFFFFF99'}}
        highlightDateNumberStyle={{color: '#BA83DE', marginTop: 5}}
        highlightDateNameStyle={{color: '#BA83DE'}}
      />
    </View>
  );
};

export default CreateTask;
