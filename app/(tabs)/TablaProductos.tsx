import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, ScrollView, TouchableOpacity, StatusBar, Modal, TextInput, Image, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { NavAdmn } from '../../components/NavAdmn';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

const { width } = Dimensions.get('window'); // Ancho de la pantalla

// Datos de ejemplo
const initialData = [
{ id: '1', nombre: 'Producto A', descripcion: 'Descripción A', peso: '500g', piezas: '10', precio: '$100', sucursal: 'Sucursal 1', existencias: '20', categoria: 'Categoría A', marca: 'Marca A', image: null },

{ id: '2', nombre: 'Producto A', descripcion: 'Descripción A', peso: '500g', piezas: '10', precio: '$100', sucursal: 'Sucursal 1', existencias: '20', categoria: 'Categoría A', marca: 'Marca A', image: null },
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
//para manejar el modal de error
const [errorModalVisible, setErrorModalVisible] = useState(false);
const [errorMessage, setErrorMessage] = useState('');


const handleDelete = (id: string) => {
    setData(data.filter(item => item.id !== id));
};

const handleEdit = (item: typeof initialData[0]) => {
    setSelectedItem(item);
    setModalVisible(true);
};

const handleSave = () => {
    if (
        !selectedItem?.nombre ||
        !selectedItem?.descripcion ||
        !selectedItem?.peso ||
        !selectedItem?.piezas ||
        !selectedItem?.precio ||
        !selectedItem?.sucursal ||
        !selectedItem?.existencias ||
        !selectedItem?.categoria ||
        !selectedItem?.marca
    ) {
        setErrorMessage('Existen campos vacíos. Por favor, completa toda la información.');
        setErrorModalVisible(true);
        return;
    }
    setData(data.map(item => item.id === selectedItem.id ? selectedItem : item));
    setModalVisible(false);
};

const handleAddProduct = () => {
    if (
        !newProduct.nombre ||
        !newProduct.descripcion ||
        !newProduct.peso ||
        !newProduct.piezas ||
        !newProduct.precio ||
        !newProduct.sucursal ||
        !newProduct.existencias ||
        !newProduct.categoria ||
        !newProduct.marca
    ) {
        setErrorMessage('Existen campos vacios. Por favor, completa toda la informacion.');
        setErrorModalVisible(true);
        return;
    }
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
    {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
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
    <NavAdmn />

    {/* Encabezado TITULO */}
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
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <View style={styles.table}>
            {/* Lista de registros */}
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            />
        </View>
        </ScrollView>

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
            <View  style={styles.modalInput} >
            <Picker
            //  selectedValue={selectedGender}
                // onValueChange={(itemValue) => setSelectedGender(itemValue)}
                dropdownIconColor="#A6A6A6">
                <Picker.Item label="Categoria" value="" color="#A6A6A6" />
                <Picker.Item label="Gomitas" value="Gomitas" />
                <Picker.Item label="Chicles" value="Chicles" />
                <Picker.Item label="Chocolates" value="Chocolates" />
                <Picker.Item label="Paletas" value="Paletas" />
                <Picker.Item label="Galletas" value="Galletas" />
                <Picker.Item label="Botana" value="Botana" />
                <Picker.Item label="Bombones" value="Bombones" />
                <Picker.Item label="Tamarindos" value="Tamarindos" />
            </Picker>
            </View>

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
            <View  style={styles.modalInput} >
            <Picker
            //  selectedValue={selectedGender}
                // onValueChange={(itemValue) => setSelectedGender(itemValue)}
                dropdownIconColor="#A6A6A6">
                <Picker.Item label="Categoria" value="" color="#A6A6A6" />
                <Picker.Item label="Gomitas" value="Gomitas" />
                <Picker.Item label="Chicles" value="Chicles" />
                <Picker.Item label="Chocolates" value="Chocolates" />
                <Picker.Item label="Paletas" value="Paletas" />
                <Picker.Item label="Galletas" value="Galletas" />
                <Picker.Item label="Botana" value="Botana" />
                <Picker.Item label="Bombones" value="Bombones" />
                <Picker.Item label="Tamarindos" value="Tamarindos" />
            </Picker>
            </View>
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
{/* Modal para la validacion de campos vacios */}
<Modal
    visible={errorModalVisible}
    transparent={true}
    animationType="fade"
    onRequestClose={() => setErrorModalVisible(false)}
>
<View style={styles.modalOverlay}>
        <View style={styles.errorModalContent}>
        <Ionicons name="alert-circle-outline" size={40} color="#000000" />
            <Text style={styles.errorModalTitle}>Error</Text>
            <Text style={styles.errorModalMessage}>{errorMessage}</Text>
            <TouchableOpacity onPress={() => setErrorModalVisible(false)} style={styles.errorModalButton}>
                <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
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
table: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F4F4F4',

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
    borderWidth: 1,
    borderColor:'rgb(169, 169, 169)',
    backgroundColor: '#ffffff',
    marginTop:15,
    borderRadius:10,
},
cell: {
    flex: 1,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingVertical:10,
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
    height: 50,
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
    marginHorizontal:12,
},
errorModalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
},
errorModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
},
errorModalMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
},
errorModalButton: {
    backgroundColor: '#242424', 
    padding: 10,
    borderRadius: 5,
},
});

    export default TablaProductos;