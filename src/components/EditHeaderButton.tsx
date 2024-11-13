import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { commonStyles } from '../../commonStyles';

export default function EditHeaderButton({navigation} : {navigation : any}) : React.JSX.Element {
    const route = navigation.getCurrentRoute();
    console.log(route);
    return (
        <TouchableOpacity
            onPress={() => {
                console.log('Edit Button Pressed');
                navigation.navigate(
                    'Edit',
                    {transaction: route.params.transaction}
                );
            }}
            >
                <Text style={commonStyles.headerText}>
                       Edit
                </Text>
        </TouchableOpacity>
    );
}
