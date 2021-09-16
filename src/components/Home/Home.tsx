import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Text, View, Image, Animated } from 'react-native'
import Button from '../../ui/Button';
import RegForm from './RegForm';

export default function HomeComponent({ props }: any) {

    const navigation = useNavigation();

    return (
        <View style={{
            alignItems: 'center', justifyContent: 'center', marginTop: 20, position: "absolute", width: "100%", shadowColor: '#111111',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 2,
            elevation: 5,
        }}>
            <Image source={require('../../assets/logo.png')} style={{ margin: 25, width: 200, height: 80 }} />
            <View style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "row" }}>
                <Animated.View><Text style={{ fontSize: 22, marginBottom: 5 }}>🎉  </Text></Animated.View>
                <Text style={{ color: "#BD0058", fontSize: 25, fontWeight: "bold", fontFamily: "notoserif", justifyContent: "center" }}>Scratch & Win Contest
                </Text>
                <Animated.View><Text style={{ fontSize: 22, marginBottom: 5 }}>  🎉</Text></Animated.View>
            </View>
            <Text style={{ color: "#101010", fontSize: 20, fontWeight: "700", margin: 10, marginTop: 15, fontFamily: 'notoserif', letterSpacing: 0.1, fontStyle: "italic" }}>Please Enter Your Details</Text>
            <RegForm />
        </View>
    )
}
