import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import styles from "./css/styles";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { deleteProduct, editData } from "./ConnectAPI";
import { useNavigation } from "@react-navigation/native";

const ModalComponent = ({ modalVisible, setModalVisible, selectedProduct }) => {
  const navigation = useNavigation();

  const [nameProd, setNameProd] = useState(
    selectedProduct ? selectedProduct.name : ""
  );
  const [description, setDescription] = useState(
    selectedProduct ? selectedProduct.description : ""
  );
  const [amount, setAmount] = useState(
    selectedProduct ? selectedProduct.amount : ""
  );

  useEffect(() => {
    setNameProd(selectedProduct ? selectedProduct.name : "");
    setDescription(selectedProduct ? selectedProduct.description : "");
    setAmount(selectedProduct ? selectedProduct.amount : "");
  }, [selectedProduct]);

  const productEdited = {
    name: nameProd,
    amount: amount,
    description: description,
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      style={styles.modal}
    >
      <View
        style={{
          ...styles.editItem,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 6,
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          <Text>Fechar</Text>
        </TouchableOpacity>
        <View>
          {selectedProduct ? (
            <>
              <View
                style={{
                  flex: 0.5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 40,
                }}
              >
                <Image
                  source={{ uri: selectedProduct.urlImage }}
                  style={{
                    marginTop: 30,
                    width: 150,
                    height: 150,
                    resizeMode: "contain",
                  }}
                />
              </View>

              <Text style={{ ...styles.itemInfo, marginTop: 10 }}>
                ID: {selectedProduct.id}
              </Text>

              <TextInput
                style={styles.itemInfo}
                onChangeText={(text) => setNameProd(text)}
              >
                {selectedProduct.name}
              </TextInput>

              <TextInput
                style={styles.itemInfo}
                keyboardType="numeric"
                onChangeText={(text) => setAmount(text)}
              >
                {selectedProduct.amount}
              </TextInput>

              <TextInput
                style={styles.editDescription}
                onChangeText={(text) => setDescription(text)}
                multiline
                numberOfLines={4}
              >
                {selectedProduct.description}
              </TextInput>

              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              ></TouchableOpacity>
            </>
          ) : null}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              deleteProduct(selectedProduct.id);
              setModalVisible(false);
              navigation.navigate("Estoque");
            }}
            style={{ marginRight: 50 }}
          >
            <Text style={{ color: "red" }}>Deletar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
              navigation.navigate("Estoque");

              editData(selectedProduct.id, productEdited);
            }}
            style={{ marginRight: 50 }}
          >
            <Text>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
