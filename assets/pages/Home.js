import React, { useState } from "react";
import { View } from "react-native";
import { Products } from "../components/Products";
import SearchBar from "../components/Search";

const HomeScreen = () => {
  const [term, setTerm] = useState("");

  const handleTermChange = (newTerm) => {
    setTerm(newTerm);
  };

  return (
    <View style={{ paddingBottom: 120 }}>
      <SearchBar term={term} onTermChange={handleTermChange} />
      <Products term={term} />
    </View>
  );
};

export default HomeScreen;
