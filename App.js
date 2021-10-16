import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, Image, View, FlatList, Alert, TouchableOpacity } from 'react-native';
import AddItem from './components/add-item';
import Header from './components/header';
import ListItem from './components/list-item';

export default function App() {

  let textInput = useRef()
  var rand = () => (Math.floor(Math.random() * 10000));

  const [items, setItems] = useState([
    {id: rand() , text: 'Milk'},
    {id: rand(), text: 'Groundnut'},
    {id: rand(), text: 'Milo'},
    {id: rand(), text: 'Sugar'},
  ])

  const deleteItem = (id) => {
    setItems(prev => {
      return prev.filter(item => item.id !== id)
    })
  }

  const itemExist = (text) => {
    let exists = false
    for (let i = 0; i < items.length; i++) {
      if (items[i].text === text) { 
        exists = true
      } 
    }
    return exists 
  }

  const addItem = (item) => {
    if(!item){ 
      return Alert.alert("Input Required", "Please Enter an Item")
    }else if(item.split(' ').length > 3){
      return Alert.alert("Invalid Input", "Your Item must not be more than 3 words")
    }else if (itemExist(item)) {
      return Alert.alert('Duplicate Entry', 'Item Exists')  
    }

    setItems(prev => {
      return [...prev, {id: rand(), text: item}]
    })

    textInput.current.clear()
  }

  const clearItems = () => {
    setItems([])
  }

  const clearForm = () => {
    textInput.current.clear()
  }

  useEffect(() => {
  }, [items])

  return (
    <View style={style.container}>
      <Header  />
      <AddItem textInput={textInput} addItem={addItem} />
      <FlatList 
        data={items} 
        renderItem={
          ({item}) => (
            <ListItem deleteItem={deleteItem} item={item} />
          ) 
        } 
        />
        <View style={style.tab}>
          <TouchableOpacity onPress={clearForm}>
            <Text>Clear Form</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clearItems}>
            <Text>Clear Items</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  tab: {
    height: 60,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})
