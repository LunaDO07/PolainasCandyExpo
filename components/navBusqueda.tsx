import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const { width: screenWidth } = Dimensions.get('window');

const NavBusqueda = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.titleContainer}>
                    <Text style={styles.navbarTitle}>POLAINA'S CANDYS</Text>
                </View>

                <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={handleOpenModal}>
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

            {/* Modal del menú */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="none"
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Pressable style={styles.closeButton} onPress={handleCloseModal}>
                            <Ionicons name="close" size={24} color="#FFF" />
                        </Pressable>
                        <Text style={styles.drawerItem}>Inicio</Text>
                        <Text style={styles.drawerItem}>Datos de usuario</Text>
                        <Text style={styles.drawerItem}>Carrito</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:25,
    },
    navbar: {
        backgroundColor: 'rgb(39, 39, 39)',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#1D1D1D',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: 1000, // Asegúrate de que esté sobre otros contenidos
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
        fontSize: 17,
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end', // Alinea al modal a la derecha
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 250,
        height:'100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        position: 'absolute',
        left: 0, // Alinea el modal al borde derecho
        top: 0, // Alinea el modal al borde superior
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 10,
    },
    drawerItem: {
        fontSize: 18,
        paddingVertical: 10,
        fontFamily: 'Laila',
    },
});

export default NavBusqueda;
