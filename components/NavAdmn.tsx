import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Modal, Pressable, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';



export const NavAdmn = () => {
const router = useRouter();

const handleCheckout = () => {
    router.push('/sucursales'); 
}

const [modalVisible, setModalVisible] = useState(false);
const handleOpenModal = () => setModalVisible(true);
const handleCloseModal = () => setModalVisible(false);

const handleNavigation = (path: string) => {
    handleCloseModal(); // Cierra el modal y refresca la página
    router.push({ pathname: path as any }); // Forzar el tipo si es necesario
};

return (
<View style={styles.navbar}>

    <TouchableOpacity onPress={handleOpenModal}>
        <FontAwesome name="bars" size={24} color="#FFF" style={styles.menuButton} />
    </TouchableOpacity>


    <TouchableOpacity  onPress={handleCheckout}>
        <Image source={require('../assets/images/2.png')} style={styles.logo} />
    </TouchableOpacity>
        <Text style={styles.navbarTitle}>Polaina's Candys</Text>

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
                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/sucursales')}>
                                <Ionicons name='home' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Inicio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/tablaProductos')}>
                                <Ionicons name='storefront' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Ver Productos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/tablaSucursales')}>
                                <Ionicons name='location-sharp' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Ver Sucursales</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.drawerItemContainer} onPress={() => handleNavigation('/logs')}>
                                <Ionicons name='document-text' size={24} color='rgb(0, 0, 0)' style={styles.drawerIcon} />
                                <Text style={styles.drawerItem}>Logs</Text>
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
    
    menuButton: {
        marginRight: 10,
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
    views: {
        flexDirection: 'column',
        marginTop: 10,
    },
})