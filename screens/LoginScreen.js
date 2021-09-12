import React from 'react'
import { View, Item, Text, TouchableOpacity, Button, Label, StyleSheet, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

LoginScreen = (navigation) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#4632A1', fontSize: 24 }}>Sign in</Text>
            </View>


            <View style={styles.footer}>
                <Text>Email Adress</Text>
                <MaterialIcons
                    name="mail"
                    color="#0537a"
                    size={20}
                />
                <TextInput
                    placeholder="Your Email"
                    style={styles.inputtitle}
                    autoCapitalize="none"
                />

                <Text>First Name</Text>
                <TextInput
                    placeholder="First Name"
                    style={styles.inputtitle}
                    autoCapitalize="none"
                />

                <Text>Last Name</Text>
                <TextInput
                    placeholder="Last Name"
                    style={styles.inputtitle}
                    autoCapitalize="none"
                />

                <TouchableOpacity onPress={() => { navigation.navigate('Forgot') }}>
                    <Text gray caption center style={{ textDecorationLine: 'underline', marginHorizontal: 70 }}>
                        Forgot your password?
                    </Text>
                </TouchableOpacity>

                <Button title='Signup' style={{ marginTop: 20 }} onPress={() => navigation.navigate("Profile")}>
                    <Text bold white center>Sign In</Text>

                </Button>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "violet",

    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    input: {
        borderBottomColor: "#070707",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    inputTitle: {
        color: "#070707",
        fontSize: 10,
        textTransform: "uppercase"
    }
}
)

export default LoginScreen