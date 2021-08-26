import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>Sign in</Text>
            </View>
            <View>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                />
            </View>

            <View>
                <Text>Email Adress</Text>
                <TextInput
                    style={styles.inputtitle}
                    autoCapitalize="none"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "violet",

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