import React from "react";
import { NavigationContainer } from '@react-navigation/native'

//import { AppRoutes } from './app.routes';
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return (
    // compartilha o naviagtion com toda a aplicação 
    <NavigationContainer>
      <AuthRoutes />
      {/* <AuthRoutes /> */}
    </NavigationContainer>
  );
}