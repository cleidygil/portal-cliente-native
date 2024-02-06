import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Avatar, Button, Card, MD2Colors, Text } from 'react-native-paper';

const CardDeuda = () => {
    const LeftContent = props => <Avatar.Icon {...props} size={50} icon="cash-fast" style={styles.avatar} color='#fff' />

    return (
        <View style={styles.container}>
            <Card style={[styles.box, styles.deuda]}>
                <Card.Content>
                    <Text variant="titleLarge">45.00 USD</Text>
                    <Text variant="bodyMedium">Deuda Pendiente</Text>
                </Card.Content>
            </Card>
            <Card style={[styles.box, styles.favor]}  >
                <Card.Content  >
                    <Text style={styles.text} variant="titleLarge">0.00 USD</Text>
                    <Text variant="bodyMedium">Saldo a Favor</Text>
                </Card.Content>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        backgroundColor: "gray",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    box: {
        margin: 10,
        flex: 1,
    },
    favor: {
        backgroundColor: '#ACAFAC',
    },
    deuda: {
        backgroundColor: "#CB4335",
    },
    text: {
        color: '#F9EBEA '
    }
})

export default CardDeuda;
