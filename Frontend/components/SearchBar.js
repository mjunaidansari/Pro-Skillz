import React, { useContext, useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CategoryContext from '../context/CategoryContext';
import SearchContext from '../context/SearchContext';

const SearchBar = () => {
  const { category, getAllCategories } = useContext(CategoryContext);
  const { updateSearchData } = useContext(SearchContext);
  const [searchText, setSearchText] = useState('');

  const handleClear = () => {
    setSearchText('');
    updateSearchData([]);
  };

  if (category.length === 0) {
    getAllCategories();
  }

  const handleSearch = (text) => {
    setSearchText(text);

    if (text.trim() === '') {
      handleClear();
    }
    else {
      const filteredData = category.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      // console.log(filteredData);
      if (filteredData.length === 0) {
        updateSearchData(null);
      }
      else {
        updateSearchData(filteredData);
      }
    }

  };

  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.inputContainer}>
        <AntDesign name="search1" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={handleSearch}
        />
        {searchText !== '' && (
          <TouchableOpacity onPress={handleClear}>
            <AntDesign name="close" size={20} color="#888" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchIcon: {
    marginLeft: 12,
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  clearIcon: {
    marginHorizontal: 12,
  },
});

export default SearchBar;
