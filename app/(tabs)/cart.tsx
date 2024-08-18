import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import NavBusqueda from '../../components/navBusqueda';

interface CartItemType {
    id: number;
    name: string;
    price: number;
    image: string;
}

const CartItem: React.FC<{
    item: CartItemType;
    onDelete: () => void;
}> = ({ item, onDelete }) => (
    <View style={styles.cartItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <View style={styles.itemDetails}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
            <Ionicons name="trash-outline" size={24} color="#666" />
        </TouchableOpacity>
    </View>
);

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([
        { id: 1, name: 'Picafresas', price: 10.00, image: 'https://loveveg.mx/app/uploads/2021/11/Mesa-de-trabajo-58-711x1024.jpg' },
        { id: 2, name: 'Aciduladito', price: 20.00, image: 'https://http2.mlstatic.com/D_NQ_NP_787132-MLU73865457966_012024-O.webp' },
    ]);

    const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false);
    const [itemToDelete, setItemToDelete] = useState<CartItemType | null>(null);
    const router = useRouter();

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

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        router.push('/datosUser');
    };

    return (
        <View style={styles.container}>
            <NavBusqueda />
            <ScrollView contentContainerStyle={styles.cartContainer}>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onDelete={() => {
                            setItemToDelete(item);
                            setShowConfirmationModal(true);
                        }}
                    />
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
                <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
                    <Text style={styles.checkoutButtonText}>Proceder con el Pago</Text>
                </TouchableOpacity>
            </View>

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
                                <Text style={styles.modalButtonText}>Eliminar</Text>
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
        backgroundColor: 'rgba(247, 235, 207, 0.68)',
    },
    cartContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
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
        fontFamily: 'Josefinmedium',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'Josefinmedium',
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
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
    }, modalContainer: {
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
        fontFamily:'Laila',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    modalButton: {
        backgroundColor: '#252525',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily:'Laila',
    },
});

export default Cart;
