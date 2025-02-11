import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const ProfileScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
        <TouchableOpacity>
            <Button title='Go to Detail' onPress={() => navigation.navigate('Detail')} />
        </TouchableOpacity>
    </View>
);
export default ProfileScreen

const styles = StyleSheet.create({})