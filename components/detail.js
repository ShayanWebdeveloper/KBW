import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailsScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details Screen</Text>
        <TouchableOpacity>
            <Button title='Go to About' onPress={() => navigation.navigate('About')} />
        </TouchableOpacity>
    </View>
);

export default DetailsScreen

const styles = StyleSheet.create({})