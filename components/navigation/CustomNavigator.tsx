import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';

type CustomNavigatorProps = {
showRegistro?: boolean;
showLogin?: boolean;
style?: ViewStyle;
};

export function CustomNavigator({ showLogin = true, showRegistro = true, style }: CustomNavigatorProps) {
return (
    <View style={[style]}>
    {showRegistro && (
        <Link href="/registro" style={styles.registrotext}>
            <Text>
                ¿No tienes cuenta? <Text style={styles.registrocolor}>Regístrate</Text>
            </Text>
        </Link>
    )}
    {showLogin && (
        <Link href="/login" style={styles.link}>
            <Text style={styles.linkText}>
                ¿Ya tienes cuenta? <Text style={styles.linkHighlight}>Inicia sesión</Text>
            </Text>
        </Link>
    )}
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
    fontSize: 16,
    textAlign: 'center',
},
linkText: {
    color: '#333',
    fontFamily: 'Josefinmedium',
},
linkHighlight: {
    color: '#1764AB',
    textDecorationLine: 'underline',
    fontFamily: 'Josefinmedium',
},
});
