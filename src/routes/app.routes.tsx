// import React from "react";
// import { Platform } from 'react-native'

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { useTheme } from "@react-navigation/native";

// import { Octicons, Entypo } from '@expo/vector-icons';
// import theme from "../theme";

// import { Home } from "../screens/Home";

// const { Navigator, Screen } = createBottomTabNavigator();

// export function AppRoutes(){

//   return (
//     <Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor:theme.colors.dark,
//         tabBarInactiveTintColor: theme.colors.dark,
//         tabBarLabelPosition: 'beside-icon',
//         tabBarStyle: {
//           height: 60,
//           paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//         }
//       }}
//     >
    
//     <Screen 
//       name="Home"
//       component={Home}
//       options={{
//         tabBarIcon: (({ size, color}) =>
//         )
//       }}
//     />

//     </Navigator>
//   )
// }