import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export const NavAdmn = () => {
const router = useRouter();

const handleCheckout = () => {
    router.push('/sucursales'); 
}
return (
<View style={styles.navbar}>
<TouchableOpacity  onPress={handleCheckout}>
<Image source={require('../assets/images/2.png')} style={styles.logo} />
</TouchableOpacity>
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