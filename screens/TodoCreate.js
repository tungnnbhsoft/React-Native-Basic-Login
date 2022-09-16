import React, { useState } from "react"
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "../Style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todosSlice";
import InputCounter from "../components/InputCounter";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import InputError from "../components/InputError";

export default TodoCreate = () => {
    const navigation= useNavigation()
    const dispatch = useDispatch()
    // Validation with react-hook-form
    const { control, handleSubmit, formState: { errors }, getValues } = useForm({
        defaultValues: {
          title: '',
          desc: ''
        }
      });
    // Validation without react-hook-form
    // const [title, setTitle] = useState("")
    // const [desc, setDesc] = useState("")
    // const [titleError, setTitleError] = useState("")
    // const validateCreate = () => {
    //     if (title === "") {
    //         setTitleError("Title is required")
    //     } else {
    //         setTitleError("")
    //         dispatch(createTodo(title, desc))
    //         navigation.navigate("Todo App")
    //     }
    // }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style={styles.form}>
                    {/* Validation without react-hook-form */}
                    {/* <View style={styles.formRow}>
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
                    </TouchableOpacity> */}

                    {/* Validation with react-hook-form */}
                    <View style={styles.formRow}>
                        <FontAwesomeIcon
                        size={25}
                        style={styles.formLine}
                        icon="fa-solid fa-heading"
                        color="#ff8000"/>
                        <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        placeholder="Title"
                        style={[styles.formLine,styles.text]}
                        autoFocus
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        />
                        )}
                        name="title"
                        />
                    </View>
                    {errors.title && <Text style={[styles.text,styles.errorColor]}>Title is required</Text>}
                    <View style={styles.formRow}>
                        <FontAwesomeIcon
                        size={25}
                        style={styles.formLine}
                        icon="fa-solid fa-clipboard"
                        color="#ff8000"/>
                        <View
                        style={styles.formLine}
                        flex={1}>
                            <Controller
                            control={control}
                            rules={{
                            maxLength: 256,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                            placeholder="Description"
                            style={[styles.formLine,styles.text]}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            multiline={true}
                            numberOfLines={5}/>
                            )}
                            name="desc"
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={handleSubmit(() => {dispatch(createTodo(getValues("title"), getValues("desc"))); 
                    navigation.navigate("Todo App")})}>
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