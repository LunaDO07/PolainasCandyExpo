import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, StatusBar } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import NavBusqueda  from '../../components/navBusqueda';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

const Ticket = () => {
// Datos de ejemplo
const ticketData = {
    idCompra: '12345',
    fechaHora: '2024-08-04 14:30',
    idSucursal: '001',
    nombreSucursal: 'Sucursal Principal',
    direccionSucursal: 'Calle Falsa 123, Ciudad, Estado',
    productos: [
    { nombre: 'Producto 1', cantidad: 2, precioUnitario: 10.00, precioTotal: 20.00 },
    { nombre: 'Producto 2', cantidad: 1, precioUnitario: 15.00, precioTotal: 15.00 },
    ],
    articulosTotales: 4,
    subtotal: 35.00,
    iva: 5.00,
    costoEnvio: 2.00,
    total: 42.00,
};
const router = useRouter();
 // linea de redireccion
const handleCheckout = () => {
    router.push('/indexCliente'); 
}

return (
    <View style={styles.container}>
    <NavBusqueda/>

    {/* Contenido del ticket */}
    <ScrollView contentContainerStyle={styles.ticketContainer}>

        {/* REVISAR CAMPOS DE TICKET EN BACK */}
        <View style={styles.ticketBox}>
            <Text style={styles.ticketTitle}>ID de Compra: {ticketData.idCompra}</Text>
            <Text style={styles.ticketInfo}>Fecha y Hora: {ticketData.fechaHora}</Text>
            <Text style={styles.ticketInfo}>ID de Sucursal: {ticketData.idSucursal}</Text>
            <Text style={styles.ticketInfo}>Nombre de la Sucursal: {ticketData.nombreSucursal}</Text>
            <Text style={styles.ticketInfo}>Dirección de la Sucursal: {ticketData.direccionSucursal}</Text>
        <View style={styles.separator} />

        {/* Detalles del producto */}
        <View style={styles.productHeader}>
            <Text style={[styles.productHeaderText, styles.productHeaderItem]}>Nombre del Producto</Text>
            <Text style={[styles.productHeaderText, styles.productHeaderItem]}>Cantidad</Text>
            <Text style={[styles.productHeaderText, styles.productHeaderItem]}>Precio Unitario</Text>
            <Text style={[styles.productHeaderText, styles.productHeaderItem]}>Precio Total</Text>
        </View>
        {ticketData.productos.map((producto, index) => (
            <View key={index} style={styles.productRow}>
            <Text style={[styles.productText, styles.productItem]}>{producto.nombre}</Text>
            <Text style={[styles.productText, styles.productItem]}>{producto.cantidad}</Text>
            <Text style={[styles.productText, styles.productItem]}>${producto.precioUnitario.toFixed(2)}</Text>
            <Text style={[styles.productText, styles.productItem]}>${producto.precioTotal.toFixed(2)}</Text>
            </View>
        ))}
        <View style={styles.separator} />

        {/* Totales */}
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Artículos Totales:</Text>
            <Text style={styles.totalValue}>{ticketData.articulosTotales}</Text>
        </View>
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Subtotal:</Text>
            <Text style={styles.totalValue}>${ticketData.subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>IVA:</Text>
            <Text style={styles.totalValue}>${ticketData.iva.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Costo de Envío:</Text>
            <Text style={styles.totalValue}>${ticketData.costoEnvio.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalValue}>${ticketData.total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleCheckout}>
            <Text style={styles.submitButtonText}>Salir</Text>
        </TouchableOpacity>
        </View>
        

    </ScrollView>
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
},

ticketContainer: {
    padding: 20,
},

ticketBox: {
    paddingTop:120,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 20, // Espacio inferior para separar de otros elementos
},
ticketTitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Josefbold',
    textDecorationLine:'underline',
},
ticketInfo: {
    fontSize: 14,
    marginBottom: 10, // Mayor margen inferior para separar las líneas
    color: '#333',
    fontFamily: 'Laila',

},
separator: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 15, // Mayor espacio vertical para separar secciones
},
productHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 10, // Mayor padding inferior para separar del contenido
    marginBottom: 10, // Mayor margen inferior para separar de la lista de productos
},
productHeaderText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'Josefbold',
},
productHeaderItem: {
    flex: 1,
    textAlign: 'center', // Centra el texto en el encabezado
},
productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, // Mayor padding vertical para separar filas
},
productText: {
    fontSize: 13,
    color: '#333',
    fontFamily: 'Laila',
},
productItem: {
    flex: 1,
    textAlign: 'center', // Centra el texto en las filas de productos
},
totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10, // Mayor padding vertical para separar filas
},
totalLabel: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Lailasemi',
},
totalValue: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Laila',
},
submitButton: {
    marginTop:30,
    
    backgroundColor: '#3ba395',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
},
submitButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Lailasemi',
},
});

export default Ticket;