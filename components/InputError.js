import React from "react"
import { Text, View } from "react-native"
import { styles } from "../Style";
export default InputError = ({error, showError}) => {
    if(showError&&error!=="") {
    // export default InputError = ({error}) => {
    //     if(error!=="") {
        return (
            <View>
                <Text style={styles.errorColor}>{error}</Text>
            </View>
        )
    }
    else return null
}