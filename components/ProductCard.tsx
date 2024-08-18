import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

type Product = {
    id: number;
    name: string;
    price: string;
    image: string;
    description: string;
};

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleAddToCart = () => {
        closeModal();
        Alert.alert('Producto añadido', 'El Producto se añadió al carrito de compras');
    };

    return (
        <>
            <TouchableOpacity style={styles.productCard} onPress={handleOpenModal}>
                <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>{product.price}</Text>
            </TouchableOpacity>

            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                            <Ionicons name="close" size={24} color="#000" />
                        </TouchableOpacity>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Image source={{ uri: product.image }} style={styles.modalProductImage} />
                        <Text style={styles.productDescription}>{product.description}</Text>
                        <Text style={styles.productPrice}>{product.price}</Text>
                        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
                            <Text style={styles.addButtonText}>Añadir al carrito</Text>
                            <FontAwesome name="shopping-cart" size={30} color="#FFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    productCard: {
        width: '40%',
        marginVertical: 16,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 5,    
        backgroundColor: '#ffffff',
        borderColor: 'gray',
    },
    productImage: {
        width: 100,
        height: 90,
        borderRadius: 8,
    },
    productName: {
        fontSize: 15,
        marginVertical: 5,
        fontFamily: 'Josefinmedium',
    },
    productPrice: {
        fontSize: 17,
        color: '#106680',
        fontFamily: 'Josefbold',
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
        padding: 10,
        backgroundColor: 'rgba(231, 124, 255, 0.49)',
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
        fontFamily: 'Josefinreg',
        textAlign: 'center',
    },
    addButton: {
        flexDirection: 'row',
        marginTop: 10,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#4eacba',
        padding: 10,
        paddingHorizontal: 30,
    },
    addButtonText: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Josefinreg',
        marginRight: 20,
    },
});

export default ProductCard;