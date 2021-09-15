import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import ScratchView from 'react-native-scratchcards'

export default function DetailsScreen() {

    const imageSource= require('../assets/PassportPhoto.jpg')
    const imageSource2= require('../assets/logo.png')
    const [imageLoaded, setImageLoaded] = useState(false)

    return (
        <View>
            <View style={{ height: 300, width: 300, margin: 50, borderWidth: 2, borderColor: "#1148d4", borderRadius: 0, justifyContent: "center", alignItems: "center" }}>
                <Image style={{
                    height: 280, width: 280
                }} source={imageSource2} />
                <ScratchView brushSize={150}
                    threshold={55}
                    fence={[0, 0, 200, 200]}
                    source={imageSource}
                    background="#1148d4"
                    fadeOut={true}
                    resizeMode="stretch"
                />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#333", margin: 20, textAlign: "center" }}>Congratulations!! You have won a new pair of <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1148d4", margin: 20, textAlign: "center" }}>HEADPHONES</Text>!! Hurray 🥳🥳🥳</Text>
        </View>
    )
}
