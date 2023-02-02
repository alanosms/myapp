import { Searchbar } from 'react-native-paper';
import Products from './Products';

import React from 'react';



const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  
    return (
        <Searchbar
        autoCorrect={false}
        style={{ marginTop: 35, marginBottom: 35, marginLeft: 20, marginRight: 20 }}
        placeholderTextColor="gray"
        placeholder="Busque por nome do produto"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    );
  };
  
  export default SearchBar;