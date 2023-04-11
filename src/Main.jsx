import React from 'react';
import Constants from 'expo-constants';
import {View, Text} from 'react-native';
import Repositorio from './componentes/Repositorio';

const Main = () => {
    return (
        <View style={{marginTop:Constants.statusBarHeight, flexGrow:1}}>
        <Text style={{flexGrow:1}}>Avengers!</Text>
          <Repositorio />
        </View>
    );
}

//const styles = StyleSheet.create({})

export default Main;
