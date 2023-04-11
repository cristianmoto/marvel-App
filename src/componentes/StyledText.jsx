import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from '../themes.js';


const styles = StyleSheet.create({
  text: {
  color: theme.colors.textPrimary,
  fontSize: theme.fontSizes.body,
  fontWeight: theme.fontWeights.normal,
  fontFamily: theme.fonts.main
  },
  colorPrimary:{
   color: theme.colors.primary
  },
  colorSecondary:{
   color: theme.colors.textSecondary
  },
  bold: {
   fontWeight: theme.fontWeights.bold
  },
 
 subheading: {
   fontSize: theme.fontSizes.subheading
 }
});
export default function StyledText({children, color, fontSizes, fontWeight, style, ...restOfPros }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary, 
    color === 'secondary' && styles.colorSecondary,
    fontSizes === 'subheading' && styles.subheading,
    fontWeight ==='bold' && styles.bold,
   
  ];

  return <Text style={textStyles}{...restOfPros}>
  {children}
  </Text>;
}
