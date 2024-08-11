import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

export const NavAdmn = () => {
return (
<View style={styles.navbar}>
    <Image source={require('../assets/images/2.png')} style={styles.logo} />
    <Text style={styles.navbarTitle}>Polaina's Candys</Text>
</View>
    
)};

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
    logo: {
        width: 60,
        height: 61,
        marginRight: 10,
        borderRadius: 20,
    },
    navbarTitle: {
        textAlign:'center',
        fontSize: 25,
        color: '#FFF',
        flex: 1,
        fontFamily: 'Lailasemi',
    },
})