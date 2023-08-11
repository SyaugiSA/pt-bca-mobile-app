import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen'
import { black } from '../../resource/colors'
import RadioComponent from '../RadioButton/RadioComponent'

const QuisionerCardComponent = ({question}) => {
  return (
    <View className='bg-gray-200 rounded-md p-4 my-3'>
      <Text style={styles.textQuestion}>{question}</Text>
      <RadioComponent value={'1'} />
    </View>
  )
}

export default QuisionerCardComponent

const styles = StyleSheet.create({
    textQuestion:{
        fontSize:widthPercentageToDP(4),
        fontWeight:'bold',
        color:black
    }
})