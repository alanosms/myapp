import React from "react";
import Modal from "react-native-modal";
import styles from "./css/styles";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { deleteProduct } from "./ConnectAPI";
import { useNavigation } from "@react-navigation/native";

const ModalComponent = ({ modalVisible, setModalVisible, selectedProduct }) => {
  const navigation = useNavigation();

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
              <Text style={styles.itemInfo}>ID: {selectedProduct.id}</Text>

              <Text style={styles.itemInfo}>{selectedProduct.name}</Text>

              <Text style={styles.itemInfo}>
                Quantidade: {selectedProduct.amount}
              </Text>

              <Text style={styles.editDescription}>
                Descrição: {selectedProduct.description}
              </Text>

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

          <TouchableOpacity>
            <Text>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
