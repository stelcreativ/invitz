import React from 'react';
import { View, Text, Button, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>It begins here!</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Connect with the best team!</Text>
                <Button
                    title="Get started"
                    onPress={() => props.navigation.navigate("Login")}
                />
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => alert('click')}>
                        <Button color={'#08d4c4'} title='Get started' />
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>



    );
};

export default HomeScreen;

const { height } = Dimensions.get("screen")
const height_logo = height * 0.10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink'
    },


    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: "center",

    },

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },

    text: {
        color: 'grey',
        marginTop: 5
    },

    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },

    SignIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    }

});
