import React, { useState } from "react";
import { postProduct } from "../components/ConnectAPI";
import { View, Button, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ModalCamera from "../components/ModalCamera";

import styles from "../components/css/styles";

const NewProduct = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    amount: "",
    urlImage: "",
  });

  const handleInputChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const handleImage = (imageUri) => {
    console.log("Image URI", imageUri);
    setProduct({ ...product, urlImage: imageUri });
  };

  const resetForm = () => {
    setProduct({ name: "", description: "", amount: "", urlImage: "" });
  };

  const handleModalCamera = () => {
    setModalVisible(true);
  };

  return (
    <>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputRegisterProduct}
          placeholder="Nome do produto"
          value={product.name}
          onChangeText={(text) => handleInputChange("name", text)}
        />
        <TextInput
          style={styles.inputRegisterProduct}
          placeholder="Descrição"
          value={product.description}
          onChangeText={(text) => handleInputChange("description", text)}
        />
        <TextInput
          style={styles.inputRegisterProduct}
          keyboardType="numeric"
          placeholder="Quantidade"
          value={product.amount}
          onChangeText={(text) => handleInputChange("amount", text)}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{ ...styles.inputRegisterProduct, flex: 1 }}
            placeholder="URL da imagem"
            value={product.urlImage}
            onChangeText={(text) => handleInputChange("urlImage", text)}
          />
          <TouchableOpacity
            onPress={handleModalCamera}
            style={{
              backgroundColor: "gray",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              width: 50,
              paddingHorizontal: 10,
            }}
          >
            <Image source={require('../components/img/camera.png')} style={{height: 28, width: 28}}/>
          </TouchableOpacity>
        </View>

        <Button
          title="Salvar"
          onPress={() => {
            if (
              !product.amount ||
              !product.description ||
              !product.name ||
              !product.urlImage
            ) {
              alert("Algum valor está vazio, verique");
            } else {
              postProduct(product);
              resetForm();
              navigation.navigate("Estoque");
            }
          }}
        />
      </View>
      <ModalCamera
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        handleImage={handleImage}
      />
    </>
  );
};

export default NewProduct;
