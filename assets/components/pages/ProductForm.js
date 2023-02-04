import React, { useState } from "react";
import {postProduct} from '../ConnectAPI'
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProductForm = () => {
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
        style={styles.input}
        placeholder="Nome do produto"
        value={product.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={product.description}
        onChangeText={(text) => handleInputChange("description", text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Quantidade"
        value={product.amount}
        onChangeText={(text) => handleInputChange("amount", text)}
      />
      <TextInput
        style={styles.input}
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
            navigation.navigate('Estoque');
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ProductForm;
