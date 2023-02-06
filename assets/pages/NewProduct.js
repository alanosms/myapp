import React, { useState } from "react";
import { postProduct } from "../components/ConnectAPI";
import { View, TextInput, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../components/css/styles";

const NewProduct = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    amount: "",
    urlImage: "",
  });

  const handleInputChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const resetForm = () => {
    setProduct({ name: "", description: "", amount: "", urlImage: "" });
  };

  return (
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
      <TextInput
        style={styles.inputRegisterProduct}
        placeholder="URL da imagem"
        value={product.urlImage}
        onChangeText={(text) => handleInputChange("urlImage", text)}
      />
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
  );
};

export default NewProduct;
