import React from "react";
import { StatusBar } from 'react-native';
import Routes from "./src/components/Routes";


export default function App() {

    return (  
        <>
            <StatusBar barStyle="dark-content" backgroundColor="ffff"/> 
            <Routes/>
        </>
    );
}
