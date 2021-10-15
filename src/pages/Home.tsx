import React, { useState } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { CardSkills } from '../components/CardSkills';
import Icon from "react-native-vector-icons/Entypo";

interface skillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkills] = useState("");
  const [mySkill, setMyskill] = useState<skillData[]>([]); 
  const infoSkill = mySkill.length >0 ? "voce tem " + mySkill.length + " hábilidades para treinar" : ""
  
  function handleNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMyskill(oldState => [...oldState, data])
  };

  function handleRemoveSkill(id: string){
    setMyskill(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}> Bem Vindo(a) </Text>
        <Text style={{color: "#fff", marginTop: 5}}> {infoSkill}  </Text>
      </View>
  
      <TextInput 
        style={styles.input}
        placeholder= "Hábilidades para Treinar"
        placeholderTextColor= "#666"
        onChangeText=  {setNewSkills}
      /> 
    
      <Button onPress={handleNewSkill} title="Adicionar"/>

      <Text style={[styles.title, {marginVertical: 45}]}> 
        Minhas Hábilidades 
      </Text>

      <FlatList
        showsVerticalScrollIndicator= {false}
        data={mySkill}
        keyExtractor={item => item.id}
        renderItem={( {item} ) => (
          <View style={styles.cardSkills}>
            <CardSkills skill={item.name}/>
            <TouchableOpacity onPress={() => handleRemoveSkill(item.id)}>
              <Icon name="trash" size={40} color="#fff9"/>
            </TouchableOpacity>
          </View>
        )}
        />
    </View>
  );
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding : 15,
    marginTop: 30,
    borderRadius: 10
  },
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
  },
  buttonSkills: {
    backgroundColor: "#1f1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 15
  },
  textSkills: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  cardSkills: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  
  }
})