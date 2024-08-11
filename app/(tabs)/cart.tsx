import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBusqueda from '../../components/navBusqueda';

interface CartItemType {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

const CartItem: React.FC<{
    item: CartItemType;
    onAdd: () => void;
    onRemove: () => void;
    onDelete: () => void;
}> = ({ item, onAdd, onRemove, onDelete }) => (
    <View style={styles.cartItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.itemDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actionsContainer}>
            <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={onRemove} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={onAdd} style={styles.quantityButton}>
                    <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
                
            </View>
            <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <Ionicons name="trash-outline" size={24} color="#666" />
            </TouchableOpacity>
        </View>
    </View>
);

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([
        { id: 1, name: 'Picafresas', price: 10.00, image: 'https://loveveg.mx/app/uploads/2021/11/Mesa-de-trabajo-58-711x1024.jpg', quantity: 1 },
        { id: 2, name: 'Aciduladito', price: 20.00, image: 'https://http2.mlstatic.com/D_NQ_NP_787132-MLU73865457966_012024-O.webp', quantity: 2 },
    ]);

    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<CartItemType | null>(null);

    useEffect(() => {
        if (itemToDelete && itemToDelete.quantity === 0) {
            setShowConfirmationModal(true);
        }
    }, [itemToDelete]);

    const handleAdd = (id: number) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const handleRemove = (id: number) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
            );
            const item = updatedItems.find(item => item.id === id);
            if (item && item.quantity === 0) {
                setItemToDelete(item);
            }
            return updatedItems;
        });
    };

    const handleDelete = () => {
        if (itemToDelete) {
            setCartItems(cartItems.filter(item => item.id !== itemToDelete.id));
            setShowConfirmationModal(false);
            setItemToDelete(null);
        }
    };

    const handleCancelDelete = () => {
        setShowConfirmationModal(false);
        setItemToDelete(null);
    };

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <View style={styles.container}>
            <NavBusqueda />
            <ScrollView contentContainerStyle={styles.cartContainer}>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onAdd={() => handleAdd(item.id)}
                        onRemove={() => handleRemove(item.id)}
                        onDelete={() => handleRemove(item.id)}
                    />
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Proceder con el Pago</Text>
                </TouchableOpacity>
            </View>

            {/* Modal de confirmación de eliminación */}
            <Modal
                visible={showConfirmationModal}
                transparent={true}
                animationType="slide"
                onRequestClose={handleCancelDelete}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Estás seguro que quieres eliminar este producto?</Text>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={handleDelete} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Sí, eliminar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleCancelDelete} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Cancelar</Text>
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
        flexGrow: 1,
        backgroundColor: 'rgba(247, 235, 207, 0.68)',
    },
    cartContainer: {
        marginTop:10,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: 'rgba(255, 255, 255, 0.89)',
        marginBottom: 10,
        borderRadius: 5,
        elevation: 1,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginLeft: 10,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 17,
        color: '#333',
        fontFamily:'Josefinmedium',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        fontFamily:'Josefinmedium',
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        padding: 13,
        marginHorizontal: 5,
    },
    quantityButtonText: {
        fontSize: 20,
        color: '#333',
    },
    quantityText: {
        fontSize: 16,
        color: '#1c5962',
    },
    deleteButton: {
        marginRight: 10,
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 5,
    },
    footer: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
        fontFamily: 'Josefbold',
    },
    checkoutButton: {
        backgroundColor: '#ffa526',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    checkoutButtonText: {
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Laila',
        paddingHorizontal:30,
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
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Cart;
