import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { black } from '../../resource/colors'

const CardDashboard = ({title, source,customStyle, keyValue}) => {
  return (
    <View key={keyValue} className='bg-gray-100 rounded-md' style={styles.container}>
      <Pressable onPress={() => console.log('pressed')} className='items-center'>
      <Image source={source} style={[styles.image, customStyle]} />
      <Text style={styles.textTitle}>{title}</Text>
      </Pressable> 
    </View> 
  )
} 

export default CardDashboard

const styles = StyleSheet.create({
    image:{
        width:widthPercentageToDP(20),
        height:heightPercentageToDP(15),
        resizeMode:'contain'
    },
    container:{
        width:widthPercentageToDP(25),
        height:heightPercentageToDP(15),

    },
    textTitle:{
        fontSize:widthPercentageToDP(3),
        fontWeight:'bold',
        color:black
    }
})