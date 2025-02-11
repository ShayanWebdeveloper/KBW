import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About Screen</Text>
        <TouchableOpacity>
            <Button title='Go to Profile' onPress={() => navigation.navigate('Profile')} />
        </TouchableOpacity>
    </View>
);

export default AboutScreen

const styles = StyleSheet.create({})