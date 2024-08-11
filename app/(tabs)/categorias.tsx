import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Product = {
id: number;
name: string;
price: string;
image: string;
description: string;
};

export default function ProductScreen() {
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

const products: Product[] = [
    { id: 1, name: 'Producto 1', price: '$10.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Producto 2', price: '$15.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Producto 3', price: '$12.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 3' },
    { id: 4, name: 'Producto 4', price: '$18.00', image: 'https://via.placeholder.com/150', description: 'Descripción del Producto 4' },
    // Agrega más productos aquí
];

const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
};

const closeModal = () => {
    setSelectedProduct(null);
};

return (
    <View style={styles.container}>

    {/* Barra derecha */}
    <View style={styles.sidebar}>
    <View style={styles.sidebarItem}>
        <Image source={{ uri: 'data:image/jpeg;base64,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' }} style={styles.sidebarImage} />
        <Text style={styles.sidebarText}>Gomitas</Text>
        </View>
        <View style={styles.sidebarItem}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.sidebarImage} />
        <Text style={styles.sidebarText}>Item 2</Text>
        </View>
        <View style={styles.sidebarItem}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.sidebarImage} />
        <Text style={styles.sidebarText}>Item 3</Text>
        </View>
    </View>

    {/* Cards de productos */}

    <ScrollView style={styles.productContainer}>

    <View style={styles.searchContainer}>
                <Ionicons name="search-outline" size={24} color="#666" style={styles.searchIcon} />
                <TextInput
                style={styles.searchInput}
                placeholder="Buscar dulces"
                placeholderTextColor="#666"
                />
            </View>

        <View style={styles.productRow}>
        {products.map((product: Product) => (
            <TouchableOpacity key={product.id} style={styles.productCard} onPress={() => handleProductPress(product)}>
            <Image source={{ uri: product.image }} style={styles.productImage} />
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>
        ))}
        </View>
    </ScrollView>

    {/* Modal para mostrar detalles del producto */}
    <Modal visible={!!selectedProduct} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            {/* Botón de cierre con ícono */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close" size={24} color="#000" />
            </TouchableOpacity>
            {selectedProduct && (
            <>
                <Image source={{ uri: selectedProduct.image }} style={styles.modalProductImage} />
                <Text style={styles.productName}>{selectedProduct.name}</Text>
                <Text style={styles.productPrice}>{selectedProduct.price}</Text>
                <Text style={styles.productDescription}>{selectedProduct.description}</Text>
                <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Añadir al carrito</Text>
                </TouchableOpacity>
            </>
            )}
        </View>
        </View>
    </Modal>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'rgb(255, 255, 255)',
},
sidebar: {
    width: '20%',
    backgroundColor: '#D8ACD9',
    padding: 10,
    paddingTop:45,
},
sidebarItem: {
    marginBottom: 20,
    alignItems: 'center',
},
sidebarImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
},
sidebarText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize:12,
},
productContainer: {
    width: '80%',
    marginTop:40,
},
productRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
},
productCard: {
    width: '40%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,    
    backgroundColor: '#f6f6f6',
    borderColor: 'gray',
},
productImage: {
    width: 99,
    height: 90,
    borderRadius: 8,
},
productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
},
productPrice: {
    fontSize: 14,
    color: '#888',
},
modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    position: 'relative',
},
closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor:'rgba(196, 129, 201, 0.55)',
    padding:10,
    borderRadius:20,
},
modalProductImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
},
productDescription: {
    marginVertical: 10,
    fontSize: 14,
    textAlign: 'center',
},
addButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 5,
},
addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    marginBottom:20,
},
searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    color: '#333',
    flex: 1,
    fontFamily: 'Josefinli',
    fontSize:17,
},
searchIcon: {
    marginLeft: 10,
},
});
