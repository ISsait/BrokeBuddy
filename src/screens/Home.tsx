import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { commonStyles } from '../../commonStyles';
import TransactionList from '../components/TransactionList';

export default function HomeScreen({navigation} : {navigation : any}) : React.JSX.Element {

    return (
        <View style={commonStyles.view}>
            <TransactionList navigation={navigation}/>
            <TouchableOpacity
                onPress={() => navigation.navigate('Add')}
                style={commonStyles.fab}
                >
                <Image
                    source={require('../assets/Plus.png')}
                    style={commonStyles.fabIcon}
                    />
            </TouchableOpacity>
        </View>
    );
}
