import React from 'react';
import  {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import * as utility from '../../utility';

export default function RadioButtonList({selected, options, handleTransactionChange} : {selected : any, options : any, handleTransactionChange : any}) : React.JSX.Element {

    const color = utility.TransactionType_bgColor[selected];

    return (
        <View style={styles.container}>
            {options.map((option : any, index : any) => {
                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.item}
                        onPress={() => handleTransactionChange('type', index)}
                    >
                        {selected === index ?
                        <View style={[styles.button, {backgroundColor: color}]}><View style={styles.selected}/></View>
                        :
                        <View style={styles.button}/>
                        }
                        <Text style={styles.text}>{option}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginLeft: 20,
    },
    text: {
        color: 'black',
        marginRight: 5,
        marginLeft: 10,
        fontSize: 18,
    },
    selected: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#666',
        margin: 4,
    },
    button: {
        width: 20,
        borderRadius: 10,
        height: 20,
        borderWidth: 1,
        borderColor: '#666',
    },
});
