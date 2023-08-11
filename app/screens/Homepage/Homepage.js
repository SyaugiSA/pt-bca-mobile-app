import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import CardDashboard from '../../components/Cards/CardDashboard';
import images from '../../resource/images';

const Homepage = ({navigation}) => {
  const [dashboardData, setdashboardData] = useState([
    {id:1, title:'Kuisioner Kepuasan Pelanggan', imageSources:images.reactLogo, navigateTo : 'QuisScreenFirst'},
    {id:2, title:'Kuisioner Analisis Kompetitor', imageSources:images.reactLogo,navigateTo : 'QuisScreenSecond'},
    {id:3, title:'Form Survey Pesaing', imageSources:images.reactLogo,navigateTo : 'SurveyCompetitor'},
    {id:4, title:'Form Survey Potensi Lahan', imageSources:images.reactLogo},
    {id:5, title:'Form Survey Toko', imageSources:images.reactLogo},
  ])
  return (
    <SafeAreaView className='bg-white flex-1'>
      <ScrollView>
      <Text className='text-2xl m-4 '>Selamat Datang, User</Text>
      <View>
        <Image source={{
          uri:'https://www.wordstream.com/wp-content/uploads/2021/07/banner-ads-examples-ncino.jpg'
        }} style={{width:wp(90), height:heightPercentageToDP(20), resizeMode:'contain', alignSelf:'center'}} />
      </View> 
     <View className='self-center'> 
     <FlatList
        data={dashboardData}
        renderItem={({ item }) => (
          <View className='m-3'>
            <CardDashboard keyValue={item.id} title={item.title} source={item.imageSources} onPress={() => navigation.navigate(item.navigateTo)} /> 
          </View>
        )}
        
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
     </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default Homepage

const styles = StyleSheet.create({})