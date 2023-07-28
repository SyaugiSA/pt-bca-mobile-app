import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CardDashboard from '../../components/Cards/CardDashboard';
import images from '../../resource/images';

const Homepage = () => {
  const [dashboardData, setdashboardData] = useState([
    {id:1, title:'this is a card 1', imageSources:images.reactLogo},
    {id:2, title:'this is a card 2', imageSources:images.reactLogo},
    {id:3, title:'this is a card 3', imageSources:images.reactLogo},
    {id:4, title:'this is a card 4', imageSources:images.reactLogo},
    {id:5, title:'this is a card 5', imageSources:images.reactLogo},
  ])
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Text className='text-2xl m-4 '>Selamat Datang, User</Text>
     <View>
     <FlatList
        data={dashboardData}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column' }}>
            <CardDashboard keyValue={item.id} title={item.title} source={item.imageSources} />
          </View>
        )}
        
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
     </View>
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({})