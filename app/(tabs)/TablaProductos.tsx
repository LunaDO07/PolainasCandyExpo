import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar, Modal, TextInput } from 'react-native';
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
const [modalVisible, setModalVisible] = useState(false);
const [addProductModalVisible, setAddProductModalVisible] = useState(false);
const [selectedItem, setSelectedItem] = useState<any>(null);
const [newProduct, setNewProduct] = useState<any>({
    nombre: '',
    descripcion: '',
    peso: '',
    piezas: '',
    precio: '',
    sucursal: '',
    existencias: '',
    categoria: '',
    marca: ''
});

const handleDelete = (id: string) => {
    console.log('Eliminar registro con ID:', id);
};

const handleEdit = (item: typeof data[0]) => {
    setSelectedItem(item);
    setModalVisible(true);
};

const handleSave = () => {
    console.log('Guardar registro', selectedItem);
    setModalVisible(false);
};

const handleAddProduct = () => {
    console.log('Agregar nuevo producto', newProduct);
    setAddProductModalVisible(false);
};

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
        <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionButton}>
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

    {/* Botón para agregar producto */}
    <View style={styles.addButtonWrapper}>
        <TouchableOpacity onPress={() => setAddProductModalVisible(true)} style={styles.addButton}>
        <Ionicons name="add-circle-outline" size={24} color="#FFF" />
        <Text style={styles.addButtonText}>Agregar Producto</Text>
        </TouchableOpacity>
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

    {/* Modal para editar producto */}
    <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Producto</Text>
            <TextInput
            style={styles.modalInput}
            placeholder="Nombre"
            value={selectedItem?.nombre}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, nombre: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Descripción"
            value={selectedItem?.descripcion}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, descripcion: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Peso/Contenido"
            value={selectedItem?.peso}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, peso: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Piezas"
            value={selectedItem?.piezas}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, piezas: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Precio"
            value={selectedItem?.precio}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, precio: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Sucursal"
            value={selectedItem?.sucursal}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, sucursal: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Existencias"
            value={selectedItem?.existencias}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, existencias: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Categoría"
            value={selectedItem?.categoria}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, categoria: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Marca"
            value={selectedItem?.marca}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, marca: text })}
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleSave} style={[styles.modalButton, styles.saveButton]}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.modalButton, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </Modal>

    {/* Modal para agregar producto */}
    <Modal
        visible={addProductModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setAddProductModalVisible(false)}
    >
        <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Nuevo Producto</Text>
            <TextInput
            style={styles.modalInput}
            placeholder="Nombre"
            value={newProduct.nombre}
            onChangeText={(text) => setNewProduct({ ...newProduct, nombre: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Descripción"
            value={newProduct.descripcion}
            onChangeText={(text) => setNewProduct({ ...newProduct, descripcion: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Peso/Contenido"
            value={newProduct.peso}
            onChangeText={(text) => setNewProduct({ ...newProduct, peso: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Piezas"
            value={newProduct.piezas}
            onChangeText={(text) => setNewProduct({ ...newProduct, piezas: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Precio"
            value={newProduct.precio}
            onChangeText={(text) => setNewProduct({ ...newProduct, precio: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Sucursal"
            value={newProduct.sucursal}
            onChangeText={(text) => setNewProduct({ ...newProduct, sucursal: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Existencias"
            value={newProduct.existencias}
            onChangeText={(text) => setNewProduct({ ...newProduct, existencias: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Categoría"
            value={newProduct.categoria}
            onChangeText={(text) => setNewProduct({ ...newProduct, categoria: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Marca"
            value={newProduct.marca}
            onChangeText={(text) => setNewProduct({ ...newProduct, marca: text })}
            />
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleAddProduct} style={[styles.modalButton, styles.saveButton]}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAddProductModalVisible(false)} style={[styles.modalButton, styles.cancelButton]}>
                <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    </Modal>
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
addButtonWrapper: {
    alignItems: 'center',
    marginVertical: 10,
},
addButton: {
    backgroundColor: '#232F3E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
},
addButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 10,
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
modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
},
modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
},
modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
modalInput: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
},
modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
modalButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
},
saveButton: {
    backgroundColor: '#B0B0B0',
},
cancelButton: {
    backgroundColor: '#D0D0D0',
},
buttonText: {
    color: '#333',
    fontWeight: 'bold',
},
});

export default TablaProductos;