import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Pressable, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'; // Importa useRouter para navegación

const { width: screenWidth } = Dimensions.get('window');

const NavBusqueda = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter(); // Hook de navegación

    const handleOpenModal = () => setModalVisible(true);
    const handleCloseModal = () => setModalVisible(false);

    const handleNavigation = (path: string) => {
        handleCloseModal(); // Cierra el modal y refresca la página
        router.push({ pathname: path as any }); // Forzar el tipo si es necesario
    };

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
                        <TouchableOpacity onPress={() => handleNavigation('/cart')}>
                            <FontAwesome name="shopping-cart" size={30} color="#FFF" />
                        </TouchableOpacity>
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
                animationType="fade"
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        {/* Encabezado del Modal */}
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Menu</Text>
                            <Pressable style={styles.closeButton} onPress={handleCloseModal}>
                                <Ionicons name="close" size={32} color="#FFF" />
                            </Pressable>
                        </View>

                        {/* Enlaces del Modal */}
                        <View style={styles.views}>
                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/indexCliente')}>
                                <Ionicons name='home' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Inicio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/categorias')}>
                                <Ionicons name='heart' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Categorias</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/cart')}>
                                <Ionicons name='cart' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Carrito</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/datosUser')}>
                                <Ionicons name='person' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Datos de envio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/login')}>
                                <Ionicons name='log-out' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Cerrar Sesión</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
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
        zIndex: 1000,
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
    views: {
        flexDirection: 'column',
        marginTop: 10,
    },
    drawerItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    drawerIcon: {
        marginRight: 10,
        marginBottom:15,
    },
    drawerItem: {
        fontSize: 16,
        fontFamily: 'Laila',
        marginBottom:10,
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
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 250,
        height: '100%',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        alignItems: 'flex-start',
        position: 'absolute',
        left: 0, 
        top: 0,
        paddingTop: 110,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        backgroundColor: '#000',
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
        top: 0,
        width: 250,
    },
    modalTitle: {
        fontSize: 20,
        marginLeft: 30,
        color: '#FFF',
        fontFamily: 'Lailasemi',
        paddingVertical: 20,
    },
    closeButton: {
        backgroundColor: '#000',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});

export default NavBusqueda;
