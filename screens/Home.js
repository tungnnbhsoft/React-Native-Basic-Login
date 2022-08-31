import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector,useDispatch } from "react-redux";
import { logoutUser, setUser } from "../features/users/usersSlice";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../Style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default Home = () => {
    const dispatch = useDispatch()
    const navigation= useNavigation()
    const user = useSelector(state => state.users)
    console.log(user)
    return (
        <View>
            {!user.email ? (
                <Text>You have logged out</Text>
            ): (
                <Text>Welcome, {user.email}</Text>
            )}
            <TouchableOpacity
                        style={styles.button}
                        onPress={() => {dispatch(logoutUser());navigation.navigate("Login")}}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-arrow-right-from-bracket"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                            <Text style={[styles.formLine, styles.buttonText]}>Log out</Text>
                        </TouchableOpacity>
        </View>
    )
}