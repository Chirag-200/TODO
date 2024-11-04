import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import Switch from './switch';
import { CreateTaskScreenNavigationProps } from '../navigation/types';

const CreateTask: React.FC<CreateTaskScreenNavigationProps> = () => {
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [startTime, setStartTime] = useState<string>('0.00');
    const [endTime, setEndTime] = useState<string>('0.00');
    const [isStartTime, setIsStartTime] = useState<boolean>(true);
    const [selectedBox, setSelectedBox] = useState<'start' | 'end' | null>(null);
    const [selectedPriority, setSelectedPriority] = useState<'High' | 'Medium' | 'Low' | null>(null);
    const [taskName, setTaskName] = useState<string>('');
    const [taskDescription, setTaskDescription] = useState<string>('');
    const [getAlert, setGetAlert] = useState<boolean>(false);
    const [selectedDate, setSelectedDate] = useState<String | null>(null); // New state for selected date
    

    const colors = {
        High: '#FACBBA',
        Medium: '#D7F0FF',
        Low: '#FAD9FF',
    } as const;

    type ColorKeys = keyof typeof colors;

    const showDatePicker = (isStart: boolean) => {
        setIsVisible(true);
        setIsStartTime(isStart);
        setSelectedBox(isStart ? 'start' : 'end');
    };

    const hideDatePicker = () => {
        setIsVisible(false);
        setSelectedBox(null);
    };

    const handleConfirm = (date: Date) => {
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        if (isStartTime) {
            setStartTime(formattedTime);
        } else {
            setEndTime(formattedTime);
        }
        hideDatePicker();
    };

    const handlePriorityChange = (priority: ColorKeys) => {
        setSelectedPriority(priority);
        console.log(colors[priority]); // Access the color safely
    };

    const handleCreateTask = () => {
        if (!taskName || !taskDescription || !startTime || !endTime || !selectedPriority) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        // Logic to save the task (e.g., API call or local storage)
        console.log('Task Created:', { taskName, taskDescription, startTime, endTime, selectedPriority, getAlert });
        Alert.alert('Success', 'Task created successfully!');
        navigation.goBack(); // Go back to the previous screen
    };

    return (
        <View style={{ backgroundColor: 'black', flex: 1, padding: 5 }}>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/arrow.png')} style={{ height: 30, width: 30, marginRight: 10 }} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontWeight: '400', fontSize: 25 }}>
                        Create new task
                    </Text>
                </View>
            </View>
            <CalendarStrip
    scrollable
    calendarColor={'#181818'}
    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
    calendarHeaderFormat="LL"
    calendarHeaderStyle={{ color: '#BA83DE' }}
    dateNumberStyle={{ color: '#FFFFFF99', marginTop: 5 }}
    dateNameStyle={{ color: '#FFFFFF99' }}
    highlightDateNumberStyle={{ color: '#BA83DE', marginTop: 5 }}
    highlightDateNameStyle={{ color: '#BA83DE' }}
    iconContainer={{ color: 'red', backgroundColor: '#BA83DE' }}
    onDateSelected={(date) => setSelectedDate(moment(date).format('DD/MM/YYYY'))} // Format to DDMMYYYY
/>

            <Text style={{ color: 'white', fontWeight: '400', fontSize: 22, marginBottom: 15 }}>Schedule</Text>

            <TextInput
                placeholder='Name'
                placeholderTextColor={'white'}
                style={{
                    fontSize: 16,
                    paddingLeft: 15,
                    borderRadius: 10,
                    color: 'white',
                    paddingRight: 15,
                    textAlignVertical: 'center',
                    backgroundColor: '#181818',
                }}
                value={taskName}
                onChangeText={setTaskName}
            />

            <TextInput
                placeholder='Description'
                placeholderTextColor={'white'}
                style={{
                    fontSize: 16,
                    paddingLeft: 15,
                    borderRadius: 10,
                    marginTop: 15,
                    color: 'white',
                    paddingRight: 15,
                    textAlignVertical: 'top',
                    backgroundColor: '#181818',
                    marginBottom: 10,
                }}
                multiline={true}
                numberOfLines={4}
                value={taskDescription}
                onChangeText={setTaskDescription}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20, marginBottom: 10 }}>Start Time</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20, marginBottom: 10 }}>End Time</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 }}>
                <TouchableOpacity
                    style={[styles.timeBox, selectedBox === 'start' && styles.selectedBox]}
                    onPress={() => showDatePicker(true)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/images/time.png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.boxText}>{startTime}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.timeBox, selectedBox === 'end' && styles.selectedBox]}
                    onPress={() => showDatePicker(false)}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={require('../assets/images/time.png')} style={{ height: 20, width: 20 }} />
                        <Text style={styles.boxText}>{endTime}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 20 }}>Priority</Text>

            <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 15 }}>
                {['High', 'Medium', 'Low'].map((priority) => (
                    <TouchableOpacity
                        key={priority}
                        style={[
                            styles.priorityText,
                            { borderColor: selectedPriority === priority ? colors[priority] : 'black' },
                        ]}
                        onPress={() => handlePriorityChange(priority as ColorKeys)}
                    >
                        <Text style={{ color: 'white', fontSize: 20 }}>{priority}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical:  10 }}>
                <Text style={{ color: 'white', fontSize: 16 }}>Get alert for this task</Text>
                <Switch value={getAlert} onValueChange={setGetAlert} />
            </View>

            <View style={{ marginTop: 30 }}>
                <LinearGradient
                    colors={['#BA83DE', '#DE83B0']}
                    style={styles.gradientBackground}
                >
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateTask}>
                        <Text style={styles.createButtonText}>Create Task</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <>
            
            { console.log("name", taskName) }
            { console.log("disc", taskDescription) }
            { console.log("start", startTime) }
            { console.log("end", endTime) }
            { console.log("pripority", selectedPriority ) }
            { console.log("alert", getAlert ) }
            { console.log("date", selectedDate) }
            </>
        </View>
    );
};

const styles = StyleSheet.create({
    timeBox: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#181818',
        alignItems: 'center',
        marginHorizontal: 5,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    selectedBox: {
        borderColor: '#BA83DE',
    },
    boxText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
        marginLeft: 5,
    },
    priorityText: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginHorizontal: 5,
        backgroundColor: '#181818',
    },
    gradientBackground: {
        borderRadius: 10,
        padding: 10,
        alignItems: 'center', // Center the button inside the gradient
    },
 createButton: {
        backgroundColor: 'transparent', // Make background transparent to see gradient
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '100%',
    },
    createButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default CreateTask;