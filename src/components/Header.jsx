import React from "react";
import { 
    Text, 
    StyleSheet, 
    View, 
    TextInput} from "react-native"; 
import { 
    FlatList, 
    ActivityIndicator 
} from "react-native";


export const Header= () => {

    
    return (
        <View style={styles.container}>
           <Text style={styles.headerText}>Pesquisar</Text>
           <View style={styles.containerInput}>
                <TextInput 
                style={styles.input}
                placeholder="Buscar"
                placeholderTextColor="#fff"/>
            </View>      
        </View>
    )
}

const styles = StyleSheet.create({
    textWhite: {
        color: '#fff',
        top: 20
    },
    header: {
        position: 'absolute',
        top: 0, 
        zIndex: 999,
    }, 
    headerSafeAreaView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 78,
        alignItems: 'center',
        backgroundColor: '#e50914',
    },
    container: {
        
        padding: 10,
        backgroundColor: "#e50914",
      },
      headerText: {
        marginTop: 30,
        fontSize: 24,
        lineHeight: 45,
        color: "#fff",
        fontWeight: "bold",
      },
      containerInput: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#3A3F47",
        height: 42,
        padding: 10,
        borderRadius: 16,
        marginTop: 24,
        marginBottom: 20,
      },
      input: {
        color: "#fff",
        width: "80%",
      }
});


export default Header;