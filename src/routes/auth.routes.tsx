import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { HomeState } from '../screens/HomeState';
import { Welcome } from '../screens/Welcome';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name='Home'
        component={Home}
      />

      <Screen 
        name='HomeState'
        component={HomeState}
      />

      <Screen 
        name='Welcome'
        component={Welcome}
      />

    </Navigator>
  )
}