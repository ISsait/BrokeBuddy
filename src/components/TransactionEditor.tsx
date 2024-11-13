import React from 'react';
import {
    View,
    TextInput,
    Text,
} from 'react-native';
import { commonStyles } from '../../commonStyles';

export default function TransactionEditor({transaction, handleTransactionChange, inputValidated} : {transaction : any, handleTransactionChange : any, inputValidated : any}) : React.JSX.Element {
    return (
        <View>
            <TextInput
                style={commonStyles.input}
                placeholder="Title"
                defaultValue={transaction ? transaction.title : ''}
                placeholderTextColor={'#666'}
                keyboardType="default"
                onChange={(e) => handleTransactionChange('title', e.nativeEvent.text)}
                />
                {!inputValidated.title ? <Text style={commonStyles.errorText}>Title is required</Text> : <Text>  </Text>}
            <TextInput
                style={[commonStyles.input, {height: 100}]}
                placeholder="Description"
                defaultValue={transaction ? transaction.desc : ''}
                placeholderTextColor={'#666'}
                keyboardType="default"
                onChange={(e) => handleTransactionChange('desc', e.nativeEvent.text)}
                />
                {!inputValidated.desc ? <Text style={commonStyles.errorText}>Description is required</Text> : <Text>  </Text>}
            <TextInput
                style={commonStyles.input}
                placeholder="Amount"
                defaultValue={transaction ? transaction.amount.toString() : ''}
                placeholderTextColor={'#666'}
                keyboardType="numeric"
                onChange={(e) => handleTransactionChange('amount', e.nativeEvent.text)}
                />
                {!inputValidated.amount ? <Text style={commonStyles.errorText}>Amount is required and must be a number</Text> : <Text>  </Text>}
        </View>
    );
}
