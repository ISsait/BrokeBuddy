import React from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';
import TransactionCard from '../components/TransactionCard';
import * as utility from '../../utility';
import { commonStyles } from '../../commonStyles';

// function that returns a list of transaction cards
export default function TransactionList({navigation} : {navigation : any}) : React.JSX.Element {
    const transactions = utility.getInitialData();
    const empty = transactions.length === 0;
    return (
        <View style={commonStyles.view}>
        {empty ? <Text style={commonStyles.emptyScreenText}>Press Green Button Below to Add New Transaction To List</Text>
        :
        <FlatList
            style= {commonStyles.list}
            data={transactions}
            renderItem={({item}) => <TransactionCard transaction={item} navigation={navigation}/>}
            keyExtractor={(item) => item.id.toString()}
            />
        }
        </View>
    );
}
