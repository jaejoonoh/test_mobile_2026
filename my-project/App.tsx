import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { RootStackParamList, Routes } from './router';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import News from './News';
import RenderingDataCollection from './screens/RenderingDataCollection';
import { Button, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const boxes = new Array(10).fill(null).map((v, i)=> i+1);

//const Stack = createNativeStackNavigator <RootStackParamList>();
const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();

export default function App() {
  return (
    <NavigationContainer>
      {Platform.OS === 'ios' && (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Settings" component={Settings} />
          <Tab.Screen name="RenderingDataCollection" component={RenderingDataCollection} />
        </Tab.Navigator>
      )}
      {Platform.OS === 'android' && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="RenderingDataCollection" component={RenderingDataCollection} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}