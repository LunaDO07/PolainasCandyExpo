import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar, Modal, TextInput, Image, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { NavAdmn } from '../../components/NavAdmn';
import * as ImagePicker from 'expo-image-picker';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

// Datos de ejemplo
const initialData = [
{ id: '1', nombre: 'Producto A', descripcion: 'Descripción A', peso: '500g', piezas: '10', precio: '$100', sucursal: 'Sucursal 1', existencias: '20', categoria: 'Categoría A', marca: 'Marca A', image: null },
// Otros productos...
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
    marca: '',
    image: null
});
const [data, setData] = useState(initialData);

const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
};

const handleEdit = (item: typeof initialData[0]) => {
    setSelectedItem(item);
    setModalVisible(true);
};

const handleSave = () => {
    if (selectedItem) {
    setData(data.map(item => item.id === selectedItem.id ? selectedItem : item));
    }
    setModalVisible(false);
};

const handleAddProduct = () => {
    setData([...data, { ...newProduct, id: (data.length + 1).toString() }]);
    setNewProduct({ nombre: '', descripcion: '', peso: '', piezas: '', precio: '', sucursal: '', existencias: '', categoria: '', marca: '', image: null });
    setAddProductModalVisible(false);
};

const pickImage = async (setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    // Solicitar permisos
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
    alert('Lo siento, necesitamos permisos para acceder a la galería de fotos.');
    return;
    }

    try {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
        setter(result.assets[0].uri);
    } else {
        console.log("Image selection was canceled or no assets found.");
    }
    } catch (error) {
    console.error("Error al abrir la galería de fotos:", error);
    }
};

const renderItem = ({ item }: { item: typeof initialData[0] }) => (
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
    {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
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
    <NavAdmn />

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
            <Text style={[styles.tableHeaderText, styles.tableColumnImagen]}>Imagen</Text>
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
            keyboardType="numeric"
            value={selectedItem?.piezas}
            onChangeText={(text) => setSelectedItem({ ...selectedItem, piezas: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Precio"
            keyboardType="numeric"
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
            keyboardType="numeric"
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
            <TouchableOpacity onPress={() => pickImage((uri) => setSelectedItem({ ...selectedItem, image: uri }))} style={styles.pickImageButton}>
            <Text style={styles.pickImageButtonText}>Seleccionar Imagen</Text>
            </TouchableOpacity>
            {selectedItem?.image && <Image source={{ uri: selectedItem.image }} style={styles.image} />}
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                <Text style={styles.buttonText}>Guardar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
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
            <Text style={styles.modalTitle}>Agregar Producto</Text>
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
            keyboardType="numeric"
            value={newProduct.piezas}
            onChangeText={(text) => setNewProduct({ ...newProduct, piezas: text })}
            />
            <TextInput
            style={styles.modalInput}
            placeholder="Precio"
            keyboardType="numeric"
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
            keyboardType="numeric"
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
            <TouchableOpacity onPress={() => pickImage((uri) => setNewProduct({ ...newProduct, image: uri }))} style={styles.pickImageButton}>
            <Text style={styles.pickImageButtonText}>Seleccionar Imagen</Text>
            </TouchableOpacity>
            {newProduct.image && <Image source={{ uri: newProduct.image }} style={styles.image} />}
            <View style={styles.modalButtons}>
            <TouchableOpacity onPress={handleAddProduct} style={styles.saveButton}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAddProductModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
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
    backgroundColor: '#F4F4F4',
    paddingTop: StatusBar.currentHeight || 0,
},
tableHeaderNavbar: {
    backgroundColor: 'rgb(255, 255, 255)',
    paddingVertical: 10,
    paddingHorizontal: 20,
},
tableHeaderNavbarTitle: {
    fontSize: 16,
    color: '#000000',
    fontFamily:'Lailasemi',
    textAlign:'center',
},
addButtonWrapper: {
    alignItems: 'center',
    marginVertical: 10,
},
addButton: {
    backgroundColor: '#b781b3', 
    padding: 13,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
},
addButtonText: {
    color: '#FFF',
    marginLeft: 10,
    fontFamily:'Josefbold',
    fontSize:15,
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
    backgroundColor: '#b9b9b9',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
},
tableHeaderText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    flex: 1,
    minWidth: 100, 
    fontFamily:'Lailabold',
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
tableColumnImagen:{ flex: 1 },
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
    fontSize: 11,
    color: '#333',
    minWidth: 80,
    fontFamily:'Laila',
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
    marginBottom: 10,
    fontFamily:'Lailabold'
},
modalInput: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontFamily:'Laila'
},
modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
},
modalButton: {
    flex: 1,
    marginHorizontal: 5,
   padding:20,
    alignItems: 'center',
    borderRadius:20,
},
saveButton: {
    backgroundColor: '#b781b3',  // Mismo color que el botón de agregar
    padding:10,
    borderRadius:20,
},
cancelButton: {
    backgroundColor: '#454545',
    padding:10,
    borderRadius:20,
    
},
buttonText: {
    color: '#ffffff',
    fontFamily:'Lailasemi',
},
pickImageButton: {
    backgroundColor: '#4ca3af',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
},
pickImageButtonText: {
    color: '#FFF',
    fontSize: 16,
},
image: {
    width: 50,
    height: 50,
    borderRadius: 5,
},
});

    export default TablaProductos;