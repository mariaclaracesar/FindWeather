import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Welcome } from '../screens/Welcome';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='Home'
        component={Home}
      />
      
      <Screen 
        name='Welcome'
        component={Welcome}
      />

    </Navigator>
  )
}