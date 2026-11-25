import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { RootStackParamList, Routes } from './router';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import News from './News';
import RenderingDataCollection from './screens/RenderingDataCollection';
import ListContainer from './ListContainer/ListContainer';
import WhereAmI from './GeoLocation/WhereAmI';
import WhatsAroundMe from './GeoLocation/WhatsAroundMe';
import PlottingPoint from './GeoLocation/PlottingPoint';
import PlottingOverlays from './GeoLocation/PlottingOverlays';
import WeatherAroundMe from './GeoLocation/WeatherAroundMe';
import CollectingTextInput from './CollectingTextInput';
import { Button, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SelectingOptions from './SelectingOptions';


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
          <Tab.Screen name="ListContainer" component={ListContainer} />
          <Tab.Screen name="WhereAmI" component={WhereAmI} />
          <Tab.Screen name="WhatsAroundMe" component={WhatsAroundMe} />
          <Tab.Screen name="PlottingPoint" component={PlottingPoint} />
          <Tab.Screen name="PlottingOverlays" component={PlottingOverlays} />
          <Tab.Screen name="WeatherAroundMe" component={WeatherAroundMe} />
        </Tab.Navigator>
      )}
      {Platform.OS === 'android' && (
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={Settings} />
          <Drawer.Screen name="RenderingDataCollection" component={RenderingDataCollection} />
          <Drawer.Screen name="ListContainer" component={ListContainer} />
          <Drawer.Screen name="WhereAmI" component={WhereAmI} />
          <Drawer.Screen name="WhatsAroundMe" component={WhatsAroundMe} />
          <Drawer.Screen name="PlottingPoint" component={PlottingPoint} />
          <Drawer.Screen name="PlottingOverlays" component={PlottingOverlays} />
          <Drawer.Screen name="WeatherAroundMe" component={WeatherAroundMe} />
          <Drawer.Screen name="CollectingTextInput" component={CollectingTextInput} />
          <Drawer.Screen name="SelectingOptions" component={SelectingOptions} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}