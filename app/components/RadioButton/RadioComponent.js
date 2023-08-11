import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const RadioComponent = () => {
  const [value, setValue] = React.useState('first');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View className='flex-row self-center '>
      <View className='flex-row-reverse items-center mx-3 my-5'>
        <Text>1</Text>
        <RadioButton value="1" />
      </View>
      <View className='flex-row-reverse items-center mx-3 my-5'>
        <Text>2</Text>
        <RadioButton value="2" />
      </View>
      <View className='flex-row-reverse items-center mx-3 my-5'>
        <Text>3</Text>
        <RadioButton value="3" />
      </View>
      <View className='flex-row-reverse items-center mx-3 my-5'>
        <Text>4</Text>
        <RadioButton value="4" />
      </View>
      <View className='flex-row-reverse items-center mx-3 my-5'>
        <Text>5</Text>
        <RadioButton value="5" />
      </View>
      </View>
    </RadioButton.Group>
  );
};

export default RadioComponent;