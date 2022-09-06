import React from "react"
import { Text, View } from "react-native"
import { styles } from "../Style"
export default InputCounter = ({inputLength, maxLength, errorMessage}) => {
    return (
        <View>
            <Text style={[styles.text, styles.inputCounter]}>{inputLength + "/" + maxLength}</Text>
            {inputLength>maxLength? (
                <Text style={[styles.text, styles.inputCounter,styles.errorColor]}>{errorMessage}</Text>
            ): null}
        </View>
    )
}