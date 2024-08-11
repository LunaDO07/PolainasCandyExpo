import { Image, Text, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Tabs } from 'expo-router';
import NavBusqueda from '../../components/navBusqueda';

export default function HomeScreen() {
  return (
   <NavBusqueda/>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }, 
  Logo: {
    height: 300,
    width: 295,
    bottom: 0,
    left: 0,
  },
  texto:{
    marginTop:30,
    fontSize:18,
  }
});
