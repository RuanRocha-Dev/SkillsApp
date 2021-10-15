import React from "react"
import {Text, 
  TouchableOpacity, 
  TouchableOpacityProps,
  StyleSheet} from "react-native"

interface buttonProps extends TouchableOpacityProps {
    title: string
}

export function Button( {title, ...rest} : buttonProps ) {

  return(
    <TouchableOpacity 
      style={styles.button} 
      {...rest}>
        <Text style={styles.buttonText}> 
          {title} 
        </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: "#a370f7",
      padding: 15,
      borderRadius: 7,
      alignItems: "center",
      marginTop: 15
    },
    buttonText: {
      color: "#fff",
      fontSize: 17,
      fontWeight: "bold"
    }
  })