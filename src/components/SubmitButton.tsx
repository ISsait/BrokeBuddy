import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import { commonStyles } from '../../commonStyles';

export default function SubmitButton({handleSubmit} : {handleSubmit : any}) : React.JSX.Element {
    return (
        <TouchableOpacity style={commonStyles.submitButton} onPress={handleSubmit}>
            <Text style={commonStyles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
    );
}
