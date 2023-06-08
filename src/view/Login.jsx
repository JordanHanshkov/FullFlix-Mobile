import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native"; 
import { TextInput, Button } from 'react-native-paper';
import logoImage from '../../assets/FULLFLIX.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { Alert } from "react-native";
import { firebaseConfig } from "../../assets/auth/auth";

export const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('') 

    const app = initializeApp(firebaseConfig)   

    const auth = getAuth(app)

    const cleanInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const entrar = async() => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            console.log(response);
            navigation.navigate('Home')
            cleanInputs();
        })
        .catch((error)=> {
            switch(error.message) {
                case "Firebase: Error (auth/invalid-email).":
                    Alert.alert("Email inválido");
                    break;
                case "Firebase: Error (auth/user-not-found).":
                    Alert.alert("Usuário não encontrado");
                    break;
                case "Firebase: Error (auth/missing-password).":
                    Alert.alert("Digite a senha");
                    break;
                case "Firebase: Error (auth/wrong-password).":
                    Alert.alert("Email e/ou senha inválidos");
                    break;
                default:
                    Alert.alert(error.message.toString());
                    break;
            }  
        });
    };

    return (
        
        <View style={styles.container}>
            <Image style={styles.logo} source={logoImage}/>
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
                onPress={() => entrar()}
                theme={{colors: {primary: '#e50914'}}}>
                Entrar
                </Button>   
                <Button 
                style={styles.marginBox}
                onPress={() => {navigation.navigate('Register');
                cleanInputs();
                }}
                theme={{colors: {primary: '#e50914'}}}>
                Ainda não tem cadastro?
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
    logo: {
        height: 60,
        width: 320,
        marginBottom: 50
    },
    marginBox: {
        marginBottom: 20,
        marginTop: 5,
        width: 300,
    },  
});