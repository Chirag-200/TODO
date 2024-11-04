import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home:undefined
    CreateTask:{
        id?:number;
        name?: string;
        completed?: boolean;
        date?: string; 
        todo?: string;
        priority?: string; 
        time?: any; 
      };
      DisplayTodos:{
        isCompleted?:boolean
      }
}

export type HomeScreenNavigationProps= NativeStackScreenProps<RootStackParamList,
"Home"
>;

export type CreateTaskScreenNavigationProps= NativeStackScreenProps<RootStackParamList,
"CreateTask"
>;

export type DisplayTodosScreenNavigationProps= NativeStackScreenProps<RootStackParamList,
"DisplayTodos"
>;