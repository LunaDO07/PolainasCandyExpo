import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import ProductCard from '../../components/ProductCard'; //CARD DE PRODUCTOS

type Product = {
id: number;
name: string;
price: string;
image: string;
description: string;
};


export default function ProductScreen() {
const router = useRouter();

const IrInicio = () => {
    router.push('/indexCliente'); // Cambia el path según tu ruta deseada
};

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

return (
    <View style={styles.container}>

    {/* Barra derecha  No mover ya definidos*/}
    <ScrollView style={styles.sidebar}>
    <TouchableOpacity onPress={IrInicio} style={styles.navButton}>
                    <Ionicons name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image source={require('../../assets/images/gomitas.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Gomitas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image source={require('../../assets/images/chicles.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Chicles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
                <Image  source={require('../../assets/images/chocolate.jpg')} style={styles.sidebarImage} />
                <Text style={styles.sidebarText}>Chocolate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image  source={require('../../assets/images/paletas.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Paletas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image  source={require('../../assets/images/gall2.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Galletas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image  source={require('../../assets/images/botanas.webp')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Botana</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image  source={require('../../assets/images/bombones.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Bombones</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sidebarItem}>
            <Image  source={require('../../assets/images/tamarindo.jpg')} style={styles.sidebarImage} />
            <Text style={styles.sidebarText}>Tamarindo</Text>
        </TouchableOpacity>
    </ScrollView>

    {/* Cards de productos  AQUI SI MODIFICAR*/}

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
                <ProductCard key={product.id} product={product} />
        ))}
        </View>
    </ScrollView>

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
    width: '23%',
    backgroundColor: '#D8ACD9',
    padding: 5,
    paddingTop:45,
},
navButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 5,
},
sidebarItem: {
    marginTop:10,
    marginBottom: 10,
    alignItems: 'center',
},
sidebarImage: {
    width: 45,
    height: 45,
    borderRadius: 30,
},
sidebarText: {
    marginTop: 5,
    fontSize:12,
    fontFamily:'Josefinmedium',
},
productContainer: {
    width: '77%',
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
    width: 79,
    height: 70,
    borderRadius: 8,
},
productName: {
    fontSize: 15,
    marginVertical: 5,
    fontFamily:'Josefinmedium',
},
productPrice: {
    fontSize: 17,
    color: '#106680',
    fontFamily:'Josefbold',
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
    top: 0,
    right: 0,
    padding:10,
    backgroundColor:'rgba(231, 124, 255, 0.49)',
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
    fontFamily:'Josefinreg',
    textAlign: 'center',
},
addButton: {
    flexDirection: 'row',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#4eacba',
    padding: 10,
    paddingHorizontal:30,
},
addButtonText: {
    fontSize:16,
    color: '#fff',
    fontFamily:'Josefinreg',
    marginRight:20,
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
    borderColor: '#797979',
    marginBottom:20,
    elevation:5.
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
