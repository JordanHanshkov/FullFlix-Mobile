import React from "react";
import { StyleSheet, View, ImageBackground} from "react-native"; 

export const BgImage= () => {
    return (
        <ImageBackground source={require("../../assets/background.png")}
        style={{ flex: 1, height: 380, width: '100%', alignItems: 'center' }}>
            <View style={{flex: 1}}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
   
});


export default BgImage;