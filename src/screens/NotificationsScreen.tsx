import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummyNotifications = [
  { id: '1', message: 'John Doe mentioned you in a comment', time: '2h ago' },
  { id: '2', message: 'Your debate clip reached 1000 likes!', time: '5h ago' },
  { id: '3', message: 'New live debate starting: AI Ethics', time: '1d ago' },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={dummyNotifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationMessage}>{item.message}</Text>
            <Text style={styles.notificationTime}>{item.time}</Text>
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
  notificationItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  notificationMessage: {
    fontSize: 16,
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default NotificationsScreen;