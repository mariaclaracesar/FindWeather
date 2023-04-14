import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes';

import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from "@expo-google-fonts/overpass";


export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <>
      <StatusBar 
          style='light'
          backgroundColor="transparent"
          translucent
        />
      <Routes />
    </>
  );
}
