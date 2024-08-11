import { Image, Text, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Tabs } from 'expo-router';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#000000' }}
      headerImage={
        <Image
          source={require('@/assets/images/2.png')}
          style={styles.Logo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Polainas Candys!</ThemedText>
        
      </ThemedView>
      <ThemedView>
        <Text style={styles.texto}>Ignorar pagina - En proceso :D</Text>
      </ThemedView>
      
    </ParallaxScrollView>
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
