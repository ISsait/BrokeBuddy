import React from 'react';
import {
    Alert,
    View,
} from 'react-native';
import { commonStyles } from '../../commonStyles';
import {useState} from 'react';
import RadioButtonList from '../components/RadioButtonList';
import TransactionEditor from '../components/TransactionEditor';
import * as utility from '../../utility';
import SubmitButton from '../components/submitButton';

const options = Object.values(utility.TransactionType).filter((type) => typeof type === 'string');

export default function AddEditScreen({route, navigation} : {route : any, navigation : any}) : React.JSX.Element {
    const {transaction} = route.params ? route.params : {transaction: null};
    const [currentTransaction, setCurrentTransaction] = useState<utility.TransactionEntry>(transaction ?
        {
            id: transaction.id,
            title: transaction.title,
            desc: transaction.desc,
            amount: transaction.amount,
            type: transaction.type,
        } :
        {
            id: '',
            title: '',
            desc: '',
            amount: '',
            type: 0,
        }
    );

    function handleTransactionChange (field : string, value : any) {
        const newTransaction = {...currentTransaction, [field]: value};
        setCurrentTransaction(newTransaction);
        console.log('Transaction Changed: -', {...newTransaction});
    }

    const [inputValidated, setInputValidated] = useState(
        {
            title: true,
            desc: true,
            amount: true,
        }
    );

    function validateEntries() {
        const newInputValidated = {
            title: currentTransaction.title.length > 0,
            desc: currentTransaction.desc.length > 0,
            amount: currentTransaction.amount > 0 && !isNaN(currentTransaction.amount),
        };
        setInputValidated(newInputValidated);
        let flag = true;
        for (const key in newInputValidated) {
            if (!newInputValidated[key as keyof typeof newInputValidated]) {
                flag = false;
            }
        }
        return flag;
    }
    function handleSubmit() {
        if (transaction) {
            // update transaction
            if (!validateEntries()) {
                Alert.alert('Invalid Entries', 'Please check the entries and try again.');
                console.log(inputValidated);
                return;
            }
            utility.addEditTransaction(currentTransaction);

            console.log('submitted');
            console.log('Id for edited transaction: ', currentTransaction.id);
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
            });
            Alert.alert('Transaction Updated', 'Transaction has been updated successfully.');
        } else {
            // add transaction
            if (!validateEntries()) {
                Alert.alert('Invalid Entries', 'Please check the entries and try again.');
                console.log(inputValidated);
                return;
            }
            const id = utility.getNewID();
            const newTransaction = {...currentTransaction, id};
            utility.addEditTransaction(newTransaction);

            navigation.goBack();
            console.log('submitted');
            Alert.alert('Transaction Added', 'Transaction has been added successfully.');
        }
    }


    return (
        <View style={commonStyles.container}>
            <TransactionEditor transaction={currentTransaction} handleTransactionChange={handleTransactionChange} inputValidated={inputValidated}/>
            <RadioButtonList selected={currentTransaction.type} options={options} handleTransactionChange={handleTransactionChange}/>
            <SubmitButton handleSubmit={handleSubmit}/>
        </View>
    );
}
