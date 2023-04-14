import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes';

export function Routes(){
  return (
    // compartilha o naviagtion com toda a aplicação 
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}