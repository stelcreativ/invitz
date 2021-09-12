import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {
    Avatar,
    Title,
    Caption,
} from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfoSection}>
                <View>
                    <Avatar.Image
                        source={require("../assets/adolescentgirl.jpg")}
                        size={100}
                    />

                </View>

                <View style={styles.row}>
                    <MaterialIcons name="mail" color="#777777" size={20} />
                    <Text style={{ color: "#777777", padding: 5 }}>cool@gmail.com</Text>
                </View>
            </View>

            <View>
                <Text style={{ color: "#777777", padding: 5 }}>Jenifer Wallace</Text>
            </View>

            <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                <TouchableOpacity style={styles.continue} onPress={this.continue}>
                    <MaterialIcons
                        name="navigate-next"
                        color="#fff"
                        size={24}
                    />
                </TouchableOpacity>
            </View>


        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
});