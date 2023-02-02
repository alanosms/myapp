// Screen.js
import React, { useState } from 'react';
import { View } from 'react-native';
import Products from '../Products';
import SearchBar from '../Search';

const HomeScreen = () => {
  const [term, setTerm] = useState('');

  const handleTermChange = newTerm => {
    setTerm(newTerm);
  };

  return (
    <View style={{paddingBottom: 120}}
      >
      <SearchBar
        term={term}
        onTermChange={handleTermChange}
        onTermSubmit={() => console.log('Exibindo filtro para:', term)}
      />
      <Products term={term} />
    </View>
  );
};

export default HomeScreen;
