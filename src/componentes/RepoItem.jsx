import React from "react";
import { View, StyleSheet , Image} from "react-native";
import StyledText from "./StyledText";


const RepoStats = (props) => (
  <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
    <StyledText color="primary">Edad: {props.edad}</StyledText>
    <StyledText color="primary">Peliculas: {props.peliculas}</StyledText>
  </View>
  

);
const RepoItem = (props) => (
  <View key={props.id} style={styles.container}>
  <Image source={{uri:props.img}}style={styles.image} />
    <StyledText fontWeight="bold">Heroe: {props.id}</StyledText>
    <StyledText fontWeight="normal" color="primary">
      Nombre: {props.nombreReal}
    </StyledText>
    <StyledText color="secondary">Poder: {props.poder}</StyledText>
    <RepoStats {...props}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 4,
    overflow: "hidden"
  }

});

export default RepoItem;
