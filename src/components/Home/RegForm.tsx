import React from 'react';
import { TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const RegForm = () => {
    return (
        <SafeAreaView style={{ justifyContent: "flex-start", alignItems: "center", width: "100%", margin: 10, height: 250}}>
            <TextInput focusable={true} style={{ width: "70%", padding: 10, paddingLeft: 15, backgroundColor: "white", borderRadius: 5, margin: 10 }} placeholder="Your Name" />
            <TextInput focusable={true} style={{ width: "70%", padding: 10, paddingLeft: 15, backgroundColor: "white", borderRadius: 5, margin: 10 }} placeholder="Your Phone Number" />
            <TextInput focusable={true} style={{ width: "70%", padding: 10, paddingLeft: 15, backgroundColor: "white", borderRadius: 5, margin: 10 }} placeholder="Item You Purchased" />
        </SafeAreaView>
    );
}

export default RegForm;
