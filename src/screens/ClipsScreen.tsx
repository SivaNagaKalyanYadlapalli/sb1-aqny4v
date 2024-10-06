import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const dummyClips = [
  { id: '1', title: 'Best argument on climate change', author: 'John Doe', likes: 1200 },
  { id: '2', title: 'Surprising fact about education', author: 'Jane Smith', likes: 980 },
  { id: '3', title: 'AI debate highlight', author: 'Alex Johnson', likes: 1500 },
];

const ClipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trending Clips</Text>
      <FlatList
        data={dummyClips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.clipItem}>
            <Image
              source={{ uri: 'https://via.placeholder.com/150' }}
              style={styles.clipThumbnail}
            />
            <View style={styles.clipInfo}>
              <Text style={styles.clipTitle}>{item.title}</Text>
              <Text style={styles.clipAuthor}>{item.author}</Text>
              <Text style={styles.clipLikes}>{item.likes} likes</Text>
            </View>
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
  clipItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  clipThumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  clipInfo: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  clipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clipAuthor: {
    fontSize: 14,
    color: '#666',
  },
  clipLikes: {
    fontSize: 12,
    color: '#888',
  },
});

export default ClipsScreen;