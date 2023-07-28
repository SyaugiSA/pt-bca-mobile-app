import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/Button/PrimaryButton'
import { red_primary } from '../../resource/colors'
import SecondaryButton from '../../components/Button/SecondaryButton'
const LandingPage = ({navigation}) => {
  return ( 
    <SafeAreaView className='flex-1 bg-white justify-center'>  
     <Text className='self-center justify-center my-5 font-bold text-2xl'>Selamat Datang di Pt Bca App </Text> 
    
     <View className='m-3'>
    <CustomButton buttonColor={red_primary} mode={'contained'} title='Register' onPress={() => navigation.navigate('RegisterScreen')} /> 
    
    </View><View className='m-3'>
    <SecondaryButton buttonColor={red_primary} mode={'contained'} title='Login' onPress={() => navigation.navigate('LoginScreen')} /> 
    
    </View>
    </SafeAreaView> 
  )  
}   
   
export default LandingPage 
   
const styles = StyleSheet.create({})    