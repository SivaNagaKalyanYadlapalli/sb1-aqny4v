import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>JohnDoe</Text>
        <Text style={styles.bio}>Passionate debater | Climate activist</Text>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>50</Text>
          <Text style={styles.statLabel}>Debates</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>10k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5k</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Recent Debates</Text>
        {/* Add a list of recent debates here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Popular Clips</Text>
        {/* Add a list of popular clips here */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;