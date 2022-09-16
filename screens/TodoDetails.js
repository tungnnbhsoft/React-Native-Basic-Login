import React, { useState } from "react"
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "../Style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useDispatch, useSelector } from "react-redux";
import InputCounter from "../components/InputCounter";
import { useNavigation } from "@react-navigation/native";
import { updateTodo } from "../features/todos/todosSlice";
import { useForm, Controller } from "react-hook-form";
export default TodoDetails = ({route}) => {
    const {id} = route.params
    const navigation= useNavigation()
    const todo = useSelector(state=> state.todos.find(todo => todo.id === id))
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors }, getValues, setValue  } = useForm({
        defaultValues: {
          title: todo.title,
          desc: todo.description
        }
    });
    // Without react-hook-form
    // const [title, setTitle] = useState(todo.title)
    // const [desc, setDesc] = useState(todo.description)
    // const [titleError, setTitleError] = useState("")
    const [changesMade, setChangesMade] = useState(false)
    // Without react-hook-form
    // const validateUpdate = () => {
    //     if (title === "") {
    //         setTitleError("Title is required")
    //     } else {
    //         setTitleError("")
    //         dispatch(updateTodo(id,title, desc))
    //     }
    // }
    // const cancelChanges = () => {
    //     setTitle(todo.title)
    //     setDesc(todo.description)
    // }
    // With react-hook-form
    const cancelChanges = () => {
        setValue("title", todo.title)
        setValue("desc", todo.description)
        setChangesMade(false)
    }
    const saveChanges = () => {
        dispatch(updateTodo(id,getValues("title"),getValues("desc")))
        navigation.navigate("Todo App")
    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style={styles.form}>
                    {/* <View style={styles.formRow}>
                        <FontAwesomeIcon
                        size={25}
                        style={styles.formLine}
                        icon="fa-solid fa-heading"
                        color="#ff8000"/>
                        <TextInput placeholder="Title"
                        value={title}
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
                            value={desc}
                            style={[styles.formLine,styles.text]}
                            onChangeText={(desc) => {
                                setDesc(desc);
                            }}
                            multiline={true}
                            numberOfLines={5}/>
                        </View>
                    </View>
                    {title===todo.title && desc===todo.description ? null : (
                        <View style={styles.flexRow}>
                            <TouchableOpacity
                            style={[styles.button, styles.alignSelfLeft]}
                            onPress={() => cancelChanges()}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-check"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                                <Text style={[styles.formLine, styles.buttonText]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={[styles.button, styles.alignSelfRight]}
                            onPress={() => validateUpdate()}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-check"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                                <Text style={[styles.formLine, styles.buttonText]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    )} */}
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
                        onChangeText={(value)=> {onChange(value); setChangesMade(true)}}
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
                            onChangeText={(value)=> {onChange(value); setChangesMade(true)}}
                            value={value}
                            multiline={true}
                            numberOfLines={5}/>
                            )}
                            name="desc"
                            />
                        </View>
                    </View>
                    {changesMade===false ? null : (
                        <View style={styles.flexRow}>
                            <TouchableOpacity
                            style={[styles.button, styles.alignSelfLeft]}
                            onPress={() => cancelChanges()}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-check"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                                <Text style={[styles.formLine, styles.buttonText]}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={[styles.button, styles.alignSelfRight]}
                            onPress={() => saveChanges()}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-check"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                                <Text style={[styles.formLine, styles.buttonText]}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}