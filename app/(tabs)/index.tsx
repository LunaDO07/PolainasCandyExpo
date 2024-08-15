import { Image, Text, StyleSheet, View, Animated } from 'react-native';
import React, { useState, useEffect } from 'react';
import LottieView from 'lottie-react-native'; // Importa LottieView
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';

const TypingText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setInterval(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 200); // Tiempo entre letras en milisegundos

      return () => clearInterval(timer);
    }
  }, [index, text]);

  useEffect(() => {
    setIndex(0); // Resetear el índice cuando cambie el texto
    setDisplayedText(''); // Limpiar el texto mostrado
  }, [text]);

  return <Text style={styles.welcomeText}>{displayedText}</Text>;
};

const TabLayout = () => {
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [fadeAnim] = useState(new Animated.Value(0)); // Estado para la animación de texto
  const router = useRouter();
  const colorScheme = useColorScheme();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4200, // Duración de la animación en milisegundos
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setIsLoading(false);
      router.push('/login'); // Redirige al login después de la carga
    }, 4200);
  }, [router, fadeAnim]);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <TypingText text="Polainas Candys" />
          <Image source={require('../../assets/images/2.png')} style={styles.logoImage} />
        </View>
        <LottieView
          source={require('../../assets/lollipop.json')}
          autoPlay
          loop
          style={styles.loadingAnimation}
        />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return null; // Renderiza null cuando no está cargando
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    height: 212,
    width: 209,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  loadingAnimation: {
    width: 150,
    height: 150,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
});

export default TabLayout;