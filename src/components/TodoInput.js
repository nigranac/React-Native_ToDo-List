import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {todo_input} from '../styles';

const TodoInput = (props) => {
  const [text, setText] = useState('');
  const anotherFunc = (val) =>{
    setText('');
}
  return (
  
      <View style={todo_input.container}>
        <View style={todo_input.inputContainer}>
          <TextInput
            placeholder="Type something to do.."
            onChangeText={(value) => setText(value)
            }
            blurOnSubmit={true}
            defaultValue={text}
          />
        </View>

        <TouchableOpacity
          style={todo_input.buttonContainer}
          onPress={() =>
           text == ''
           ? console.warn('Please enter a todo')
           : props.onTodoEnter((text))&&props.onTodoEnter(anotherFunc)}>
          <Text style={todo_input.buttonText}>ADD TODO</Text>
        </TouchableOpacity>
      </View>
  
  );
};

export {TodoInput};
