import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Pressable } from 'react-native';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import HeaderComponent from '../../components/HeaderComponent';
import InputCustom from '../../components/Input/InputCustom';
export default function SurveyCompetitor() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => { 
      if (Platform.OS === 'android' && !Device.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android Emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      } 

      let location = await Location.getCurrentPositionAsync({});
      let loc = `${location.coords.latitude}, ${location.coords.longitude}`;
      setLocation(loc);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location); 
  }
const getLocInput = async () => {
    console.log('test');
    let location = await Location.getCurrentPositionAsync({});
    let loc = `${location.coords.latitude}, ${location.coords.longitude}`;
    setLocation(loc);
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location); 
    }
 
   
}
  return (
    <View className='flex-1 bg-white '> 
        <HeaderComponent title={'Survey Pesaing'} />
      {/* <Text style={styles.paragraph}>{text}</Text> */}
      <View className='m-4'>
       <Pressable onPress={() => getLocInput}>
       <InputCustom label={'Lokasi'} value={text} disabled={true} />
       </Pressable>
      </View>
    </View>
  ); 
}  

const styles = StyleSheet.create({
  
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
