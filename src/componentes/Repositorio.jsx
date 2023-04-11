import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import data from "../componentes/data.js";
import RepoItem from './RepoItem.jsx';

const Repositorio = () => {
    return (
        <FlatList
            data={data}
            renderItem={({item:props})=>(
              <RepoItem {...props}/>
            )}
        />
       
    );
}

const styles = StyleSheet.create({})

export default Repositorio;
