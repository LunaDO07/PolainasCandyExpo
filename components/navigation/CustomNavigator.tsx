import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type CustomNavigatorProps = {
showLinks: {
    inicio?: boolean;
    registro?: boolean;
    login?: boolean;
    // Agrega más propiedades aquí según sea necesario
};
style?: ViewStyle;
};

export function CustomNavigator({ showLinks, style }: CustomNavigatorProps) {
return (
    <View style={[style]}>
    {showLinks.inicio && (
        <Link href="/indexCliente" style={styles.link}>
        <View style={styles.linkContainer}>
            <Ionicons name="home-outline" size={24} color="#333" style={styles.icon} />
            <Text style={styles.linkText}>Inicio</Text>
        </View>
        </Link>
    )}
    {showLinks.registro && (
        <Link href="/registro" style={styles.registrotext}>
        <Text>
            ¿No tienes cuenta? <Text style={styles.registrocolor}>Regístrate</Text>
        </Text>
        </Link>
    )}
    {showLinks.login && (
        <Link href="/login" style={styles.link}>
        <View style={styles.linkContainer}>
            <Text style={styles.linkText}>
            ¿Ya tienes cuenta? <Text style={styles.linkHighlight}>Inicia sesión</Text>
            </Text>
        </View>
        </Link>
    )}
    {/* Agrega más enlaces aquí según sea necesario */}
    </View>
);
}

const styles = StyleSheet.create({
registrotext: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Josefinmedium',
    marginTop: 30,
},
registrocolor: {
    color: '#113696',
    fontWeight: '600',
    textDecorationLine: 'underline',
},
link: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
},
linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
linkText: {
    color: '#333',
    fontFamily: 'Laila',
    fontSize: 16,
    marginLeft: 10, // Ajusta la separación entre el icono y el texto
},
icon: {
    marginRight: 10, // Ajusta la separación entre el icono y el borde izquierdo del contenedor
},
linkHighlight: {
    color: '#1764AB',
    textDecorationLine: 'underline',
    fontFamily: 'Josefinmedium',
},
});
