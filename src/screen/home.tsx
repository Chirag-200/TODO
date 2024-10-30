import React from 'react';
import { Image, View, StyleSheet, TextInput, Text } from 'react-native';
import CommonText from '../common/CommonText';
import CommonTextInput from '../common/CommonTextInput';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = () => {
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
            <View>
            {/* <TextInput style = {{flexDirection: 'row', alignItems: 'center', borderWidth:1, borderColor:'white'}}/> */}
            {/* <Image style={{height:20,width:20}} tintColor={'red'} source={require('../assets/images/search.png')}/> */}
            {/* <CommonTextInput placeholderText={'Search Task Here'} /> */}

            {/* Adding some style for better visibility */}
            {/* </TextInput> */}
            
            <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'rgb(30,30,30)',marginHorizontal:10,borderRadius:10}}>
            <Image style={{height:18,width:18,marginHorizontal:10}} tintColor={'white'} source={require('../assets/images/search.png')}/>

            <TextInput style={{ width: '90%', borderRadius:10}}
            placeholder='Search Task Here'
            placeholderTextColor={'white'}
            />

            </View>
            </View>

            <View style = {{flexDirection: 'row', alignItems:'center' , alignContent:'space-between' }}>
            <Text style = {{color: 'white' ,width:'80%', fontWeight: '400', margin:10, fontSize: 22}}>Progress</Text>
            <Text style = {{color:'#BA83DE', flex:1,fontSize: 16}}>See All</Text>
            </View>


            <View style = {{backgroundColor:'#181818' , margin: 10, borderRadius:10, padding: 10}}>
            <Text style = {{color: 'white'}}>Daily Tasks</Text>
            <Text style = {{color: 'rgba(255,255,255,0.8)'}}>2/3 Tasks Completed</Text>

            <View style = {{flexDirection: 'row'}}>
            <Text style = {{color: 'white', fontWeight:'200', width: '91%'}}>You are almost done go ahead</Text>  
            <Text style = {{color: 'white'}}>66%</Text>
            </View>
            <Image source={require('../assets/images/bar.png')} style = {{height:'12%', width:'100%'}}/>

            </View>


            <View style = {{flexDirection: 'row', alignItems:'center' , alignContent:'space-between' }}>
                
            <Text style = {{color: 'white' ,width:'80%', fontWeight: '400', margin:10, fontSize: 22}}>Today's Tasks</Text>
            <Text style = {{color:'#BA83DE', flex:1,fontSize: 16}}>See All</Text>
            </View>

            <View style = {{ flexDirection:'row', backgroundColor: 'rgb(31,31,31)', borderRadius: 10}}>

            {/* <View style = {{width: '10%', height: '100%',flex:0.1 ,backgroundColor:'blue'}}></View> */}
                <View style = {{backgroundColor: 'rgb(249,203,187)', width: '2.5%', borderBottomLeftRadius: 10, borderTopLeftRadius:10 }}>
                </View>
                <View>

                <Text style = {{color:'white' , width: '280%' ,textAlignVertical: 'center', borderRadius: 10 , paddingTop: 15 , paddingLeft:15 }}>Mobile App Research</Text>
                <View style = {{flexDirection: 'row'}}>
                <Image source={require('../assets/images/bag.png')} style = {{height: 18, width: 16, marginLeft:15 , marginBottom: 10}}/> 
                <Text style = {{color:'rgba(255,255,255,0.8)'}}>  4 Oct</Text>
                </View>              
                </View>

            </View>


            <View style = {{flexDirection: 'row', alignItems:'center' , alignContent:'space-between' , marginTop: 20}}>
                
                <Text style = {{color: 'white' ,width:'80%', fontWeight: '400', margin:10, fontSize: 22}}>Tommorrow Task</Text>
                <Text style = {{color:'#BA83DE', flex:1,fontSize: 16}}>See All</Text>
                </View>



        <Image source={require('../assets/images/add.png')} style = {{height:75 , width:71 , alignSelf : 'flex-end'}}/>
            
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
