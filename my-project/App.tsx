import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { RootStackParamList } from './router';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import { Button } from 'react-native';

const boxes = new Array(10).fill(null).map((v, i)=> i+1);

const Stack = createNativeStackNavigator <RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen 
          name="Details" 
          component={Details} 
          options={({route})=>({
            headerRight: () => {
              return (
                <Button
                  title="Buy"
                  onPress={()=>{}}
                  disabled={route.params.stock === 0}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}