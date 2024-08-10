import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavSinBusqueda = () => {
// Datos de ejemplo
const ticketData = {
    articulosTotales: 4,
};


return (
<View style={styles.navbar}>
    <FontAwesome name="bars" size={24} color="#FFF" style={styles.menuButton} />
    <Text style={styles.navbarTitle}>Polainas Candys</Text>
    <View style={styles.cartContainer}>
        <FontAwesome name="shopping-cart" size={30} color="#FFF" />
    <View style={styles.cartBadge}>
        <Text style={styles.cartBadgeText}>{ticketData.articulosTotales}</Text>
    </View>
    </View>
</View>
)
}
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
menuButton: {
    marginRight: 10,
},
navbarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center',
    color: '#FFF',
    flex: 1,
},
cartContainer: {
    position: 'relative',
},
cartBadge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: '#65b196',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
},
cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
},
})

export default NavSinBusqueda