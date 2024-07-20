import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onRepositoryPress }) => {
  
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const rItem = ({ item }) => {
    return (
      <Pressable onPress={() => {onRepositoryPress(item.id)}}>
        <RepositoryItem repository={item} />
      </Pressable>
    );
  };
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={rItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate();

  const openRepo = (id) => {
    navigate(`/repository/${id}`, { replace: true });
  };
  
  return <RepositoryListContainer 
    repositories={repositories} 
    onRepositoryPress={openRepo}
  />;
};

export default RepositoryList;