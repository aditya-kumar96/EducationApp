
import { View } from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Course from './src/screens/Course';
import Contact from './src/screens/Contact';
import UserData from './src/screens/UserData';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' >
        {/* <stack.Screen component={Home} name='Home'/> */}
        <Stack.Screen name='Home' options={{headerShown:false}}>
          {(props) => <Home {...props} name={'Aditya Classes'} />}
        </Stack.Screen>
        
        
        {/* About Screen*/}
        <Stack.Screen name='About' component={About} 
        options={{headerTitleStyle:{
          fontSize:20,
        },headerTitle:"About",headerTitleAlign:'center'}}
        />
        
        
        {/* Contact Screen*/}
        <Stack.Screen name='Contact' component={Contact} 
        // to change in the header
        options={{headerTitleStyle:{
          fontSize:20,
        },
        headerTitle:"Contact",
        headerTitleAlign:'center'
        }}/>
        
        
        
        {/* Course Screen*/}
        <Stack.Screen name='Course' component={Course} 
        options={{headerTitleStyle:{
          fontSize:20,
        }
        ,headerTitle:"Course"
        ,headerTitleAlign:'center'
        }}/>
        
        
        {/* UserData Screen*/}
        <Stack.Screen name='UserData' component={UserData} 
        options={{headerTitleStyle:{
          fontSize:20,
        },headerTitle:"Student's Data",headerTitleAlign:'center'}} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

