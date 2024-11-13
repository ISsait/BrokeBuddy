import React from 'react';
import {
    NavigationContainer,
    useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import AddEditScreen from './screens/AddEditTransaction';
import DetailsScreen from './screens/Details';
import EditHeaderButton from './components/EditHeaderButton';

const Stack = createNativeStackNavigator();

function createEditHeaderButton(navigation : any) : React.JSX.Element {
    return (
        <EditHeaderButton navigation={navigation}/>
    );
}

function RootStack() : React.JSX.Element {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                {
                    headerStyle: {backgroundColor: '#f4511e'},
                    headerTintColor: '#fff',
                    headerTitleStyle: {fontWeight: 'bold', fontSize: 24},
                    headerTitleAlign: 'center',
                }
            }
            >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options= {
                    { title: 'All Transactions' }
                }
                />
            <Stack.Screen
                name="Add"
                component={AddEditScreen}
                options= {
                    { title: 'Add Transaction' }
                }
                />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options= {
                    { title: 'Transaction Details',
                    headerRight: () => (
                        createEditHeaderButton(navigation)
                      ),
                    }
                }
                />
            <Stack.Screen
                name="Edit"
                component={AddEditScreen}
                options= {
                    { title: 'Edit Transaction'}
                }
                />
        </Stack.Navigator>
    );
}

export default function Main() : React.JSX.Element {

    return (
        <NavigationContainer>
            <RootStack/>
        </NavigationContainer>
    );
}
