import React, { useState } from "react";
const axios = require('axios');
import { Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../features/users/usersSlice";
import InputError from "../components/InputError";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { styles } from "../Style";


export default Login = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [emailInput,setEmailInput] = useState("")
    const [passwordInput,setPasswordInput] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [modalVisible, setModalVisible] = useState(false)
    
    const login = () => {
        setEmailError("")
        setPasswordError("")
        let emailValid = isEmailValid(emailInput)
        let passwordValid = isPasswordValid(passwordInput)
        if(emailValid===true && passwordValid===true) {
            getUser()
        }
    }
    async function getUser() {
        try {
          const response = await axios.get('https://httpbin.org/basic-auth/tungnn.bachasoft%40gmail.com/12121212', {
            auth: {
                username: emailInput,
                password: passwordInput
              }
          });
          if(response.status === 200) {
            dispatch(setUser(emailInput, passwordInput))
            navigation.navigate("Home")
          } else {
            setModalVisible(true)
          }
        } catch (error) {
          console.error(error);
          setModalVisible(true)
        }
      }
      
    const isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        if(email.length===0) {
            setEmailError("Email is required")
            return false
        }
        else if(!reg.test(email)) {
            setEmailError("Please enter a valid email: abc@gmail.com")
            return false
        } else {
            return true
        }
    }
    const isPasswordValid = (password) => {
        if(password.length ===0) {
            setPasswordError("Password is required")
            return false
        }
        else if(password.length <= 7) {
            setPasswordError("Password too short, >= 8")
            return false
        } else {
            return true
        }
    }
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View>
                    <Image style={styles.image} source={require("../assets/photos/BHSoft_400.png")}/>
                    <View style={styles.form}>
                        <View style={styles.formRow}>
                            <FontAwesomeIcon
                            size={25}
                            style={styles.formLine}
                            icon="fa-regular fa-envelope"
                            color="#ff8000"/>
                            <TextInput placeholder="Email address"
                            style={[styles.formLine,styles.text]}
                            autoFocus
                            onChangeText={(email) => {
                                setEmailInput(email);
                            }}/>
                        </View>
                        <InputError error={emailError}/>
                        <View style={styles.formRow}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-key"
                            size={25}
                            style={styles.formLine}
                            color="#ff8000"/>
                            <TextInput placeholder="Enter password"
                            style={[styles.formLine, styles.text]}
                            onChangeText={(password) => {
                            setPasswordInput(password);
                        }}/>
                        </View>
                        <InputError error={passwordError}/>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => login()}>
                            <FontAwesomeIcon
                            icon="fa-solid fa-check"
                            size={25}
                            style={styles.formLine}
                            color="white"/>
                            <Text style={[styles.formLine, styles.buttonText]}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
                        <Text style={styles.modalText}>Incorrect Email or password</Text>
                        <Pressable
                        style={styles.modalButton}
                        onPress={() => setModalVisible(!modalVisible)}
                        >
                        <Text style={[styles.modalText, styles.coloredButtonText]}>Dismiss</Text>
                        </Pressable>
                    </View>
                    </View>
            </Modal>
        </SafeAreaView>
    )
}