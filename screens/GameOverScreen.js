import { View, Image, Text, StyleSheet, Button, Linking } from "react-native";

import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>ĐÁ GÀ TRỰC TUYẾN</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/da-ga-thomo-campuchia-la-tro-choi-ca-cuoc-duoc-anh-quan-tam.jpg")}
        />
      </View>
      <PrimaryButton onPress={onStartNewGame} >ĐĂNG KÍ NGAY</PrimaryButton>

      <PrimaryButton onPress={onStartNewGame} >ĐĂNG NHẬP NGAY</PrimaryButton>

    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  
  

});
