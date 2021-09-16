import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import ScratchView from 'react-native-scratchcards';
import Button from '../ui/Button';
import { BackHandlerFunction } from '../utils/BackHandler';
import { supabase } from '../utils/SupabaseClient';

export default function DetailsScreen({ route }: any) {
    const imageSource = require('../assets/scratch.jpg');
    const [imageLoaded, setImageLoaded] = useState(false);
    const [scratchCardId, setScratchCardId] = useState('')
    const [scratchCardImage, setScratchCardImage] = useState('imageSource2')
    const [scratchCardPrizeText, setScratchCardPrizeText] = useState('')
    const [scratchItemCount, setScratchItemCount] = useState(0)
    const [updatedItemCount, setUpdatedItemCount] = useState(0)

    const userData = route.params;

    const navigation = useNavigation();

    const disableGoBack = () => {

        navigation.addListener('beforeRemove', (e) => {
            if (imageLoaded === true) {
                // If we don't have unsaved changes, then we don't need to do anything
                BackHandlerFunction()
            }
            e.preventDefault()
        })
    }

    const enableGoBack = () => {

        navigation.removeListener('beforeRemove', (e) => {
            if (imageLoaded === true) {
                // If we don't have unsaved changes, then we don't need to do anything
                BackHandlerFunction()
            }
            e.preventDefault()
        })
    }

    function getRandomArbitrary(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min)
    }


    const selectScratchCard = async () => {
        const number = getRandomArbitrary(1, 8)

        console.log('num', number);

        const { data, error } = await supabase
            .from('scratch_prize')
            .select('*')
            .eq('item_id', number)

        data?.forEach(el => {
            if (el.item_count !== 0) {
                setScratchCardImage(el.item_image)
                setScratchCardPrizeText(el.item_name)
                setScratchCardId(el.id)
                setScratchItemCount(el.item_count)
            } else {
                selectScratchCard()
            }
        })
    }

    const handleScratchCard = async () => {
        const { data, error } = await supabase
            .from('user_details')
            .insert([
                { name: userData.name, phone_number: userData.phoneNumber, item_purchased: userData.item, scratch_card_id: scratchCardId },
            ])

        updateScratchItemCount()
    }

    const updateScratchItemCount = async () => {
        const { data, error } = await supabase
            .from('scratch_prize')
            .update({ item_count: scratchItemCount - 1 })
            .eq('id', scratchCardId)

        // const { data, error } = await supabase.rpc('increment', { row_id: 2 })

        data?.forEach(el => {
            setUpdatedItemCount(el.item_count)
        })

    }

    // console.log(data);

    useEffect(() => {
        console.log(imageLoaded)
        BackHandlerFunction()
        imageLoaded ? enableGoBack() : disableGoBack()
    }, [imageLoaded]);

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
            }}>
            <View
                style={{
                    height: 300,
                    width: 300,
                    marginTop: -70,
                    borderWidth: 0,
                    borderColor: 'white',
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    backgroundColor: 'white',
                    elevation: 5,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                }}>
                <Image
                    style={{
                        height: 280,
                        width: 280,
                    }}
                    resizeMode="contain"
                    source={{ uri: scratchCardImage }}
                />
                {
                    <ScratchView
                        brushSize={150}
                        threshold={60}
                        fence={[0, 0, 200, 200]}
                        source={imageSource}
                        background="#0058BE"
                        fadeOut={true}
                        resizeMode="stretch"
                        onImageLoad={() => selectScratchCard()}
                        onDone={() => {
                            handleScratchCard()
                            setImageLoaded(true)
                        }}
                    />
                }
            </View>
            {imageLoaded ? (
                <>
                    <Text
                        style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            color: '#BD0058',
                            marginTop: 30,
                            textAlign: 'center',
                        }}>
                        Congratulations!!
                    </Text>
                    <Text
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            fontSize: 20,
                            fontWeight: '600',
                            color: '#111111',
                            margin: 20,
                            textAlign: 'center',
                        }}>
                        {scratchCardPrizeText.includes('00') ? "You have won a discount of" :
                            scratchCardPrizeText.includes('Tele') || scratchCardPrizeText.includes('Neck') ? "You have won a" : "You have won a new pair of"}
                    </Text>
                    <Text
                        style={{
                            fontSize: 25,
                            fontWeight: 'bold',
                            color: '#BD0058',
                            margin: 0,
                            textAlign: 'center',
                        }}>
                        {scratchCardPrizeText}
                    </Text>
                    <Text style={{ fontSize: 22, margin: 20, textAlign: 'center' }}>
                        🥳🥳🥳
                    </Text>

                    <Button text="START NEW CONTEST" onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Home' } as any]
                        })
                    } />


                    <Text style={{ fontSize: 14, margin: 0, textAlign: 'center' }}>
                        Remaining: {updatedItemCount}
                    </Text>
                </>
            ) : (
                <></>
            )}
        </View>
    );
}
