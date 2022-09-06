import React, { useState } from "react"
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "../Style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todosSlice";
import InputCounter from "../components/InputCounter";
import { useNavigation } from "@react-navigation/native";
export default TodoCreate = () => {
    const navigation= useNavigation()
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [titleError, setTitleError] = useState("")
    const validateCreate = () => {
        if (title === "") {
            setTitleError("Title is required")
        } else {
            setTitleError("")
            dispatch(createTodo(title, desc))
            navigation.navigate("Todo App")
        }
    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
            <View style={styles.form}>
                <View style={styles.formRow}>
                    <FontAwesomeIcon
                    size={25}
                    style={styles.formLine}
                    icon="fa-solid fa-heading"
                    color="#ff8000"/>
                    <TextInput placeholder="Title"
                    style={[styles.formLine,styles.text]}
                    autoFocus
                    onChangeText={(title) => {
                        setTitle(title);
                    }}/>
                </View>
                {titleError===""? null : (
                <Text style={[styles.text,styles.errorColor]}>{titleError}</Text>
                )}
                <View style={styles.formRow}>
                    <FontAwesomeIcon
                    size={25}
                    style={styles.formLine}
                    icon="fa-solid fa-clipboard"
                    color="#ff8000"/>
                    <View
                    style={styles.formLine}
                    flex={1}>
                        <TextInput placeholder="Description"
                        style={[styles.formLine,styles.text]}
                        onChangeText={(desc) => {
                            setDesc(desc);
                        }}
                        multiline={true}
                        numberOfLines={5}/>
                        <InputCounter inputLength={desc.length} maxLength={256} errorMessage="Keep it short!"/>
                    </View>
                </View>
                <TouchableOpacity
                style={styles.button}
                onPress={() => validateCreate()}>
                <FontAwesomeIcon
                icon="fa-solid fa-check"
                size={25}
                style={styles.formLine}
                color="white"/>
                    <Text style={[styles.formLine, styles.buttonText]}>Create</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}