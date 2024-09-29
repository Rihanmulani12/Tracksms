import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MessageList } from './components/MessageList';
import { ToggleButton } from './components/ToggleButton';
import { useSMSFetcher } from './hooks/useSMSFetcher';
import { SmsMessage } from './smstypes'; // Import your SmsMessage type

const App: React.FC = () => {
  const [showAllMessages, setShowAllMessages] = useState<boolean>(false);
  const [showBankMessages, setShowBankMessages] = useState<boolean>(false);
  const [showAmountMessages, setShowAmountMessages] = useState<boolean>(false);
  const [showGroceryMessages, setShowGroceryMessages] = useState<boolean>(false);

  const { messages, bankMessages, amountMessages, groceryMessages } = useSMSFetcher();

  return (
    <View style={styles.container}>
      <ToggleButton
        title={showAllMessages ? 'Hide All SMS' : 'View All SMS'}
        onPress={() => setShowAllMessages(!showAllMessages)}
      />
      {showAllMessages && (
        //@ts-ignore
        <MessageList messages={messages} style={styles.messageList} />
      )}

      <Text style={styles.title}>Bank Messages</Text>
      <ToggleButton
        title={showBankMessages ? 'Hide Bank Expenses' : 'View All Bank Expenses'}
        onPress={() => setShowBankMessages(!showBankMessages)}
      />
      {showBankMessages && (
        //@ts-ignore
        <MessageList messages={bankMessages} style={styles.messageList} />
      )}

      <Text style={styles.title}>Messages Containing 500 Rupees</Text>
      <ToggleButton
        title={showAmountMessages ? 'Hide Amount Messages' : 'View Amount Messages'}
        onPress={() => setShowAmountMessages(!showAmountMessages)}
      />
      {showAmountMessages && (
        //@ts-ignore
        <MessageList messages={amountMessages} style={styles.messageList} />
      )}

      <Text style={styles.title}>Grocery Messages</Text>
      <ToggleButton
        title={showGroceryMessages ? 'Hide Groceries' : 'View All Groceries'}
        onPress={() => setShowGroceryMessages(!showGroceryMessages)}
      />
      {showGroceryMessages && (
        //@ts-ignorer
        <MessageList messages={groceryMessages} style={styles.messageList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333', // Darker text color for better readability
  },
  messageList: {
    backgroundColor: '#fff', // White background for the message list
    borderRadius: 8,
    padding: 10,
    elevation: 3, // Shadow effect for Android
    marginBottom: 20,
  },
});

export default App;


