import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { black } from '../../resource/colors'

const CardDashboard = ({title, source,customStyle, keyValue, onPress}) => {
  return (
    <View key={keyValue} className='bg-gray-100 rounded-md flex justify-center' style={styles.container} >
      <Pressable onPress={onPress} className=' items-center'>
      <Image source={source} style={[styles.image, customStyle]} />
      <Text style={styles.textTitle} className='mt-3'>{title}</Text>
      </Pressable> 
    </View> 
  )
} 

export default CardDashboard

const styles = StyleSheet.create({ 
    image:{
        width:widthPercentageToDP(10),
        height:heightPercentageToDP(5),
        resizeMode:'contain',
        alignItems:'center',
        
    },
    container:{
        width:widthPercentageToDP(25),
        height:heightPercentageToDP(15),

    },
    textTitle:{
        fontSize:widthPercentageToDP(3.5),
        fontWeight:'bold',
        color:black,
        textAlign:'center'
    }
})