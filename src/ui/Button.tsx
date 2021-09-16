import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ButtonProps {
    text: string
    onPress?: () => void
}

export default function CustomButton({ text, onPress }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 30, width: "100%", height: 45, backgroundColor: "#0058BE", borderRadius: 10, margin: 10 }} activeOpacity={0.8}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>{text}</Text>
        </TouchableOpacity>
    )
}
