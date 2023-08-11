import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCustom from "../../components/Headers/HeaderCustom";
import QuisionerCardComponent from "../../components/QuisionerCard/QuisionerCardComponent";

const QuisionerScreenFirst = () => {
  const [dataQuisioner, setdataQuisioner] = useState([
    {
      id: 1,
      question:
        "Tata hubungan antara unit usaha dengan unit lain dalam perusahaan yang meliputi: citra, kemampuan pemasaran, akses ke pasar dana, dan fasilitas bersama akan menyebabkan perusahaan secara strategis sangat berkepentingan untuk tetap berada dalam bisnis tersebut",
    },
    {
      id: 2,
      question:
        "Jika pembeli bertambah maka biaya tetap operasional akan menurun secara signifikan",
    },
    {
      id: 3,
      question:
        "Identifikasi merek dan kesetiaan pelanggan disebabkan oleh layanan perusahaan kepada pelanggan",
    },
    {
      id: 4,
      question:
        "Adanya biaya beralih pemasok (switching cost) yang harus dikeluarkan pembeli bilamana mereka berpindah dari satu pemasok ke pemasok lain",
    },
    {
      id: 5,
      question:
        "Adanya hambatan untuk masuk ke saluran distribusi dapat ditimbulkan dengan adanya kebutuhan dari pesaing baru untuk mengamankan distribusi produknya",
    },
    {
      id: 6,
      question:
        "Perusahaan yang telah mapan mempunyai keunggulan biaya yang tidak dapat ditiru oleh pesaing baru yang akan masuk",
    },
  ]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <HeaderCustom headerTitle={"Kuisioner Kepuasan Pelanggan"} />

      <View className="flex-1">
        <FlatList
          data={dataQuisioner}
          renderItem={({ item }) => (
            <View className="m-3">
              <QuisionerCardComponent question={item.question} />
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuisionerScreenFirst;

const styles = StyleSheet.create({});
