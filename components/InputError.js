import React from "react"
import { Text, View } from "react-native"
// export default InputError = ({error, showError}) => {
//     if(showError&&error!=="") {
    export default InputError = ({error}) => {
        if(error!=="") {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        )
    }
    else return null
}