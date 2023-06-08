import { StyleSheet, SafeAreaView} from "react-native"; 
import Header from "../components/Header";
import BgImage from "../components/bgImage";


import api from "../components/api/req"
import { useState } from "react";



export function Home() {
    
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <BgImage/>
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
    }
});



