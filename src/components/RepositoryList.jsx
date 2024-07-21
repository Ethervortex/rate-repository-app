import { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';
import SortRepositories from './SortRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onRepositoryPress, selectedSort, setSort }) => {
  
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
      ListHeaderComponent={() => <SortRepositories selectedSort={selectedSort} setSort={setSort} />}
    />
  );
};

const RepositoryList = () => {
  const [selectedSort, setSort] = useState("latest");
  const { repositories, refetch } = useRepositories(selectedSort);
  const navigate = useNavigate();

  const openRepo = (id) => {
    navigate(`/repository/${id}`, { replace: true });
  };
  
  useEffect(() => {
    refetch();
  }, [selectedSort]);

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      onRepositoryPress={openRepo}
      selectedSort={selectedSort}
      setSort={setSort}
    />

  )
};

export default RepositoryList;