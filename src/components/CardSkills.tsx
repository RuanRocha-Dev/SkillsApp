import React from "react";
import {
  Text, 
  TouchableOpacity, 
  TouchableOpacityProps,
  StyleSheet} from "react-native";

interface skillCardProps extends TouchableOpacityProps {
    skill: string
  }

export function CardSkills( {skill, ...rest} : skillCardProps ) {

  return(
    <TouchableOpacity 
      style={styles.buttonSkills}
      {...rest}>
        <Text style={styles.textSkills}> 
          {skill}
        </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    buttonSkills: {
      width: "90%",
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: "#1f1e25",
      padding: 15,
      borderRadius: 30,
      alignItems: "center",
      marginVertical: 15
    },
    textSkills: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold"
    }
  })