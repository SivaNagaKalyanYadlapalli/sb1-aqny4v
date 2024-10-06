import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyTrends = [
  { id: '1', hashtag: '#ClimateAction', count: 1000 },
  { id: '2', hashtag: '#EducationForAll', count: 850 },
  { id: '3', hashtag: '#AIEthics', count: 750 },
  { id: '4', hashtag: '#HealthcareReform', count: 600 },
  { id: '5', hashtag: '#SustainableLiving', count: 500 },
];

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending Hashtags</Text>
      <FlatList
        data={dummyTrends}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.trendItem}>
            <Text style={styles.trendRank}>#{index + 1}</Text>
            <Text style={styles.trendHashtag}>{item.hashtag}</Text>
            <Text style={styles.trendCount}>{item.count} debates</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  trendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  trendRank: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  trendHashtag: {
    fontSize: 16,
    flex: 1,
  },
  trendCount: {
    fontSize: 14,
    color: '#666',
  },
});

export default ExploreScreen;