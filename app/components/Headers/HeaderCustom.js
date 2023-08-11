import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { black } from "../../resource/colors";

const HeaderCustom = ({headerTitle}) => {
  return (
    <View>
      <View className="bg-gray-100 py-5 border-1 border-b-2 border-gray-200">
        <Text className="self-center" style={styles.textTitle}>
         {headerTitle}
        </Text>
      </View>
    </View>
  );
};

export default HeaderCustom;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: widthPercentageToDP(4),
    fontWeight: "bold",
    color: black,
  },
});
