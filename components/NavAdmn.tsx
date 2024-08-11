import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export const NavAdmn = () => {
    const router = useRouter();

    const handleCheckout = () => {
        router.push('/sucursales'); 
    }

    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={handleCheckout} style={styles.logoContainer}>
                <Image source={require('../assets/images/2.png')} style={styles.logo} />
                <Text style={styles.homeText}>Inicio</Text>
            </TouchableOpacity>
            <Text style={styles.navbarTitle}>Polaina's Candys</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000000',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1D1D1D',
    },
    logoContainer: {
        alignItems: 'center',
        marginRight: 10,
    },
    logo: {
        width: 60,
        height: 61,
        borderRadius: 20,
    },
    homeText: {
        fontSize: 14,
        color: '#FFF',
        marginTop: 5,
        fontFamily: 'Lailasemi',
    },
    navbarTitle: {
        textAlign: 'center',
        fontSize: 25,
        color: '#FFF',
        flex: 1,
        fontFamily: 'Lailasemi',
    },
});
