import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../../commonStyles';
import * as utility from '../../utility';

export default function DetailsScreen({route} : {route : any}) : React.JSX.Element {
    const { transaction } = route.params || {};
    const bgColor = utility.TransactionType_bgColor[transaction.type];
    return (
        <View style={commonStyles.view}>
            <View style={[commonStyles.detailsCard, {backgroundColor: bgColor}]}>
                <Text style={commonStyles.detailCardTitle}>{transaction.title}</Text>
                <Text
                    style={commonStyles.detailsText}
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    >
                        {transaction.desc}
                </Text>
                <Text style={[commonStyles.detailsText, {fontWeight:'bold'}]}>${parseFloat(transaction.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</Text>
                <Text style={commonStyles.detailsText}>{utility.TransactionType[transaction.type]}</Text>
            </View>
        </View>
    );
}
