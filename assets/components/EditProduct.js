import React from "react";
import Modal from "react-native-modal";
import styles from "./css/styles";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const ModalComponent = ({ modalVisible, setModalVisible, selectedProduct }) => {
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
          borderRadius: 6
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
           <Text style={styles.itemInfo}>ID: {selectedProduct.id}</Text>


           <Text style={styles.itemInfo}>Quantidade: {selectedProduct.amount}</Text>

           <Text style={styles.input}>{selectedProduct.description}</Text>
              
           <Text style={styles.input}>Descrição: {selectedProduct.description}</Text>


              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              ></TouchableOpacity>
            </>
          ) : null}
        </View>
        <View>
          <TouchableOpacity>
            <Text>Salvar</Text>
            </TouchableOpacity>
  
        </View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
