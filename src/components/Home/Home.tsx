import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, Text, View } from 'react-native'
import RegForm from './RegForm';

export default function HomeComponent() {

    const navigation = useNavigation();

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, position: "relative", width: "100%" }}>
            <Text style={{ color: "#333", fontSize: 25, fontWeight: "700" }}>Hi, Welcome! 👋</Text>
            <Text style={{ color: "#1148d4", fontSize: 20, fontWeight: "500", margin: 10, marginTop: 30 }}>Please Enter Your Details</Text>
            <RegForm />
            <Button
                color="#1148d4"
                accessibilityLabel="Get your Scratch Card"
                title="Get your Scratch Card"
                onPress={() => navigation.navigate({ name: 'Details' } as any)}
            />
        </View>
    )
}
