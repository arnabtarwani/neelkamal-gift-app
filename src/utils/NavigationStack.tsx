import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';

export function NavigationStack(props: any) {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#D1E7FF' },
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    headerShown: false,
                    cardStyle: { backgroundColor: '#D1E7FF' },
                }}
            />
        </Stack.Navigator>
    );
}
