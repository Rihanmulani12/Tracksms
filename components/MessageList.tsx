import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { SmsMessage } from '../smstypes'; // Make sure to import the SmsMessage type

interface MessageListProps {
  messages: SmsMessage[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const renderItem = ({ item }: { item: SmsMessage }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.sender}>{item.address}</Text>
      <Text style={styles.body}>{item.body}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item, index) => `${item.id}-${index}`}// Ensure a unique key
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sender: {
    fontWeight: 'bold',
  },
  body: {
    marginTop: 5,
  },
  date: {
    marginTop: 5,
    color: '#888',
    fontSize: 12,
  },
});


