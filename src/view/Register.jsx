import React, { useState } from "react";
import { StyleSheet, View } from "react-native"; 
import { TextInput, Button } from 'react-native-paper';
import { getAuth } from "firebase/auth"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { Alert } from "react-native";
import { Text } from "react-native-paper";
import { firebaseConfig } from "../../assets/auth/auth";

export const Register = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('') 

    const app = initializeApp(firebaseConfig)   

    const auth = getAuth(app)

    const cleanInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const register = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            Alert.alert("Usuário cadastrado com sucesso!")
            navigation.navigate('Login');
            cleanInputs();
        }).catch((error)=> {
            switch(error.message) {
                case "Firebase: Error (auth/invalid-email).":
                    Alert.alert("Email inválido");
                    break;
                case "Firebase: Error (auth/email-already-in-use).":
                    Alert.alert("Email já cadastrado");
                    break;
                case "Firebase: Password should be least 6 characters (auth/weak-password).":
                    Alert.alert("A senha deve conter pelo menos 6 caracteres");
                    break;
            }  
        })
    }

    return (
        <View style={styles.container}>
                <Text  style={styles.TextTitle}>CADASTRAR</Text>
                <TextInput
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    placeholder="Email ou número do seu telefone"
                    style={styles.marginBox}
                    placeholderTextColor={'#474646'} 
                />

                <TextInput
                    secureTextEntry
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    placeholder="Senha"
                    style={styles.marginBox}
                    placeholderTextColor={'#474646'}
                />  

                <Button
                mode="contained" 
                style={styles.marginBox}
                onPress={() => register()}
                theme={{colors: {primary: '#e50914'}}}>
                Cadastrar
                </Button>   

                <Button 
                style={styles.marginBox}
                onPress={() => {navigation.navigate('Login');
                cleanInputs();
                }}
                theme={{colors: {primary: '#e50914'}}}>
                Já è cadastrado? Faça seu Login
                </Button> 
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    marginBox: {
        marginBottom: 20,
        marginTop: 5,
        width: 300,
    },
    TextTitle: {
        color: '#e50914',
        marginBottom: 20,
        fontSize: 26,
        fontWeight: "bold"
    }
});
