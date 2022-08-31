import React from "react"
import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white",
        flex: 1
    },
    image: {
        alignSelf: "center",
        height: 60,
        resizeMode: "contain",
        marginVertical: 50,
    },
    form: {
        alignItems: "center",
    },
    formRow: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        borderColor: "#ff8000",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        marginBottom:20,
        height: 45
    },
    formLine: {
        marginLeft:20,
    },
    text:{
        fontSize: 16,
        flex: 1,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "#ff8000",
        height: 45,
        borderColor: "#ff8000",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        width: 150,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modalText: {
        textAlign: "center",
      },
      modalButton: {
        flexDirection: "column",
        backgroundColor: "#ff8000",
        height: 45,
        borderColor: "#ff8000",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 2,
        width: 120,
        marginTop: 20,
        justifyContent: "center",
      },
      coloredButtonText: {
        color: "white",
      },
    test: {

    }
})
export { styles }