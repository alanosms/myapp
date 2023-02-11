import {
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import styles from "./css/styles";
import { React, useState, useEffect } from "react";
import ModalComponent from "./EditProduct";
import axios from "axios";
import { useIsFocused } from "@react-navigation/native";

const ENDPOINT_API = "http://192.168.0.150:3030/products/";

const Item = ({ name, amount }) => (
  <View style={styles.productInfo}>
    <Text style={styles.productName}>{name}</Text>
    <Text style={styles.productAmount}>Quantidade: {amount}</Text>
  </View>
);

export const Products = ({ term }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const [error, setError] = useState(null);

  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) handleRefresh();
  }, [isFocused]);

  const fetchData = async () => {
    try {
      const response = await axios.get(ENDPOINT_API);
      setData(response.data);
      setFilteredData(
        term.length > 0
          ? response.data.filter((item) => item.name.toLowerCase().includes(term.toLowerCase()))
          : response.data
      );
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [term, handleRefresh]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  };

  return (
    <>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={filteredData}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListEmptyComponent={() => (
          <View>
            <Text style={{ textAlign: "center" }}>
              Você ainda não possui produtos cadastrados!
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image
              source={{ uri: item.urlImage }}
              style={styles.productImage}
            />
            <Item name={item.name} amount={item.amount} />
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.buttonEdit}
                onPress={() => {
                  setSelectedProduct(item);
                  setModalVisible(true);
                }}
              >
                <Text>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <ModalComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedProduct={selectedProduct}
      />
    </>
  );
};
