import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UsersProvider} from './src/context/UsersProvider'
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function App(): React.ReactElement {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={HomeScreen} />
          <Stack.Screen name="Usuario" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

export default App;
