import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import ToDo_List from './ToDo_List';

//call ToDo_List from a seperate file
//app.js acts as main area to display todo_list.js
//easier to edit due to it being seperate js

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <ToDo_List/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
