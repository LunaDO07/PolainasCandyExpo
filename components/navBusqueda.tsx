import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const NavSinBusqueda = () => {
return (
<View style={styles.navbar}>
    {/* Título */}
    <View style={styles.titleContainer}>
        <Text style={styles.navbarTitle}>Polainas Candys</Text>
    </View>

    {/* Menú, Barra de Búsqueda y Carrito de Compras */}
    <View style={styles.menuContainer}>
        <FontAwesome name="bars" size={24} color="#FFF" style={styles.menuButton} />
        
        <View style={styles.searchContainer}>
        <FontAwesome name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
            style={styles.searchInput}
            placeholder="Buscar dulces"
            placeholderTextColor="#666"
        />
        </View>
        
        <View style={styles.cartContainer}>
        <FontAwesome name="shopping-cart" size={30} color="#FFF" />
        <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>1</Text>
        </View>
        </View>
    </View>
</View>
);
}

const styles = StyleSheet.create({
navbar: {
    marginTop:20,
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
},
titleContainer: {
    alignItems: 'center',
    marginBottom: 10,
},
navbarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
},
menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
menuButton: {
    marginRight: 10,
},
searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCC',
},
searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#333',
    flex: 1,
},
searchIcon: {
    marginLeft: 10,
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
});

export default NavSinBusqueda;
