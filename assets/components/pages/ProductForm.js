import React, { useState } from "react";
import axios from "axios";
import { View, TextInput, Button, StyleSheet } from "react-native";

const ProductForm = () => {
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

  const postProduct = async (product) => {
    try {
      const response = await axios.post(
        "http://192.168.0.150:3030/products/",
        product
      );
      alert("Produto Criado com sucesso!");
    } catch (error) {
      console.error(error);
    }
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
            console.log(product);
            postProduct(product);
            resetForm();
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
