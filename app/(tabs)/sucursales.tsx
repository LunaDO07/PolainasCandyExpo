import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image, Dimensions, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // ancho de la pantalla

const PolainasCandys = () => {
return (
    <ScrollView 
    contentContainerStyle={styles.scrollContainer} 
    style={styles.scrollView}
    >
    {/* Navbar superior */}
    <View style={styles.navbar}>
        <Image
        source={{ uri: 'https://example.com/logo.png' }} // Reemplaza con la URL de tu logotipo
        style={styles.logo}
        />
        <Text style={styles.navbarTitle}>Polainas Candys</Text>

    </View>

    {/* Sección de sucursales */}
    <View style={styles.pageContainer}>
        <View style={styles.branchesWrapper}>
        {/* Título de Sucursales */}
        <View style={styles.sucursalesHeader}>
            <Text style={styles.sucursalesText}>Sucursales</Text>
        </View>

        {/* Pabellón de Arteaga */}
        <View style={styles.branchWrapper}>
            <Text style={styles.branchTitle}>Pabellón de Arteaga</Text>
            <View style={styles.branchContainer}>
            <View style={styles.branchContent}>
                <Image
                source={{ uri: 'https://img.freepik.com/vector-premium/boton-icono-contorno-linea-delgada-ubicacion-lugar-tienda_678192-2397.jpg' }} // Reemplaza con la URL de la imagen
                style={styles.branchImage}
                />
                <View style={styles.actionsContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.viewButton]}>
                    <Text style={styles.actionButtonText}>Ver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.addButton]}>
                    <Text style={styles.actionButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
                    <Text style={styles.actionButtonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
        </View>

        {/* Rincón de Romos */}
        <View style={styles.branchWrapper}>
            <Text style={styles.branchTitle}>Rincón de Romos</Text>
            <View style={styles.branchContainer}>
            <View style={styles.branchContent}>
                <Image
                source={{ uri: 'https://img.freepik.com/vector-premium/boton-icono-contorno-linea-delgada-ubicacion-lugar-tienda_678192-2397.jpg' }} // Reemplaza con la URL de la imagen
                style={styles.branchImage}
                />
                <View style={styles.actionsContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.viewButton]}>
                    <Text style={styles.actionButtonText}>Ver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.addButton]}>
                    <Text style={styles.actionButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
                    <Text style={styles.actionButtonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
        </View>

        {/* San Antonio */}
        <View style={styles.branchWrapper}>
            <Text style={styles.branchTitle}>San Antonio</Text>
            <View style={styles.branchContainer}>
            <View style={styles.branchContent}>
                <Image
                source={{ uri: 'https://img.freepik.com/vector-premium/boton-icono-contorno-linea-delgada-ubicacion-lugar-tienda_678192-2397.jpg' }} // Reemplaza con la URL de la imagen
                style={styles.branchImage}
                />
                <View style={styles.actionsContainer}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.viewButton]}>
                    <Text style={styles.actionButtonText}>Ver</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.deleteButton]}>
                    <Text style={styles.actionButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.addButton]}>
                    <Text style={styles.actionButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.actionButton, styles.editButton]}>
                    <Text style={styles.actionButtonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
        </View>
        </View>

        {/* Botón "Administrar Sucursale" */}
        <TouchableOpacity style={styles.adminButton}>
        <Text style={styles.adminButtonText}>Administrar Sucursales</Text>
        </TouchableOpacity>
    </View>

    {/* Navbar inferior con íconos de logs y usuario */}
    </ScrollView>
);
};

const styles = StyleSheet.create({

scrollContainer: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight, // Añade el padding necesario para la barra de estado
    backgroundColor: '#F4F4F4', // Fondo gris claro para la página
},
scrollView: {
    flex: 1,
},
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
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor:'rgb(255, 255, 255)',
},
navbarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF', // Blanco para el título
    flex: 1,
},
pageContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
},
branchesWrapper: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#D6D6D6', // Gris muy claro
    borderRadius: 10,
    backgroundColor: '#FFF', // Fondo blanco para el recuadro de sucursales
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
},
sucursalesHeader: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5', // Gris muy claro
    marginBottom: 10,
},
sucursalesText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
},
branchWrapper: {
    marginBottom: 20,
},
branchTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#232F3E', // Azul oscuro
},
branchContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
},
branchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
},
branchImage: {
    width: 60,
    height: 70,
    borderRadius: 10,
    marginRight: 20, // Ajuste del espacio entre la imagen y los botones
},
actionsContainer: {
    flexDirection: 'column',
    flex: 1,
},
buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
},
actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12, // Ajusta el padding horizontal
    borderRadius: 8,
    marginHorizontal: 4,
    width: 100, // Ajusta el ancho a 100
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
},
viewButton: {
    backgroundColor: '#FF9E9E', // Amarillo cálido
},
deleteButton: {
    backgroundColor: '#F03C2F', // Rojo intenso
},
addButton: {
    backgroundColor: '#65DBA2', // Verde brillante
},
editButton: {
    backgroundColor: '#FBC46B', // Amarillo dorado
},
actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
},
adminButton: {
    backgroundColor: '#A874B7',

    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
},
adminButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
},
footerNavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#232F3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
},
footerText: {
    color: '#FFF',
    fontSize: 14,
},
footerIcons: {
    flexDirection: 'row',
},
icon: {
    marginLeft: 20,
},
});

export default PolainasCandys;