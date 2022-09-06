import React, {useEffect, useState} from "react"
import { Button, FlatList, Modal, ScrollView, Text, TouchableOpacity, View, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../Style";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useSelector, useDispatch } from "react-redux";
import { toggleIsDone, deleteSingleTodo } from "../features/todos/todosSlice";

export default TodoHome = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const DATA = useSelector(state => state.todos)
    const [modalVisible, setModalVisible] = useState(false)
    const [deleteItem, setDeleteItem] = useState({})
    const renderItem = ({ item }) => (
        <View style={styles.listRow}>
            <TouchableOpacity style={[styles.rowElement,styles.smallcolumn]} onPress={()=> dispatch(toggleIsDone(item.id))}>
                {item.isDone===true ? (
                    <View>
                        <FontAwesomeIcon
                        icon="fa-solid fa-clipboard" 
                        size={25}
                        color="#ff8000"/>
                    </View>
                ) : (
                    <View>
                        <FontAwesomeIcon
                        icon="fa-regular fa-square"
                        size={25}
                        color="#ff8000"/>
                    </View>
                )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.bigColumn} onPress={() => navigation.navigate("TodoDetails", {id:item.id})}>
                <Text style={[styles.text, styles.rowElement]}>{item.title}</Text>
            </TouchableOpacity>
            <View style={styles.smallcolumn}>
            {item.isDone===true ? (
                <TouchableOpacity
                style={styles.smallButton}
                onPress={() => {setDeleteItem(item);setModalVisible(true)}}>
                    <FontAwesomeIcon
                    icon="fa-solid fa-trash"
                    size={20}
                    color="#ff8000"/>
                </TouchableOpacity>
            ) : null}
            </View>
        </View>
      );
    return (
        <View style={styles.screen}>
            <TouchableOpacity style={styles.addTodoButton} onPress={() => navigation.navigate("TodoCreate")}>
                <FontAwesomeIcon icon="fa-solid fa-plus" size={30} color="white"/>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
            <View style={styles.listRow}>
                <View style={[ styles.rowElement,styles.smallcolumn]}>
                    <Text style={[styles.text]}>Select</Text>
                </View>
                <Text style={[styles.text, styles.rowElement,styles.bigColumn]}>Title</Text>
                <TouchableOpacity
                style={[styles.smallButton, styles.smallcolumn]}>
                    <FontAwesomeIcon
                    icon="fa-solid fa-trash"
                    size={25}
                    color="#ff8000"/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
            <Modal
            animationType="fade"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(!modalVisible)
                setEmailInput("")
                setPasswordInput("")
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Are you sure to delete "{deleteItem.title}"</Text>
                        <Pressable
                        style={styles.modalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={[styles.modalText, styles.coloredButtonText]}>Dismiss</Text>
                        </Pressable>
                        <Pressable
                        style={styles.modalButton}
                        onPress={() => {dispatch(deleteSingleTodo(deleteItem.id)); setModalVisible(!modalVisible)}}
                        >
                        <Text style={[styles.modalText, styles.coloredButtonText]}>Confirm</Text>
                        </Pressable>
                    </View>
                    </View>
            </Modal>
        </View>
    )
}