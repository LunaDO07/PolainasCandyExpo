    import React, { useRef } from 'react';
    import { View, Text, TextInput, TouchableOpacity, StyleSheet, DrawerLayoutAndroid } from 'react-native';
    import { FontAwesome } from '@expo/vector-icons';
    import Ionicons from '@expo/vector-icons/Ionicons';

    const NavBusqueda = () => {
    // Define el tipo de referencia
    const drawer = useRef<DrawerLayoutAndroid>(null);

    const navigationView = () => (
        <View style={styles.drawerContainer}>
            <View style={{height:160, backgroundColor:'rgb(0, 0, 0)'}}></View>
                <Text style={styles.drawerItem}>Inicio</Text>
                <Text style={styles.drawerItem}>Datos de usuario</Text>
                <Text style={styles.drawerItem}>Carrito</Text>
        </View>
    );

    return (
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={navigationView}
        >

        <View style={styles.navbar}>
            <View style={styles.titleContainer}>
            <Text style={styles.navbarTitle}>POLAINA'S CANDYS</Text>
            </View>

            <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => drawer.current?.openDrawer()}>
                <FontAwesome name="bars" size={24} color="#FFF" style={styles.menuButton} />
            </TouchableOpacity>
            
            <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} color="#666" style={styles.searchIcon} />
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
        </DrawerLayoutAndroid>
    );
    };


const styles = StyleSheet.create({
navbar: {
    marginTop:30,
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
},
titleContainer: {
    alignItems: 'center',
    marginBottom: 15,
},
navbarTitle: {
    fontSize: 22,
    color: '#ffffff',
    fontFamily: 'Lailasemi',
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
    backgroundColor: '#ffffff',
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CCC',
},
searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: '#333',
    flex: 1,
    fontFamily: 'Josefinli',
    fontSize:17,
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
drawerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',  
},
drawerItem: {
    fontSize: 18,
    paddingLeft:30,
    paddingVertical:10,
    fontFamily: 'Laila',
},
headermenu:{
    backgroundColor:'rgb(0, 0, 0)',
}

});

export default NavBusqueda;
