import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, TextInput, Text, TouchableOpacity, FlatList } from 'react-native';
import CommonText from '../common/CommonText';
import CommonTextInput from '../common/CommonTextInput';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from './test';
import CheckBox from '@react-native-community/checkbox';
import CreateTask from '../screen/create';
import { HomeScreenNavigationProps, RootStackParamList } from '../navigation/types';


interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    isChecked: boolean;
}

  

const Home: React.FC = ({navigation}: any) => {
    // const navigation = useNavigation<HomeScreenNavigationProps>();
   

    const [list, setLists] = useState<Todo[]>([]);
    const colorArray = ['#FACBBA', '#D7F0FF', '#FAD9FF']; 

    const countCheckedItems = () => {
        return list.filter(item => item.isChecked).length;
    };

    const finding = () => {
        return Math.round((countCheckedItems() / list.length) * 100);
    };

    const fetchToDoS = async () => {
        try {
            const results = await fetch('https://dummyjson.com/todos');
            if (!results.ok) {
                throw new Error('Error fetching todos');
            }
            const data = await results.json();
            const modifiedData: Todo[] = data.todos.map((todo: any) => ({
                ...todo,
                isChecked: todo.completed, 
            }));
            setLists(modifiedData);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        fetchToDoS();
    }, []);

    const toggleCheckbox = (id: number) => {
        setLists(prevLists =>
            prevLists.map(todo =>
                todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
            )
        );
    };

    const completedtask = () => {
        return list.filter(item => item.isChecked).length;
    };

    const calculateCompletionPercentage = () => {
        const totalTasks = list.length;
        const completedTasks = completedtask();
        return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <CommonText
                        FirstText='You have got 5 tasks'
                        FirstTextStyle={{ color: 'white', fontWeight: '600', fontSize: 25 }}
                        numberOfLines={2}
                    />
                    <CommonText
                        FirstText='today to complete'
                        FirstTextStyle={{ color: 'white', fontWeight: '600', fontSize: 25 }}
                    />
                </View>
                <View style={styles.gradientContainer}>
                    <LinearGradient
                        colors={['#BA83DE', 'rgba(217, 217, 217, 0)']}
                        style={styles.gradient}
                    >
                        <Image
                            source={require('../assets/images/image1.png')}
                            style={styles.image}
                        />
                    </LinearGradient>
                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgb(30,30,30)', marginHorizontal: 10, borderRadius: 10 }}>
                <Image style={{ height: 18, width: 18, marginHorizontal: 10 }} tintColor={'white'} source={require('../assets/images/search.png')} />
                <TextInput
                    style={{ width: '90%', borderRadius: 10 }}
                    placeholder='Search Task Here'
                    placeholderTextColor={'white'}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                <Text style={{ color: 'white', width: '80%', fontWeight: '400', margin: 10, fontSize: 22 }}>Progress</Text>
                <Text style={{ color: '#BA83DE', flex: 1, fontSize: 16 }}>See All</Text>
            </View>

            <View style={{ backgroundColor: '#181818', margin: 10, borderRadius: 10, padding: 10 }}>
                <Text style={{ color: 'white' }}>Daily Tasks</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)' }}>{completedtask()}/{list.length} Tasks Completed</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', fontWeight: '200', width: '91%' }}>You are almost done, go ahead</Text>
                    <Text style={{ color: 'white' }}>{calculateCompletionPercentage()}%</Text>
                </View>
                <ProgressBar progress={0.5} />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between' }}>
                <Text style={{ color: 'white', width: '80%', fontWeight: '400', margin: 10, fontSize: 22 }}>Today's Tasks</Text>
                <Text style={{ color: '#BA83DE', flex: 1, fontSize: 16 }}>See All</Text>
            </View>

            <FlatList
                data={list}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ flexDirection: 'row', backgroundColor: 'rgb(31,31,31)', borderRadius: 10, marginBottom: 10, alignItems: 'center' , marginHorizontal:10}}>
                        <View style={{ backgroundColor: colorArray[index % colorArray.length], width: '2.5%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: 'white', width: '100%', textAlignVertical: 'center', borderRadius: 10, paddingTop: 15, paddingLeft: 15, marginBottom: 2 }} numberOfLines={2}>
                                {item.todo}
                            </Text>
                            <View style={{ flexDirection: 'row', alignContent: 'center', marginBottom: 10 }}>
                                <Image source={require('../assets/images/bag.png')} style={{ height: 18, width: 16, marginLeft: 15, marginBottom: 10 }} />
                                <Text style={{ color: 'rgba(255,255,255,0.8)' }}>  4 Oct</Text>
                            </View>
                        </View>
                        <CheckBox
                            disabled={false}
                            value={item.isChecked} 
                            onValueChange={() => toggleCheckbox(item.id)} 
                            tintColors={{ true: 'rgb(185,134,220)', false: 'rgb(185,134,220)' }}
                            style={{ alignSelf: 'center', marginLeft: 'auto' }}
                        />
                    </View>
                )}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'space-between', marginTop: 20 }}>
                <Text style={{ color: 'white', width: '80%', fontWeight: '400', margin: 10, fontSize: 22 }}>Tomorrow's Tasks</Text>
                <Text style={{ color: '#BA83DE', flex: 1, fontSize: 16 }}>See All</Text>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate('CreateTask')} style={{alignSelf:'flex-end'}}>
                <Image source={require('../assets/images/add.png')} style={{ height: 75, width: 71 ,}} />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
    },
    gradientContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
});

export default Home;