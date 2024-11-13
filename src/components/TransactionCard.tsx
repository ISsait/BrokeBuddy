import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { commonStyles } from '../../commonStyles';
import * as utility from '../../utility';


export default function TransactionCard({transaction, navigation} : {transaction : utility.TransactionEntry, navigation : any}) : React.JSX.Element {

    const transactionType = transaction.type;
    const bgColor = utility.TransactionType_bgColor[transactionType];

    return (
        <TouchableOpacity style={[
            commonStyles.card,
            {backgroundColor: bgColor},
            ]}
            onPress={ () => {
                navigation.navigate('Details', {transaction: transaction});
                }}
            >
                <Text style={commonStyles.cardText}>{transaction.title}</Text>
                <Text style={commonStyles.cardText}>${parseFloat(transaction.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
        </TouchableOpacity>
    );
}