import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyLives = [
  { id: '1', title: 'Climate Change Debate', participants: 'John vs Sarah' },
  { id: '2', title: 'Education Reform', participants: 'Mike vs Emily' },
  { id: '3', title: 'AI Ethics', participants: 'Alex vs Taylor' },
];

const LiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Live Debates</Text>
      <FlatList
        data={dummyLives}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.liveItem}>
            <Text style={styles.liveTitle}>{item.title}</Text>
            <Text style={styles.liveParticipants}>{item.participants}</Text>
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
  liveItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  liveTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  liveParticipants: {
    fontSize: 14,
    color: '#666',
  },
});

export default LiveScreen;