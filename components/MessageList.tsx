import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SmsMessage } from "../hooks/useSMSFetcher"

interface MessageListProps {
  messages: SmsMessage[]; // Type for messages prop
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const renderMessage = ({ item }: { item: SmsMessage }) => (
    <View style={styles.messageContainer}>
      <Text>From: {item.address}</Text>
      <Text>Message: {item.body}</Text>
      <Text>Date: {new Date(item.date).toLocaleString()}</Text>
    </View>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderMessage}
      keyExtractor={(item, index) => item.id + index.toString()}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
