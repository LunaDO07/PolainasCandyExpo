import { NavAdmn } from '@/components/NavAdmn';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput, Image, Dimensions, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window'); // ancho de la pantalla

const PolainasCandys = () => {

const router = useRouter();

const irSucursal = () => {
    router.push('/TablaSucursales'); 
}

const irProductos = () => {
    router.push('/TablaProductos'); 
}

return (
<ScrollView 
contentContainerStyle={styles.scrollContainer} 
style={styles.scrollView}
>
{/* Navbar superior */}
    <NavAdmn/>


<Text style={styles.textAdmn}>Administrador</Text>

{/* Sección de sucursales */}
<View style={styles.pageContainer}>
    <View style={styles.branchesWrapper}>
    {/* Título de Sucursales */}

        <View style={styles.sucursalesHeader}>
            <Text style={styles.sucursalesText}>Sucursales</Text>
        </View>

    {/* Nombre de la sucursal*/}
    <View style={styles.branchWrapper}>
        <Text style={styles.branchTitle}>Nombre de sucursal</Text>
        <View style={styles.branchContent}>
            <Image
            source={{ uri: 'https://img.freepik.com/vector-premium/boton-icono-contorno-linea-delgada-ubicacion-lugar-tienda_678192-2397.jpg' }} // Reemplaza con la URL de la imagen
            style={styles.branchImage}
            />
            <View style={styles.actionsContainer}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.innerButton}>
                            <Text style={styles.buttonText}>Administrar Productos</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    </View>
{/* aqui van debajo las otras */}
    </View>

<View style={{flexDirection:'row'}}>
    {/* Botón "Administrar Sucursale" */}
    <TouchableOpacity style={styles.adminButton} onPress={irSucursal}>
    <Text style={styles.adminButtonText}>Sucursales</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.adminButton} onPress={irProductos}>
    <Text style={styles.adminButtonText}>Productos</Text>
    </TouchableOpacity>
</View>
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
pageContainer: {
    flex: 1,
    padding: 18,
    backgroundColor: '#FFF',
},
textAdmn:{
    paddingVertical:10,
    textAlign:'center',
    fontSize:16,
    fontFamily:'Laila',
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
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(167, 167, 167, 0.58)', 
    marginBottom: 10,
    backgroundColor:'rgb(255, 255, 255)',
    fontFamily:'Laila',
},
sucursalesText: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    fontFamily:'Josefbold',
},
branchWrapper: {
    marginBottom: 20,
},
branchTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#232F3E', 
    fontFamily:'Josefbold',
},

branchContent: {
    flexDirection: 'row',
    borderRadius:10,
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: 'rgba(62, 62, 62, 0.59)',
    backgroundColor:'rgb(248, 248, 248)', //Modificar
},
branchImage: {
    width: 60,
    height: 70,
    borderRadius: 10,
    marginHorizontal:10,
},
actionsContainer: {
    flexDirection: 'column',
    flex: 1,
},

actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 20, // Ajusta el padding horizontal
    borderRadius: 8,
    marginHorizontal: 2,
    width: 230, // Ajusta el ancho a 100
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
},
actionButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
},

buttonContainer: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
},
button: {
    width: 240,
    height: 53,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    elevation: 6,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 7,
},
innerButton: {
    width: 241,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(62, 62, 62, 0.55)',
    borderWidth: 1.5,
},
buttonText: {
    color: 'rgb(0, 0, 0)',
    fontSize: 16,
    fontFamily: 'Josefinmedium',
},

adminButton: {
    backgroundColor: 'rgb(176, 116, 180)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    width:170,
    marginHorizontal:10,
    marginTop: 20,
    elevation:10,
    borderWidth:1,
    borderColor:'rgb(91, 18, 99)',
},
adminButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Josefbold',
    textAlign:'center',
    lineHeight: 25,
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