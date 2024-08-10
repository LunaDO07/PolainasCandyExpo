import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

// Datos de ejemplo
const data = [
{ id: '1', nombre: 'Producto A', descripcion: 'Descripción A', peso: '500g', piezas: '10', precio: '$100', sucursal: 'Sucursal 1', existencias: '20', categoria: 'Categoría A', marca: 'Marca A' },
{ id: '2', nombre: 'Producto B', descripcion: 'Descripción B', peso: '250g', piezas: '5', precio: '$50', sucursal: 'Sucursal 2', existencias: '30', categoria: 'Categoría B', marca: 'Marca B' },
{ id: '3', nombre: 'Producto C', descripcion: 'Descripción C', peso: '1kg', piezas: '15', precio: '$200', sucursal: 'Sucursal 3', existencias: '25', categoria: 'Categoría C', marca: 'Marca C' },
{ id: '4', nombre: 'Producto D', descripcion: 'Descripción D', peso: '750g', piezas: '8', precio: '$150', sucursal: 'Sucursal 4', existencias: '18', categoria: 'Categoría D', marca: 'Marca D' },
{ id: '5', nombre: 'Producto E', descripcion: 'Descripción E', peso: '300g', piezas: '12', precio: '$75', sucursal: 'Sucursal 5', existencias: '22', categoria: 'Categoría E', marca: 'Marca E' },
{ id: '6', nombre: 'Producto F', descripcion: 'Descripción F', peso: '600g', piezas: '7', precio: '$120', sucursal: 'Sucursal 6', existencias: '28', categoria: 'Categoría F', marca: 'Marca F' },
];

const TablaProductos: React.FC = () => {
const handleDelete = (id: string) => {
    console.log('Eliminar registro con ID:', id);
};

const handleEdit = (id: string) => {
    console.log('Modificar registro con ID:', id);
};

// Renderiza cada fila de la tabla
const renderItem = ({ item }: { item: typeof data[0] }) => (
    <View style={styles.row}>
    <Text style={styles.cell}>{item.id}</Text>
    <Text style={styles.cell}>{item.nombre}</Text>
    <Text style={styles.cell}>{item.descripcion}</Text>
    <Text style={styles.cell}>{item.peso}</Text>
    <Text style={styles.cell}>{item.piezas}</Text>
    <Text style={styles.cell}>{item.precio}</Text>
    <Text style={styles.cell}>{item.sucursal}</Text>
    <Text style={styles.cell}>{item.existencias}</Text>
    <Text style={styles.cell}>{item.categoria}</Text>
    <Text style={styles.cell}>{item.marca}</Text>
    <View style={styles.actions}>
        <TouchableOpacity onPress={() => handleEdit(item.id)} style={styles.actionButton}>
        <FontAwesome name="edit" size={24} color="#91918F" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.actionButton}>
        <Ionicons name="trash" size={24} color="#5D6363" />
        </TouchableOpacity>
    </View>
    </View>
);

return (
    <View style={styles.container}>
    {/* Navbar superior */}
    <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Polainas Candys - Productos</Text>
    </View>

    {/* Encabezado de la tabla como Navbar */}
    <View style={styles.tableHeaderNavbar}>
        <Text style={styles.tableHeaderNavbarTitle}>Lista de Productos</Text>
    </View>

    {/* Tabla de Productos */}
    <View style={styles.tableWrapper}>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.table}>
            {/* Encabezado de la tabla */}
            <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, styles.tableColumnID]}>IDProducto</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnNombre]}>Nombre</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnDescripcion]}>Descripción</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnPeso]}>Peso/Contenido</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnPiezas]}>Piezas</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnPrecio]}>Precio</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnSucursal]}>Sucursal</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnExistencias]}>Existencias</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnCategoria]}>Categoría</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnMarca]}>Marca</Text>
            <Text style={[styles.tableHeaderText, styles.tableColumnAcciones]}>Acciones</Text>
            </View>
            {/* Lista de registros */}
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
        </ScrollView>
    </View>
    </View>
);
};

// Estilos
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: StatusBar.currentHeight || 0,
},
navbar: {
    backgroundColor: '#232F3E',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
},
navbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
},
tableHeaderNavbar: {
    backgroundColor: '#232F3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1D1D1D',
},
tableHeaderNavbarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
},
tableWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
},
table: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    minWidth: width * 1.8,
},
tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#E5E5E5',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
},
tableHeaderText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    flex: 1,
    minWidth: 100, 
},
tableColumnID: {
    flex: 2,
},
tableColumnNombre: {
    flex: 3,
},
tableColumnDescripcion: {
    flex: 4,
},
tableColumnPeso: {
    flex: 2,
},
tableColumnPiezas: {
    flex: 2,
},
tableColumnPrecio: {
    flex: 2,
},
tableColumnSucursal: {
    flex: 3,
},
tableColumnExistencias: {
    flex: 2,
},
tableColumnCategoria: {
    flex: 2,
},
tableColumnMarca: {
    flex: 2,
},
tableColumnAcciones: {
    flex: 2,
},
row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    backgroundColor: '#FFF',
},
cell: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    fontSize: 12,
    color: '#333',
    minWidth: 100, 
},
actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 8,
},
actionButton: {
    padding: 8,
},
});

export default TablaProductos;