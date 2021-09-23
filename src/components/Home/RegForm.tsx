import React, { useEffect, useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';
import Button from '../../ui/Button';
import { useNavigation } from '@react-navigation/core';
import * as yup from 'yup'
import { supabase } from '../../utils/SupabaseClient'

const loginValidationSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    phoneNumber: yup
        .string()
        .min(10, ({ min }) => `Phone Number must be ${min} characters`)
        .max(10)
        .required('Phone Number is required'),
    item: yup.string().required('Please enter the item purchased'),
})

interface DataProps {
    name: string,
    phoneNumber: string,
    item: string,
    dbCheckCount?: boolean
}

const RegForm: React.FC = ({ route }: any) => {

    const navigation = useNavigation();
    const [dbCheckItemCount, setDBCheckItemCount] = useState(false)
    const [itemArrayLength, setItemArrayLength] = useState(false)

    const handleSubmit = async ({ name, phoneNumber, item, dbCheckCount }: DataProps) => {
        // console.log(values);

        if ({ name, phoneNumber, item, dbCheckCount }) {
            navigation.navigate({ name: 'Details', params: { name, phoneNumber, item, dbCheckCount: dbCheckItemCount, itemArrayLength: itemArrayLength } } as any)
        }
    }

    const checkItemCount = async () => {
        const { data, error } = await supabase
            .from('scratch_prize')
            .select('item_count')

        let item_array: any = [];

        data?.forEach(el => {
            Object.values(el).map((item: any) => item_array.push(item))
        })


        for (let i = 0; i < item_array.length; i++) {
            if (item_array[i] > 0) {
                setDBCheckItemCount(true)
                setItemArrayLength(item_array.length)
            }
        }


    }

    useEffect(() => {
        checkItemCount()
    }, [dbCheckItemCount])

    return (
        <Formik
            initialValues={{ name: '', phoneNumber: '', item: '' }} validationSchema={loginValidationSchema}
            onSubmit={values => handleSubmit(values)}>
            {({ handleChange, handleSubmit, values, errors }) => (
                <SafeAreaView
                    style={{
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        width: '100%',
                        margin: 10,
                        height: 250,
                        marginBottom: -20,
                    }}>
                    <View style={{ margin: 10, marginBottom: 10, width: '70%' }}>
                        <TextInput
                            focusable={true}
                            onChangeText={handleChange('name')}
                            value={values.name}
                            style={{
                                paddingLeft: 15,
                                backgroundColor: 'white',
                                borderRadius: 5,
                            }}
                            placeholder="Your Name"
                        />
                        {errors.name &&
                            <Text style={{
                                fontSize: 10, color: 'red',
                                marginTop: 10,
                                marginLeft: 5
                            }}>{errors.name}</Text>
                        }
                    </View>
                    <View style={{ margin: 10, marginBottom: 10, width: '70%' }}>
                        <TextInput
                            focusable={true}
                            onChangeText={handleChange('phoneNumber')}
                            keyboardType="phone-pad"
                            value={values.phoneNumber}
                            style={{
                                paddingLeft: 15,
                                backgroundColor: 'white',
                                borderRadius: 5,
                            }}
                            placeholder="Your Phone Number"
                        />
                        {errors.phoneNumber &&
                            <Text style={{
                                fontSize: 10, color: 'red',
                                marginTop: 10,
                                marginLeft: 5
                            }}>{errors.phoneNumber}</Text>
                        }
                    </View>
                    <View style={{ margin: 10, marginBottom: 20, width: '70%' }}>
                        <TextInput
                            focusable={true}
                            onChangeText={handleChange('item')}
                            value={values.item}
                            style={{
                                paddingLeft: 15,
                                backgroundColor: 'white',
                                borderRadius: 5,
                            }}
                            placeholder="Item Purchased"
                        />
                        {errors.item &&
                            <Text style={{
                                fontSize: 10, color: 'red',
                                marginTop: 10,
                                marginBottom: 20,
                                marginLeft: 5
                            }}>{errors.item}</Text>
                        }
                    </View>
                    <Button text="GET YOUR SCRATCH CARD" onPress={handleSubmit} />
                </SafeAreaView>)}
        </Formik>
    );
};

export default RegForm;

function onAuthStateChanged(event: string, session: import("@supabase/gotrue-js").Session | null): void {
    throw new Error('Function not implemented.');
}

